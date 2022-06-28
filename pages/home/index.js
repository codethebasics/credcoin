import styles from '../../styles/pages/Home.module.scss';
import { BalanceCard } from '../../components/layout/cards';
import Card from '../../components/layout/cards/Card';
import { useState } from 'react';

export default function Home(props) {
    const [previewInput, setPreviewInput] = useState(0);
    const [previewValue, setPreviewValue] = useState(0);

    const listarTransacoes = async () => {
        alert('Ver todas as transações');
    };

    const comprarStacks = async () => {
        alert('Comprar STACKS');
    };

    const baixarWhitepaper = async () => {
        alert('Baixar Whitepaper');
    };

    const resgatarTokens = async () => {
        alert('Resgatar Tokens');
    };

    const viewTransaction = async () => {
        alert('View transaction');
    };

    const onPreviewInputChange = (event) => {
        const value = event.target.value;
        if (!isNaN(value)) {
            setPreviewInput(value);
            setPreviewValue(value * 10);
        }
    };

    return (
        <div className={styles.home}>
            <div className={styles.banner}>
                <span>Escritório Virtual</span>
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
            <div className={styles.formContainer}>
                <Card background={'#FFFFFF'} color={'#D6A84C'} padding={'15px'}>
                    <div className={styles.leftContainer}>
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
                                        <th>ATIVO</th>
                                        <th>TIPO</th>
                                        <th>QUANTIDADE</th>
                                        <th>DATA</th>
                                        <th>STATUS</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>STK</td>
                                        <td>DIVIDENDOS</td>
                                        <td>50</td>
                                        <td>22/06/2022</td>
                                        <td>
                                            <span
                                                className={styles.warningLabel}
                                            >
                                                EM ANÁLISE
                                            </span>
                                        </td>
                                        <td>
                                            <img
                                                className={
                                                    styles.transactionInfo
                                                }
                                                onClick={viewTransaction}
                                                height={20}
                                                src="/img/search-gray.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>STK</td>
                                        <td>SAQUE</td>
                                        <td>50</td>
                                        <td>22/06/2022</td>
                                        <td>
                                            <span
                                                className={styles.dangerLabel}
                                            >
                                                CANCELADO
                                            </span>
                                        </td>
                                        <td>
                                            <img
                                                className={
                                                    styles.transactionInfo
                                                }
                                                onClick={viewTransaction}
                                                height={20}
                                                src="/img/search-gray.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>STK</td>
                                        <td>COMPRA</td>
                                        <td>50</td>
                                        <td>22/06/2022</td>
                                        <td>
                                            <span
                                                className={styles.successLabel}
                                            >
                                                CONCLUÍDA
                                            </span>
                                        </td>
                                        <td>
                                            <img
                                                className={
                                                    styles.transactionInfo
                                                }
                                                onClick={viewTransaction}
                                                height={20}
                                                src="/img/search-gray.svg"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.cta}>
                            <button onClick={listarTransacoes}>
                                VER TODAS AS TRANSAÇÕES
                            </button>
                        </div>
                    </div>
                </Card>
                <div className={styles.right}>
                    <Card
                        background={'#FFFFFF'}
                        color={'#D6A84C'}
                        padding={'15px'}
                    >
                        <div className={styles.buyStacks}>
                            <div className={styles.header}>
                                <div className={styles.img}>
                                    <img src="/img/gold-cart.svg" />
                                </div>
                                <div className={styles.headerLabel}>
                                    Comprar Stacks
                                </div>
                            </div>
                            <div className={styles.label}>
                                <span>
                                    Adicione a quantidade em reais que deseja
                                    comprar.
                                </span>
                            </div>
                            <div className={styles.quantityContainer}>
                                <div className={styles.inputQuantity}>
                                    <span>R$</span>
                                    <input
                                        type="text"
                                        value={previewInput}
                                        onChange={onPreviewInputChange}
                                    />
                                </div>
                                <div className={styles.outputQuantity}>
                                    {' '}
                                    = {previewValue} STK
                                </div>
                            </div>
                            <div className={styles.info}>
                                <span>
                                    Valor calculado com base no preço inicial
                                    das stacks.
                                </span>
                            </div>
                            <div className={styles.cta}>
                                <button onClick={comprarStacks}>
                                    Comprar Stacks
                                </button>
                            </div>
                        </div>
                    </Card>
                    <Card
                        background={'#FFFFFF'}
                        color={'#D6A84C'}
                        padding={'15px'}
                    >
                        <div className={styles.infoStacks}>
                            <div className={styles.label}>
                                <span>Entenda como o token CRD funciona</span>
                            </div>
                            <div className={styles.cta}>
                                <button onClick={baixarWhitepaper}>
                                    Baixar whitepaper CRD
                                </button>
                            </div>
                        </div>
                    </Card>
                    <Card
                        background={'#FFFFFF'}
                        color={'#D6A84C'}
                        padding={'15px'}
                    >
                        <div className={styles.sacarStacks}>
                            <div className={styles.label}>
                                <span>Resgatar CRD Tokens</span>
                            </div>
                            <div className={styles.cta}>
                                <button onClick={resgatarTokens}>
                                    Sacar Tokens
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
