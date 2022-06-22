import styles from '../../../styles/components/Sidebar.module.scss';

export default function Sidebar(props) {
    return (
        <div id={styles.sidebar}>
            <div>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <img src="/img/logo-gold.svg" />
                    </div>
                    <div className={styles.menu}>
                        <img src="/img/hamburger-gold.svg" />
                    </div>
                </div>
                <div className={styles.userData}>
                    <div>
                        <div>
                            <span>Olá,</span>
                            <span>Maycon Marcos</span>
                        </div>
                        <div className={styles.info}>
                            maykonmarcos@gmail.com Cliente, ID# 00087
                        </div>
                    </div>
                </div>
                <div className={styles.link}>
                    <ul>
                        <li>
                            <img src="/img/home-gold.svg" height={20} />
                            <span>Home</span>
                        </li>
                        <li>
                            <img src="/img/wallet-gold.svg" height={20} />
                            <span>Saldo</span>
                        </li>
                        <li>
                            <img src="/img/signout-gold.svg" height={20} />
                            <span>Sair</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
