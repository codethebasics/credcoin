import styles from '../../../styles/components/BalanceCard.module.scss';

export default function BalanceCard(props) {
    return (
        <div className={styles.balanceCard}>
            <div className={styles.label}>
                <span>Saldo</span>
            </div>
            <div className={styles.data}>
                <div className={styles.dataClosed}>
                    <span></span>
                </div>
                <div className={styles.toggleClosed}>
                    <img src="/img/closed-eye.svg" />
                </div>
            </div>
        </div>
    );
}
