import styles from '../../styles/pages/Dashboard.module.scss';
import BalanceCard from '../../components/layout/card/BalanceCard';

export default function Dashboard(props) {
    return (
        <div id={styles.dashboardContainer}>
            <div className={styles.header}>
                <h1>Escritório Virtual</h1>
            </div>
            <div className={styles.balance}>
                <div>
                    <BalanceCard
                        imgPath={'/img/blue-dolar.svg'}
                        title={'Saldo em CRD'}
                        balance={'0000'}
                        symbol={'CRD'}
                    />
                </div>
                <div>
                    <BalanceCard
                        imgPath={'/img/blue-coin.svg'}
                        title={'Saldo de STACKS'}
                        balance={'0000'}
                        symbol={'STK'}
                    />
                </div>
                <div>
                    <BalanceCard
                        imgPath={'/img/blue-dolar.svg'}
                        title={'Saldo em R$'}
                        balance={'0,00'}
                        symbol={'R$'}
                    />
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.card}>Últimos lançamentos</div>
                </div>
                <div className={styles.right}>
                    <section>
                        <div className={styles.card}>Card 1</div>
                    </section>
                    <section>
                        <div className={styles.card}>Card 2</div>
                    </section>
                    <section>
                        <div className={styles.card}>Card 3</div>
                    </section>
                </div>
            </div>
        </div>
    );
}
