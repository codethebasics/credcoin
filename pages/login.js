import styles from '/styles/pages/Login.module.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

/**
 * =====
 * Login
 * =====
 * @author codethebasics by DuckTech
 */
export default function Component() {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    useEffect(() => {}, []);

    const handleSignIn = async (data) => {
        const username = data.username.toString().toLowerCase().trim();
        const password = data.password.toString().trim();
        await signIn({
            username: username,
            password: password,
        });
    };

    return (
        <form
            className={styles.loginContainer}
            onSubmit={handleSubmit(handleSignIn)}
        >
            <div className={styles.formControl}>
                <label htmlFor="inputUsername">Email</label>
                <input
                    type="email"
                    id="inputUsername"
                    {...register('username')}
                />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputPassword">Password</label>
                <input type="password" {...register('password')} />
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
        </form>
    );
}
