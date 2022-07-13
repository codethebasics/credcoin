import { v4 as uuid } from 'uuid';

const delay = (amount = 1000) =>
    new Promise((resolve) => setTimeout(resolve, amount));

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
