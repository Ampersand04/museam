import Button from '../../ui/button/Button';
import PropTypes from 'prop-types';
import styles from './Intro.module.scss';
import { Link as LocalLink } from 'react-scroll';

export const Intro = ({ small, title, button }) => {
    return (
        <section className={small ? styles.intro_small : styles.intro}>
            <div className={styles.inner}>
                <h1>{title}</h1>
                {button && (
                    <LocalLink to="about" spy={true} smooth={true} offset={0} duration={500}>
                        <Button>Узнать больше</Button>
                    </LocalLink>
                )}
            </div>
        </section>
    );
};

Intro.propTypes = {
    small: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    button: PropTypes.node.isRequired,
};
