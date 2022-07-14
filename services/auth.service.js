import { v4 as uuid } from 'uuid';
import jwt from 'jsonwebtoken';
import axios from 'axios';

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
    const KEY = uuid();
    const t = jwt.sign(
        {
            username,
            admin: true,
        },
        KEY
    );

    const users = await axios.get(
        'https://62cf4fe3826a88972d0baac0.mockapi.io/api/v1/users'
    );

    const user = users.data.filter((user) => user.username === username);

    console.log('logger user', user[0]);

    return {
        token: t,
        user: {
            id: user[0].id,
            name: user[0].username,
            email: user[0].username,
        },
    };
}

/**
 * -------------------------------------
 * Recover user data if token is present
 * -------------------------------------
 */
export async function recoverUserInfo(token) {
    await delay();
    return {
        token: uuid(),
        user: {
            id: '00087',
            name: 'Yuri Royer',
            email: 'yuriroyer@gmail.com',
        },
    };
}
