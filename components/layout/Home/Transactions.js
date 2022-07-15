import { useEffect, useState } from 'react';
import styles from '/styles/layout/home/Transactions.module.scss';
import Card from '../../cards/Card';
import Router from 'next/router';
import {
    getTransaction,
    postTransaction,
    putgetTransaction,
    deleteTransaction,
} from '../../../services/transaction.service';

export default function Transaction(props) {
    useEffect(() => {
        getTransaction(1)
            .then((response) => setTransactions(response.transactionList))
            .catch((error) => console.log(error));
    }, []);

    const [transactions, setTransactions] = useState([
        // {
        //     id: 1,
        //     ativo: 'STK',
        //     tipo: 'DIVIDENDOS',
        //     quantidade: 50,
        //     data: '22/06/2022',
        //     status: 'EM ANÁLISE',
        //     class: 'warningLabel',
        // },
        // {
        //     id: 2,
        //     ativo: 'STK',
        //     tipo: 'SAQUE',
        //     quantidade: 50,
        //     data: '22/06/2022',
        //     status: 'CANCELADO',
        //     class: 'dangerLabel',
        // },
        // {
        //     id: 3,
        //     ativo: 'STK',
        //     tipo: 'COMPRA',
        //     quantidade: 50,
        //     data: '22/06/2022',
        //     status: 'CONCLUÍDA',
        //     class: 'successLabel',
        // },
    ]);

    const listTransactions = async () => {
        Router.push('/extrato');
    };

    const viewTransaction = async () => {
        alert('View transaction');
    };

    const transactionClass = () => {
        return 'warningLabel';
    };

    return (
        <Card background={'#FFFFFF'} color={'#D6A84C'} padding={'15px'}>
            <div className={styles.transactionContainer}>
                <div className={styles.header}>
                    <div className={styles.img}>
                        <img src="/img/gold-paper.svg"></img>
                    </div>
                    <div className={styles.label}>
                        <span>Últimos lançamentos</span>
                    </div>
                </div>
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>DATA/HORA</th>
                                <th>TIPO</th>
                                <th>ATIVO</th>
                                <th>QUANTIDADE</th>
                                <th>ID CRD</th>
                                <th>STATUS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions?.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.transaction_date}</td>
                                    <td>{transaction.type_transaction_id}</td>
                                    <td>{transaction.qtd_active}</td>
                                    <td>{transaction.amount}</td>
                                    <td>#{transaction.id}</td>
                                    <td>
                                        <span
                                            className={
                                                styles[transaction.class]
                                            }
                                        >
                                            {
                                                transaction.status_transaction_type_id
                                            }
                                        </span>
                                    </td>
                                    <td>
                                        <img
                                            className={styles.transactionInfo}
                                            onClick={viewTransaction}
                                            height={20}
                                            src="/img/search-gray.svg"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={styles.cta}>
                    <button onClick={listTransactions}>
                        VER TODAS AS TRANSAÇÕES
                    </button>
                </div>
            </div>
        </Card>
    );
}
