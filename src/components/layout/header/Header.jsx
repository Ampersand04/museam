// import Button from '../../ui/button/Button';
import { Link as LocalLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { MENU } from './Header.data';
import styles from './Header.module.scss';
import Button from '../../ui/button/Button';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link to="/" className={styles.logo}>
                    <img src="/logo.svg" alt="" width={45} height={45} />
                    <h1>
                        МУЗЕЙ ВОЙНЫ <br />В АФГАНИСТАНЕ
                    </h1>
                </Link>
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
                            <Link to={item.url} key={item.url} className={styles.active}>
                                {item.placeholder}
                            </Link>
                        ),
                    )}
                </nav>
                <Link to="/feedback">
                    <Button>Обратная связь</Button>
                </Link>
            </div>
        </header>
    );
}
