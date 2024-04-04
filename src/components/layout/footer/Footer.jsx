import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__logo}>
                    <img src="/logo.svg" alt="" width={45} height={45} />

                    <div className={styles.footer__logo_title}>
                        Музей войны <br /> в Афганистане
                    </div>
                </div>
                <div className={styles.footer__inner}>
                    <div className={styles.footer__item}>
                        <div className={styles.item__inner}>
                            <Link to="/" className={styles.footer__link}>
                                Главная
                            </Link>
                            <Link to="/about" className={styles.footer__link}>
                                О музее
                            </Link>
                            <Link to="/exposition" className={styles.footer__link}>
                                Экспозиция
                            </Link>
                            <Link to="/excursion" className={styles.footer__link}>
                                Экскурсии
                            </Link>
                            <Link to="/events" className={styles.footer__link}>
                                Мероприятия
                            </Link>
                            <Link to="/test" className={styles.footer__link}>
                                Тест
                            </Link>
                            <Link to="/feedback" className={styles.footer__link}>
                                Обратная связь
                            </Link>
                        </div>
                    </div>
                    <div className={styles.footer__item}>
                        <div className={styles.footer__text}>
                            Контакты:
                            <br />
                            Тел.
                            <Link to="tel: 80162500185" className={styles.aa}>
                                (8-0162) 50-01-85
                            </Link>
                            <br />
                            Тел.
                            <Link to="tel: +375 (44) 514 50 74" className={styles.aa}>
                                +375 44 514 50 74
                            </Link>
                            <br />
                            email:
                            <Link
                                className={styles.aa}
                                target="_blank"
                                to="mailto: school13brest@rcit.by">
                                school13brest@rcit.by
                            </Link>
                        </div>
                        <div className={styles.footer__time}>
                            Время работы: пн - пт с 9:00 до 12:00
                        </div>

                        <div className={styles.mas__icons}>
                            <Link
                                to="https://www.instagram.com/p/CVlg9zeN5k0/?utm_medium=share_sheet"
                                target="_blank"></Link>
                            <Link to="" target="_blank"></Link>
                        </div>
                        <div className={styles.footer__text}>
                            Музей войны в Афганистане на базе ГУО Средняя школа № 13 г.Бреста им.
                            Валерия Ивановича Хована <br />
                            email:
                            <Link className={styles.aa} target="_blank" to="school13brest@rcit.by">
                                school13brest@rcit.by
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
