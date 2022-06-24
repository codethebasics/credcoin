import styles from '../../styles/pages/Home.module.scss';
import { BalanceCard } from '../../components/layout/cards';

export default function Home(props) {
    return (
        <div className={styles.home}>
            <div className={styles.banner}>Escritório Virtual</div>
            <div className={styles.balanceContainer}>
                <BalanceCard background={'#D6A84C'} color={'#FFFFFF'}>
                    <div className={styles.cardBalance}>
                        <div className={styles.icon}>
                            <img height="50" src="/img/white-wallet.svg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.header}>
                                <span>Saldo de CRD</span>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.value}>
                                    <span>0000</span>
                                </div>
                                <div className={styles.symbol}>
                                    <span>CRD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </BalanceCard>
                <BalanceCard background={'#FFFFFF'} color={'#222222'}>
                    <div className={styles.cardBalance}>
                        <div className={styles.icon}>
                            <img height="50" src="/img/gold-coin.svg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.header}>
                                <span>Saldo de STACKS</span>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.value}>
                                    <span>0000</span>
                                </div>
                                <div className={styles.symbol}>
                                    <span>STK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </BalanceCard>
                <BalanceCard background={'#FFFFFF'} color={'#222222'}>
                    <div className={styles.cardBalance}>
                        <div className={styles.icon}>
                            <img height="50" src="/img/gold-dolar.svg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.header}>
                                <span>Saldo de REAIS</span>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.symbol}>
                                    <span>R$</span>
                                </div>
                                <div className={styles.value}>
                                    <span>0000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </BalanceCard>
            </div>
        </div>
    );
}
