/**
 * -------------------
 * Transaction Service
 * -------------------
 * @author codethebasics by DuckTech
 */
const TRANSACTION_URI = process.env.NEXT_PUBLIC_CRD_PROXY_API_TRANSACTION;

/**
 * ---
 * GET
 * ---
 */
async function getTransaction(userId) {
    console.log('Transaction Service => GET');

    const transactionList = await fetch(TRANSACTION_URI, {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: userId,
            limit: 10,
        }),
    }).then((response) => response.json());

    return transactionList.response;
}

/**
 * ----
 * POST
 * ----
 */
async function postTransaction(transaction) {
    transaction.action = 'addNewTransaction';
    console.log('---------------------');
    console.log(transaction);
    console.log('---------------------');
    const savedTransaction = await fetch(TRANSACTION_URI + '/new', {
        method: 'POST',
        body: JSON.stringify(transaction),
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

    return savedTransaction;
}

/**
 * ---
 * PUT
 * ---
 */
async function putTransaction() {
    console.log('Transaction Service => PUT');

    const updatedTransaction = await fetch(TRANSACTION_URI, {
        method: 'PUT',
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

    return updatedTransaction.response;
}

/**
 * ------
 * DELETE
 * ------
 */
async function deleteTransaction() {
    console.log('Transaction Service => DELETE');

    const deletedTransaction = await fetch(TRANSACTION_URI, {
        method: 'DELETE',
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

    return deletedTransaction.response;
}

export { getTransaction, postTransaction, putTransaction, deleteTransaction };
