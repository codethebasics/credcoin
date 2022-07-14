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

    // const loginFormData = new FormData();
    // loginFormData.append('action', 'getDataUser');
    // loginFormData.append('chave_key', 'API_KEY-c21hcnRkdWNrdGVjaA==');
    // loginFormData.append('email', 'yuri13royer@gmail.com');
    // loginFormData.append('password', '123');

    // fetch('https://crddao.io/api/ws.0.0.1', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         action: 'getDataUser',
    //         chave_key: 'API_KEY-c21hcnRkdWNrdGVjaA==',
    //         email: 'yuri13royer@gmail.com',
    //         password: '123',
    //     }),
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

    // const response = await axios.post('https://crddao.io/api/ws.0.0.1', {
    //     method: 'POST',
    //     data: loginFormData,
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //     },
    // });

    const response = await $.ajax({
        url: 'https://crddao.io/api/ws.0.0.1',
        type: 'post',
        dataType: 'html',
        data: {
            action: 'getDataUser',
            chave_key: 'API_KEY-c21hcnRkdWNrdGVjaA==',
            email: username,
            password: password,
        },
    });

    const jsonResponse = JSON.parse(response);
    const user = jsonResponse.data[0];

    const KEY = uuid();
    const jsonToken = jwt.sign(
        {
            name: user.name,
            email: user.email,
            level_id: user.level_id,
            document_user: user.document_user,
            uf: user.uf,
            city: user.city,
            ip_conect: user.ip_conect,
        },
        KEY
    );

    if (user) {
        return {
            token: jsonToken,
            user: {
                id: user.id,
                level_id: user.level_id,
                registration_date: user.registration_date,
                document_type_id: user.document_type_id,
                name: user.name,
                email: user.email,
                uf: user.uf,
                city: user.city,
            },
        };
    }
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
