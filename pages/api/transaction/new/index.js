const FormData = require('form-data');

export default async function addNewTransaction(req, res) {
    console.log('AddNewUser API Proxy');
    const action = req.body.action;
    const user_id = req.body.user_id;
    const amount = req.body.amount;

    if (req.method === 'POST') {
        try {
            const form = new FormData();
            form.append('action', action);
            form.append('chave_key', process.env.API_KEY);
            form.append('user_id', user_id);
            form.append('amount', amount);

            const newTransaction = await fetch(process.env.CRD_API, {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                body: form,
            }).then((response) => response.json());

            res.status(200).json({
                response: {
                    message: 'Transação cadastrada com sucesso.',
                    api: newTransaction,
                },
            });
        } catch (error) {
            res.status(500).json({
                response: {
                    message: 'Erro durante a criação da transação',
                },
            });
        }
    }
}
