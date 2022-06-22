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
            </div>
        </div>
    );
}
