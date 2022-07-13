import { createContext, useEffect, useState } from 'react';
import { recoverUserInfo, signInRequest } from '../../services/auth.service';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const { 'credcoin.token': token } = parseCookies();
        if (token) {
            recoverUserInfo(token).then((response) => setUser(response.user));
        }
    }, []);

    const isAuthenticated = !!user;

    const signIn = async ({ username, password }) => {
        const { token, user } = await signInRequest({
            username,
            password,
        });

        setCookie(undefined, 'credcoin.token', token, {
            maxAge: 60 * 60 * 1, // 1 hora
        });

        setUser(user);

        Router.push('/home');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}
