import styles from '../../styles/pages/Stacks.module.scss';
import { BalanceCard } from '../../components/cards';
import Card from '/components/cards/Card';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { BuyContext } from '../../contexts/BuyContext';

export default function Stacks(props) {
    const { user } = useContext(AuthContext);
    const [buyExtraValue, setBuyExtraValue] = useState(0);
    const { buyValue, setBuyValue } = useContext(BuyContext);

    useEffect(() => {
        props.setPaths(['Home', 'Stacks']);
        setBuyExtraValue(parseFloat(buyValue) + buyValue * 0.3);
    }, []);

    const comprarStacks = () => {
        alert('comprar stacks');
        // FRONTEND
        // chamar API de gerar transação passando o valor do PIX a ser feito com o ID da transação
        // API <== response QRCode base64 (presente no JSON)
        // Apresentar na tela o resumo da transação
        // Apresentar o QRCode para ser scaneado
        // Input com chave para copiar
        // BACKEND
        // Cadastrar pagamento na tabela
        // PIX => Gerencianet
        // Weebhook => CRD.. espera que eu te aviso quando cair... me passa o endpoint pra te notificar...
    };

    return (
        <div className={styles.stacksContainer}>
            <div className={styles.header}>Escritório Virtual</div>
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
                <Card background={'#04042D'} color={'#FFFFFF'} padding={'15px'}>
                    <div className={styles.header}>
                        <div className={styles.logo}>
                            <img height={35} src="/img/white-cart.svg" />
                        </div>
                        <div className={styles.label}>Comprar token STK</div>
                    </div>
                    <div className={styles.steps}>
                        <div className={styles.step1Container}>
                            <Card
                                background={'#FFFFFF'}
                                color={'#D6A84C'}
                                padding={'15px'}
                            >
                                <div className={styles.header}>
                                    <Card
                                        background={'#D6A84C'}
                                        color={'#FFFFFF'}
                                        padding={'15px'}
                                    >
                                        <span>PASSO 1</span>
                                    </Card>
                                    <div>
                                        <span>QUANTIDADE</span>
                                    </div>
                                </div>
                                <div className={styles.description}>
                                    <p>
                                        Digite o valor que desja contribuir e
                                        calcule a quantidade de stacks que você
                                        receberá.
                                    </p>
                                    <p>
                                        A calculadora irá ajuda-lo a converter a
                                        moeda em Stacks.
                                    </p>
                                </div>
                                <div className={styles.form}>
                                    <div className={styles.left}>
                                        <div>
                                            <span>Valor de Compra:</span>
                                            <div className={styles.inputValue}>
                                                <span>R$</span>
                                                <input
                                                    disabled
                                                    type="number"
                                                    min="0"
                                                    step=".1"
                                                    value={buyValue}
                                                    onChange={(e) =>
                                                        setBuyValue(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles.header}>
                                            <span>Quantidade Stacks:</span>
                                        </div>
                                        <div className={styles.bonusContainer}>
                                            <div className={styles.bonusLabel}>
                                                <Card
                                                    background={'#D6A84C'}
                                                    color={'#FFFFFF'}
                                                    padding={'5px 15px'}
                                                >
                                                    <span>+30% Bônus</span>
                                                </Card>
                                            </div>
                                            <div
                                                className={styles.discountLabel}
                                            >
                                                <div>
                                                    <span>
                                                        {Math.trunc(
                                                            Math.round(
                                                                buyValue
                                                            ) / 0.0006738
                                                        )}
                                                    </span>
                                                    <span>STK</span>
                                                </div>
                                                <div>
                                                    <span>
                                                        {Math.trunc(
                                                            Math.round(
                                                                buyExtraValue
                                                            ) / 0.0006738
                                                        )}
                                                    </span>
                                                    <span>STK</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <div>
                                        <img
                                            height="15"
                                            src="/img/gold-info.svg"
                                        />
                                        <span>
                                            Valor calculado com base no preço
                                            inicial das stacks.
                                        </span>
                                    </div>
                                    <div>
                                        <img
                                            height="15"
                                            src="/img/gold-info.svg"
                                        />
                                        <span>
                                            Valor mínimo de compra R$ 100,00
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className={styles.step2Container}>
                            <Card
                                background={'#FFFFFF'}
                                color={'#D6A84C'}
                                padding={'15px'}
                            >
                                <div className={styles.header}>
                                    <Card
                                        background={'#D6A84C'}
                                        color={'#FFFFFF'}
                                        padding={'15px'}
                                    >
                                        <span>PASSO 2</span>
                                    </Card>
                                    <div>
                                        <span>PAGAMENTO</span>
                                    </div>
                                </div>
                                <div className={styles.description}>
                                    <p>
                                        Para receber suas Stacks faça o
                                        pagamento. Você pode fazer um pagamento
                                        diretamente para o nosso endereço de
                                        pagamento ou pagar online. Após o
                                        pagamento, você receberá um e-mail de
                                        confirmação.
                                    </p>
                                </div>
                                <div className={styles.cta}>
                                    <button onClick={comprarStacks}>
                                        Efetuar Pagamento
                                    </button>
                                </div>
                                <div className={styles.info}>
                                    <div>
                                        <img
                                            height="15"
                                            src="/img/gold-info.svg"
                                        />
                                        <span>
                                            As Stacks apareceção em sua conta
                                            depois que seu pagamento for
                                            efetuado e revisado por nossa
                                            equipe.
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
