// import Button from '../../ui/button/Button';
import { Link as LocalLink } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MENU } from './Header.data';
import styles from './Header.module.scss';
import Button from '../../ui/button/Button';
import { useState } from 'react';

export function Header() {
    const [openDropMenu, setOpenDropMenu] = useState(false);
    const eventPage = useLocation();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    function openDrop() {
        setOpenDropMenu(!openDropMenu);
    }
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link to="/" className={styles.logo}>
                    <img src="/logo.svg" alt="" width={45} height={45} />
                    <h1>
                        МУЗЕЙ ВОЙНЫ <br />В АФГАНИСТАНЕ
                    </h1>
                </Link>

                {openDropMenu ? (
                    <nav className={styles.drop}>
                        {MENU.map((item) =>
                            item.url === 'excursion' ? (
                                <LocalLink
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    to={item.url}
                                    key={item.url}
                                    className={styles.active}>
                                    {item.placeholder}
                                </LocalLink>
                            ) : (
                                <Link to={'/' + item.url} key={item.url} className={styles.active}>
                                    {item.placeholder}
                                </Link>
                            ),
                        )}

                        <Link to="/feedback">
                            <Button>Обратная связь</Button>
                        </Link>
                    </nav>
                ) : (
                    <nav className={styles.menu}>
                        {MENU.map((item) =>
                            item.url === 'excursion' ? (
                                <LocalLink
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    to={item.url}
                                    key={item.url}
                                    className={styles.active}>
                                    {item.placeholder}
                                </LocalLink>
                            ) : (
                                <Link to={'/' + item.url} key={item.url} className={styles.active}>
                                    {item.placeholder}
                                </Link>
                            ),
                        )}
                    </nav>
                )}

                <Link to="/feedback" className={styles.feedback}>
                    <Button>Обратная связь</Button>
                </Link>
                {eventPage.pathname.startsWith('/event/') ? (
                    <img className={styles.arrow_back} src="./arrow_back.svg" onClick={goBack} />
                ) : (
                    <img className={styles.burger} src="./burger.svg" onClick={openDrop} />
                )}
            </div>
        </header>
    );
}
