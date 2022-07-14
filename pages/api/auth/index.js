const axios = require('axios');
const FormData = require('form-data');

export default async function authenticationHandler(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (req.method === 'POST') {
        if (!username || !password) {
            res.status(400).json({ message: 'Username/Password must be sent' });
        } else {
            const loginFormData = new FormData();
            loginFormData.append('action', 'getDataUser');
            loginFormData.append('chave_key', process.env.API_KEY);
            loginFormData.append('email', username);
            loginFormData.append('password', password);
            await axios
                .post(process.env.CRD_API, {
                    method: 'POST',
                    data: loginFormData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    console.log(response);
                    res.status(200).json({ message: 'ok' });
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).json({ message: 'Authentication error.' });
                });
        }
    } else {
        res.status(500).json({ message: 'Method Not Allowed.' });
    }
}
