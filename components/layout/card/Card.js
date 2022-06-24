import styles from '../../../styles/components/Card.module.scss';

export default function Card(props) {
    return <div className={styles.card}>{props.children}</div>;
}
