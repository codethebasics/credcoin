import Link from 'next/link';
import styles from '../../../styles/components/SidebarShort.module.scss';

export default function SidebarShort(props) {
    return (
        <div id={styles.sidebar}>
            <div>
                <div className={styles.brand}>
                    <div className={styles.menu}>
                        <img height={40} src="/img/short-icon.png" />
                    </div>
                </div>
                <div className={styles.link}>
                    <ul>
                        <li>
                            <Link href="/home">
                                <img src="/img/home-gold.svg" height={20} />
                            </Link>
                        </li>
                        <li>
                            <Link href="/extrato">
                                <img src="/img/wallet-gold.svg" height={20} />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <img src="/img/signout-gold.svg" height={20} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
