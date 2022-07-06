import { BalanceCard } from '../../components/cards';
import styles from '../../styles/pages/Home.module.scss';
import Transactions from '../../components/layout/Home/Transactions';
import BuyStacks from '../../components/layout/Home/BuyStacks';
import WhitepaperCRD from '../../components/layout/Home/WhitepaperCRD';
import WithdrawCRD from '../../components/layout/Home/WithdrawCRD';
import { useEffect, useState } from 'react';

export default function Home(props) {
    useEffect(() => {
        props.setPaths(['Home']);
    }, []);
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
                <div className={styles.leftContainer}>
                    <Transactions />
                </div>
                <div className={styles.right}>
                    <BuyStacks />
                    <WhitepaperCRD />
                    <WithdrawCRD />
                </div>
            </div>
        </div>
    );
}
