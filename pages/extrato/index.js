import { BalanceCard } from '../../components/cards';
import Card from '../../components/cards/Card';
import styles from '../../styles/pages/Extrato.module.scss';

export default function Extrato(props) {
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
                                <span>Histórico de transações</span>
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
                                <div>
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
                            <div className={styles.table}>Table</div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className={styles.extractContainer}>
                <Card background={'#FFFFFF'} color={'#222222'} padding={'15px'}>
                    <div className={styles.extract}>
                        <div className={styles.header}>
                            <div>Histórico de transações - extrato</div>
                            <div>
                                <div>
                                    <span>
                                        Não está visualizando sua transação?
                                    </span>
                                    <span>Clique aqui</span>
                                </div>
                                <div>
                                    <span>Extrato Histórico de Transações</span>
                                    <span>x</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div>
                                <span>Detalhes da operação</span>
                            </div>
                            <div>table</div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
