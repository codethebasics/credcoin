import { v4 as uuid } from 'uuid';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import $ from 'jquery';

/**
 * ====================================
 * Authentication service via API Proxy
 * ====================================
 * @author codethebasics
 */

// Simulates server side delay
const delay = (amount = 1000) =>
    new Promise((resolve) => setTimeout(resolve, amount));

/**
 * ------
 * SignIn
 * ------
 */
export async function signInRequest(data) {
    const { username, password } = data;

    const user = await fetch(process.env.NEXT_PUBLIC_CRD_PROXY_API_AUTH, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    }).then((response) => response.json());

    return user.response;
}

/**
 * -------------------------------------
 * Recover user data if token is present
 * -------------------------------------
 */
export async function recoverUserInfo(token) {
    return {
        token: uuid(),
        user: {
            id: '00087',
            name: 'Yuri Royer',
            email: 'yuriroyer@gmail.com',
        },
    };
}
