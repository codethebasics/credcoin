import styles from '/styles/pages/Login.module.scss';

export default function login() {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.formControl}>
                <label for="inputUsername">Username</label>
                <input id="inputUsername" />
            </div>
            <div className={styles.formControl}>
                <label for="inputPassword">Password</label>
                <input type="password" />
            </div>
            <div className={styles.formControl}>
                <button className={styles.cta}>Entrar</button>
                <div className={styles.subform}>
                    <div>
                        <a>Cadastre-se</a>
                    </div>
                    <div>
                        <a>Esqueceu a senha?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
