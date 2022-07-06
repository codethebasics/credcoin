import styles from '../../../styles/components/Header.module.scss';

export default function Header(props) {
    return (
        <div id={styles.header}>
            <div className={styles.mobileHeaderLogo}>
                <div>
                    <img height={35} src="/img/short-icon.png" />
                </div>
            </div>
            <div className={styles.breadcrumbContainer}>
                <span>Home</span>
            </div>
            <div className={styles.navlinks}>
                <div className={styles.inputContainer}>
                    <input id={styles.searchbar} />
                    <img height={25} src="/img/search-gray.svg" />
                </div>
                <div className={styles.profile}>
                    <img height={30} src="/img/user-blue.svg" />
                </div>
            </div>
        </div>
    );
}
