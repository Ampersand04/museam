import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function Modal({ children, close }) {
    const dropIn = {
        hidden: {
            y: '-100px',
            opacity: 0,
        },
        visible: { y: '0', opacity: 1 },
        exit: { y: '100px', opacity: 0 },
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modal}>
            <div className={styles.dark} onClick={close}>
                <motion.div
                    className={styles.modal_block}
                    onClick={(e) => e.stopPropagation()}
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
                    <button className={styles.close} onClick={close}>
                        Х
                    </button>
                    {children}
                </motion.div>
            </div>
        </motion.div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    close: PropTypes.node.isRequired,
};
