import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const user = await currentUser();
        
        // Check if user is authenticated
        if (!user || !user.primaryEmailAddress?.emailAddress) {
            return NextResponse.json(
                { error: "User not authenticated" }, 
                { status: 401 }
            );
        }

        // Check if user already exists
        const existingUsers = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.email, user.primaryEmailAddress.emailAddress));

        if (existingUsers.length === 0) {
            // Create new user if doesn't exist
            const result = await db
                .insert(usersTable)
                .values({
                    
                    //@ts-ignore
                    name: user.fullName || user.firstName || "Unknown",
                    email: user.primaryEmailAddress.emailAddress,
                    credits: 10
                })
                .returning();

            return NextResponse.json(result[0]);
        }

        // Return existing user
        return NextResponse.json(existingUsers[0]);

    } catch (error) {
        console.error("Error in user API:", error);
        return NextResponse.json(
            { error: "Internal server error" }, 
            { status: 500 }
        );
    }
}