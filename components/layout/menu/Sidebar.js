import styles from '../../../styles/components/Sidebar.module.scss';

export default function Sidebar(props) {
    return (
        <div id={styles.sidebarContainer}>
            <div className={styles.sidebarBrand}>
                <div>SmartBusiness</div>
                <div>x</div>
            </div>
            <div className={styles.sidebarHeader}>
                <div className={styles.hello}>
                    Olá, <span>Cassio Marques</span>
                </div>
                <div className={styles.userData}>
                    <div>cassio.mns@gmail.com</div>
                    <div>Cliente</div>
                    <div>87</div>
                </div>
            </div>
            <div className={styles.sidebarLinks}>
                <ul>
                    <li>Home</li>
                    <li>Meus Dados</li>
                    <li>Documentos</li>
                    <li>Minhas Metas</li>
                    <li>Faturas</li>
                    <li>Financeiro</li>
                    <li>Saldo</li>
                    <li>Sair</li>
                </ul>
            </div>
            <div className={styles.sidebarFooter}>
                <div>SmartBusiness Dashboard</div>
                <div className={styles.copyright}>
                    2021 - 2022 All Rights Reserved
                </div>
                <div>38.185.479/0001-50</div>
            </div>
        </div>
    );
}
