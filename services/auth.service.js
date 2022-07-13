import { v4 as uuid } from 'uuid';

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
    await delay();

    return {
        token: uuid(),
        user: {
            id: '00087',
            name: 'Yuri Royer',
            email: 'maykonmarcos@gmail.com',
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
            email: 'maykonmarcos@gmail.com',
        },
    };
}
