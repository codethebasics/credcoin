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
                    HistoryContainer
                </Card>
            </div>
            <div className={styles.extractContainer}>
                <Card background={'#FFFFFF'} color={'#222222'} padding={'15px'}>
                    ExtractContainer
                </Card>
            </div>
        </div>
    );
}
