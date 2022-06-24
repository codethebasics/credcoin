import Card from '../../components/layout/card/Card';
import styles from '../../styles/pages/Home.module.scss';

export default function Home(props) {
    return (
        <div className={styles.home}>
            <div className={styles.banner}>Escritório Virtual</div>
            <div className={styles.balanceContainer}>
                <div className={styles.balanceCard}>
                    <Card>fsdfs</Card>
                </div>
                <div className={styles.balanceCard}>
                    <Card>fsdfs</Card>
                </div>
                <div className={styles.balanceCard}>
                    <Card>fsdfs</Card>
                </div>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.formCard}>
                    <Card styles={{ background: 'lime' }}>
                        <div className={styles.header}>
                            <div>x</div>
                            <div>Comprar tokens stk</div>
                        </div>
                        <div className={styles.cardContainer}>
                            <div className={styles.quantity}>
                                <Card>Quantidade</Card>
                            </div>
                            <div className={styles.payment}>
                                <Card>Pagamento</Card>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
