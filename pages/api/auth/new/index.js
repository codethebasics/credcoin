const FormData = require('form-data');

/**
 * --------
 * New User
 * --------
 */
export default async function addNewUser(req, res) {
    const action = 'addNewUser';
    const chave_key = process.env.API_KEY;
    const level_id = 2;
    const document_type = 5;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const uf = req.body.uf;
    const city = req.body.city;

    try {
        const form = new FormData();
        form.append('action', action);
        form.append('chave_key', chave_key);
        form.append('level_id', level_id);
        form.append('document_type', document_type);
        form.append('name', name);
        form.append('email', email);
        form.append('password', password);
        form.append('uf', uf);
        form.append('city', city);

        const response = await fetch(process.env.CRD_API + '/new', {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: form,
        });

        res.status(200).json({
            response: response,
        });
    } catch (error) {
        res.status(500).json({
            response: {
                message: 'Erro ao cadastrar novo usuário',
            },
        });
    }
}
