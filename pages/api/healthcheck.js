/**
 * =====================
 * API Proxy healthcheck
 * =====================
 * @author codethebasics by DuckTech
 */
export default function healthcheck(req, res) {
    res.status(200).json({
        message: 'Healthy',
        method: req.method,
    });
}
