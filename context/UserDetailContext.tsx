import { UserDetails } from "@/types/user";
import { createContext, useContext } from "react";

export type UserDetailContextType = {
    userDetails: UserDetails | null;
    setUserDetails: (userDetails: UserDetails | null) => void;
};

export const UserDetailContext = createContext<UserDetailContextType | undefined>(undefined);

// Custom hook to use the context safely
export const useUserDetail = () => {
    const context = useContext(UserDetailContext);
    if (context === undefined) {
        throw new Error('useUserDetail must be used within a UserDetailContext Provider');
    }
    return context;
};