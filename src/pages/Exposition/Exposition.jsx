import styles from './Exposition.module.scss';
import { data } from './Exposition.data';

import { Layout } from '../../components/layout/Layout';
import { Intro } from '../../components/layout/intro/Intro';
import Button from '../../components/ui/button/Button';
import { useState } from 'react';
import Modal from '../../components/ui/modal/Modal';

import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Exposition = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDataIndex, setSelectedDataIndex] = useState(null); // Состояние для хранения индекса выбранного элемента

    const openModal = (index) => {
        setSelectedDataIndex(index); // Устанавливаем индекс выбранного элемента
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.expositon}>
            <Layout>
                <Intro small title="Экспозиция" />

                <div className={styles.list}>
                    {data.map((item, index) => (
                        <div className={styles.elem} key={index}>
                            <h2>{item.title}</h2>
                            <img src={item.image} alt="" />
                            <div className={styles.info}>
                                <p>{item.description}</p>
                            </div>
                            <div onClick={() => openModal(index)}>
                                {/* Передаем индекс элемента в функцию openModal */}
                                <Button>Читать больше</Button>
                            </div>
                        </div>
                    ))}
                </div>

                <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
                    {isOpen && selectedDataIndex !== null && (
                        <Modal title={data[selectedDataIndex].title} close={closeModal}>
                            <p>{data[selectedDataIndex].description}</p>

                            {data[selectedDataIndex].qr && (
                                <Link target="_blank" to={data[selectedDataIndex].qr_url}>
                                    <img src={data[selectedDataIndex].qr} alt="" />
                                </Link>
                            )}
                        </Modal>
                    )}
                </AnimatePresence>
            </Layout>
        </div>
    );
};
