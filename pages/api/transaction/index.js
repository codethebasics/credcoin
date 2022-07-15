export default function transactionHandler(req, res) {
    switch (req.method) {
        case 'GET':
            handleGET(req, res);
            break;
        case 'POST':
            handlePOST(req, res);
            break;
        case 'PUT':
            handlePUT(req, res);
            break;
        case 'DELETE':
            handleDELETE(req, res);
            break;
        default:
            res.status(400).json({
                response: { message: 'method not allowed' },
            });
    }
}

/**
 * ---
 * GET
 * ---
 */
function handleGET(req, res) {
    console.log('Transaction Proxy API => GET');
    res.status(200).json({
        response: {
            message: 'GET',
        },
    });
}

/**
 * ----
 * POST
 * ----
 */
function handlePOST(req, res) {
    console.log('Transaction Proxy API => POST');
    res.status(200).json({
        response: {
            message: 'POST',
        },
    });
}

/**
 * ---
 * PUT
 * ---
 */
function handlePUT(req, res) {
    console.log('Transaction Proxy API => PUT');
    res.status(200).json({
        response: {
            message: 'PUT',
        },
    });
}

/**
 * ------
 * DELETE
 * ------
 */
function handleDELETE(req, res) {
    console.log('Transaction Proxy API => DELETE');
    res.status(200).json({
        response: {
            message: 'DELETE',
        },
    });
}
