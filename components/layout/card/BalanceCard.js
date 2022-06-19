import styles from '../../../styles/components/BalanceCard.module.scss';

export default function BalanceCard(props) {
    return (
        <div className={styles.balanceCardContainer}>
            <div className={styles.brand}>
                <img
                    src={props.imgPath}
                    alt={props.alt}
                    height={props.height || 50}
                />
            </div>
            <div className={styles.body}>
                <div className={styles.title}>{props.title}</div>
                <div>
                    <span className={styles.balance}>{props.balance}</span>
                    <span className={styles.symbol}>{props.symbol}</span>
                    <span className={styles.info}>i</span>
                </div>
            </div>
        </div>
    );
}
