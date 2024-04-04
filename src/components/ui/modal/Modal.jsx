import styles from './Modal.module.scss';
import PropTypes from 'prop-types';

export default function Modal({ children, close }) {
    return (
        <div className={styles.modal}>
            <div className={styles.dark}>
                <div className={styles.modal_block}>
                    <button className={styles.close} onClick={close}>
                        Х
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    close: PropTypes.node.isRequired,
};
