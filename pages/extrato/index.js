import Router from 'next/router';
import Card from '../../components/cards/Card';
import Transaction from '../../components/layout/Home/Transactions';
import styles from '../../styles/pages/Extrato.module.scss';
import { useEffect, useContext } from 'react';
import { BalanceCard } from '../../components/cards';
import { AuthContext } from '../../contexts/AuthContext';

export default function Extrato(props) {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            Router.push('/login');
        }
        props.setPaths(['Home', 'Extrato']);
    }, []);

    return (
        <div className={styles.extrato}>
            <div className={styles.banner}>
                <span>Extrato</span>
            </div>
            <div className={styles.balanceContainer}>
                <BalanceCard
                    background={'#D6A84C'}
                    color={'#FFFFFF'}
                    padding={'15px'}
                    img={'/img/white-wallet.svg'}
                    label={'Saldo em CRD'}
                    balance={'0000'}
                    symbol={'CRD'}
                />
                <BalanceCard
                    background={'#FFFFFF'}
                    color={'#222222'}
                    padding={'15px'}
                    img={'/img/gold-coin.svg'}
                    label={'Saldo em STACKS'}
                    balance={'0000'}
                    symbol={'STK'}
                />
                <BalanceCard
                    background={'#FFFFFF'}
                    color={'#222222'}
                    padding={'15px'}
                    img={'/img/gold-dolar.svg'}
                    label={'Saldo em REAIS'}
                    balance={'R$ 0000'}
                />
            </div>
            <div className={styles.historyContainer}>
                <Card background={'#FFFFFF'} color={'#222222'} padding={'15px'}>
                    <div className={styles.history}>
                        <div className={styles.header}>
                            <div>
                                <span className={styles.label}>
                                    Histórico de transações
                                </span>
                                <span>{' > '}</span>
                                <span>
                                    <Card
                                        background="#D6A84C"
                                        color="#FFFFFF"
                                        padding="5px 15px"
                                    >
                                        Extrato
                                    </Card>
                                </span>
                            </div>
                            <div>
                                <div>
                                    <span>
                                        Não está visualizando sua transação?
                                    </span>
                                    <span>Clique aqui</span>
                                </div>
                                <div>
                                    <span>Extrato Histórico de Transações</span>
                                    <span>
                                        <img src="/img/export-gold.svg" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.calendar}>
                                <div className={styles.filter}>
                                    <div>
                                        <span>Tipo</span>
                                        <span>
                                            <img src="/img/caret-down-black.svg" />
                                        </span>
                                    </div>
                                    <div>
                                        <span>Data</span>
                                        <span>
                                            <img src="/img/caret-down-black.svg" />
                                        </span>
                                    </div>
                                    <div>
                                        <span>Ativo</span>
                                        <span>
                                            <img src="/img/caret-down-black.svg" />
                                        </span>
                                    </div>
                                    <div>
                                        <span>Status</span>
                                        <span>
                                            <img src="/img/caret-down-black.svg" />
                                        </span>
                                    </div>
                                    <div>
                                        <img src="/img/time-calendar-gold.svg" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.table}>
                                <Transaction />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className={styles.extractContainer}>
                <Card background={'#FFFFFF'} color={'#222222'} padding={'15px'}>
                    <div className={styles.extract}>
                        <div className={styles.header}>
                            <div>
                                <span className={styles.label}>
                                    Histórico de transações
                                </span>
                                <span>{' > '}</span>
                                <span>
                                    <Card
                                        background="#D6A84C"
                                        color="#FFFFFF"
                                        padding="5px 15px"
                                    >
                                        Extrato
                                    </Card>
                                </span>
                            </div>
                            <div>
                                <div>
                                    <span>
                                        Não está visualizando sua transação?
                                    </span>
                                    <span>Clique aqui</span>
                                </div>
                                <div>
                                    <span>Exportar extrato</span>
                                    <span>
                                        <img src="/img/export-gold.svg" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div>
                                <span className={styles.label}>
                                    Detalhes da operação
                                </span>
                            </div>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>STATUS:</td>
                                            <td>CONCLUÍDA</td>
                                        </tr>
                                        <tr>
                                            <td>HORA:</td>
                                            <td>16H32</td>
                                        </tr>
                                        <tr>
                                            <td>DATA:</td>
                                            <td>20/06/2022</td>
                                        </tr>
                                        <tr>
                                            <td>ATIVO:</td>
                                            <td>STACK-STK</td>
                                        </tr>
                                        <tr>
                                            <td>QUANTIDADE:</td>
                                            <td>400</td>
                                        </tr>
                                        <tr>
                                            <td>ID.SMART:</td>
                                            <td>013213</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
