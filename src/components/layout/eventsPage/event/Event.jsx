// import { eventsData } from '../../../layout/home/events/Events.data';

import PropTypes from 'prop-types';
import styles from './Event.module.scss';

export function Event({ id }) {
    const eventsData = [
        {
            title: 'Митинг-реквием, посвященный Дню памяти В.И. Хована (15 сентрября)',
            image: '/event01.jpg',
        },
        {
            title: 'Митинг-реквием, посвященный Дню рождения В.И. Хована (24 февраля)',
            image: '/event02.jpg',
        },
        {
            title: 'Городской митинг, посвященный Дню вывода войск из Афганистана',
            image: '/event03.jpg',
        },
        {
            title: 'Уроки мужества',
            image: '/event04.jpg',
        },
        {
            title: 'Встречи с ветеранами',
            image: '/event05.jpg',
        },
        {
            title: 'Форум "Музеи Беларуси"',
            image: '/event06.jpg',
        },
        {
            title: 'Финал конкурса 100 идей для Беларуси',
            image: '/event07.jpg',
        },
        {
            title: 'Областная коллегия',
            image: '/event08.jpg',
        },
        {
            title: 'Беларусь',
            image: '/event05.jpg',
        },
    ];

    return (
        <section className={styles.event}>
            <img src={eventsData[id].image} alt="" />
            <h1>{eventsData[id].title}</h1>
            <p>{eventsData[id].description}</p>
        </section>
    );
}

Event.propTypes = {
    id: PropTypes.node.isRequired,
};
