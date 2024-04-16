import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function Modal({ title, children, close }) {
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
                    <div className={styles.head}>
                        <h2>{title}</h2>
                        <button className={styles.close} onClick={close}>
                            Х
                        </button>
                    </div>
                    {children}
                </motion.div>
            </div>
        </motion.div>
    );
}

Modal.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    close: PropTypes.node.isRequired,
};
