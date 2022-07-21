const FormData = require('form-data');

export default async function txid(req, res) {
    const { txid } = req.query;

    if (req.method === 'POST') {
        const form = new FormData();
        form.append('action', 'getTransactionsUserTxid');
        form.append('chave_key', process.env.API_KEY);
        form.append('txid', txid);

        const transaction = await fetch('https://crddao.io/api/request', {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: form,
        }).then((response) => response.json());
        res.status(200).json({ transaction: transaction?.data[0] });
    } else {
        res.status(500).json({ message: 'Method not allowed.' });
    }
}
