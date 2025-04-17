"use client"

import { createContext, ReactNode, useContext, useState } from "react";


interface AppContextType {
    isPop: boolean;
    setPop: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
    
    const [isPop, setPop] = useState<boolean>(false)

    return (
        <AppContext.Provider value={{ isPop, setPop }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export default AppProvider