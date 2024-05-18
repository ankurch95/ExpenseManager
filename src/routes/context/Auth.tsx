import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthData } from './AuthData';

type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    signIn(e: any): Promise<void>;
    signOut(): void;
    loginStatus: any
};


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>();
    const [loading, setLoading] = useState(true);
    const [loginStatus, setLoginStatus] = useState(true);

    useEffect(() => {       
        loadStorageData();
    }, []);

    async function loadStorageData(): Promise<void> {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if (authDataSerialized) {
                const _authData: AuthData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
            }
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    const signIn = async (emp: any) => {        
        const _authData = emp
        setLoginStatus(true)
        setAuthData(_authData);
        AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    };

    const signOut = async () => {
        setAuthData(undefined);
        setLoginStatus(false)
        await AsyncStorage.removeItem('@AuthData');
    };

    return (
        <AuthContext.Provider value={{ authData, loading, signIn, signOut, loginStatus }}>
            {children}
        </AuthContext.Provider>
    );
};


function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export { AuthContext, AuthProvider, useAuth };