import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { eventsData } from './Events.data';
import Button from '../../../ui/button/Button';
import styles from './Events.module.scss';

export function Events({ onEventClick }) {
    const location = useLocation();

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
        <section className={styles.events}>
            <div className={styles.inner}>
                <div className={styles.title}>
                    {location.pathname !== '/events' && <h2>Мероприятия</h2>}
                </div>
                <div className={location.pathname === '/events' ? styles.blocklist : styles.list}>
                    {eventsData.map((item, index) => (
                        <Link
                            to={`/event/${index}`}
                            key={index}
                            onClick={() => {
                                onEventClick();
                            }}>
                            <div className={styles.elem}>
                                <img src={item.image} alt="" />
                                <div className={styles.info}>
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <div className={styles.dark}></div>
                </div>
                {location.pathname === '/events' ? (
                    <></>
                ) : (
                    <Link to="/events">
                        <Button>Узнать больше</Button>
                    </Link>
                )}
            </div>
        </section>
    );
}

Events.propTypes = {
    onEventClick: PropTypes.node.isRequired,
};
