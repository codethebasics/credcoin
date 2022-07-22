import { useEffect } from 'react';

export default function TransactionDetail(props) {
    useEffect(() => {}, []);
    return (
        <div>
            <div>
                <span>Detalhes da operação</span>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>STATUS:</td>
                            <td>{props.status}</td>
                        </tr>
                        <tr>
                            <td>DATA:</td>
                            <td>{props.date}</td>
                        </tr>
                        <tr>
                            <td>ATIVO:</td>
                            <td>{props.asset}</td>
                        </tr>
                        <tr>
                            <td>QUANTIDADE:</td>
                            <td>{props.quantity}</td>
                        </tr>
                        <tr>
                            <td>VALOR:</td>
                            <td>{props.amount}</td>
                        </tr>
                        <tr>
                            <td>ID.SMART:</td>
                            <td>{props.hash}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={props.qrCode} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
