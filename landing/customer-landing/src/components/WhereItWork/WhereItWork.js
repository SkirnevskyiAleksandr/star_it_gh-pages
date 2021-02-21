import React from 'react';
import styles from './WhereItWork.module.css';
import WhereItWorkItem from './WhereItWorkItem';

const content = [
    {
        title: 'Обслуживание на кассе оказалось выше всяких похвал, Вам очень понравилось',
        logo:
    },
    {
        title: 'Вы долго ждете продавца-консультанта, а его все нет и нет',
        logo:
    },
    {
        title: 'Банкомат грязный, подступ неудобный, кнопки залипают',
        logo:
    },
    {
        title: 'Вы хотите порекомендовать другим покупателям или предостеречь их от покупки товара',
        logo:
    },
    {
        title: 'Вы хотите узнать, стоит ли брать тот или иной товар',
        logo:
    }
]

const WhereItWork = () => {

    const itemsCard = content.map((content,i) => <WhereItWorkItem
                items={content}
                key={i} />
            ); 
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>
                Где это работает
            </h2>
            <div className={styles.card}>

                {itemsCard}

            </div>
 
        </section>
    );
}

export default WhereItWork;