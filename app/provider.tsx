"use client"
import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';
import { UserDetails } from '@/types/user';

function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
    const { user, isLoaded } = useUser();
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

    const createNewUser = useCallback(async () => {
        try {
            const result = await axios.post('/api/users');
            console.log(result.data);
            setUserDetails(result.data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    }, []);

    useEffect(() => {
        if (isLoaded && user) {
            createNewUser();
        }
    }, [user, isLoaded, createNewUser]);

    return (
        <div>
            <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
                {children}
            </UserDetailContext.Provider>
        </div>
    );
}

export default Provider