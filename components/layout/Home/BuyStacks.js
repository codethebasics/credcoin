import { useState } from 'react';
import styles from '/styles/layout/home/BuyStacks.module.scss';
import Card from '../../cards/Card';

export default function BuyStacks(props) {
    const [previewInput, setPreviewInput] = useState(0);
    const [previewValue, setPreviewValue] = useState(0);

    const onPreviewInputChange = (event) => {
        const value = event.target.value;
        if (!isNaN(value)) {
            setPreviewInput(value);
            setPreviewValue(Math.round(value * 10) / 100);
        }
    };

    const comprarStacks = async () => {
        alert('Comprar STACKS: ' + previewValue);
    };

    return (
        <Card background={'#FFFFFF'} color={'#D6A84C'} padding={'15px'}>
            <div className={styles.buyStacks}>
                <div className={styles.header}>
                    <div className={styles.img}>
                        <img src="/img/gold-cart.svg" />
                    </div>
                    <div className={styles.headerLabel}>Comprar Stacks</div>
                </div>
                <div className={styles.label}>
                    <span>
                        Adicione a quantidade em reais que deseja comprar.
                    </span>
                </div>
                <div className={styles.quantityContainer}>
                    <div className={styles.inputQuantity}>
                        <span>R$</span>
                        <input
                            type="number"
                            step=".1"
                            min="0"
                            value={previewInput}
                            onChange={onPreviewInputChange}
                        />
                    </div>
                    <div className={styles.outputQuantity}>
                        {' '}
                        = {previewValue} STK
                    </div>
                </div>
                <div className={styles.info}>
                    <span>
                        Valor calculado com base no preço inicial das stacks.
                    </span>
                </div>
                <div className={styles.cta}>
                    <button onClick={comprarStacks}>Comprar Stacks</button>
                </div>
            </div>
        </Card>
    );
}
