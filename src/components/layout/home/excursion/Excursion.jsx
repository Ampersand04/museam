// import { excursionData } from './Excursion.data';
import styles from "./Excursion.module.scss";

import Modal from "../../../ui/modal/Modal";
// import Button from '../../../ui/button/Button';
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "../../../ui/button/Button";

export function Excursion() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDataIndex, setSelectedDataIndex] = useState(null); // Состояние для хранения индекса выбранного элемента

    const openModal = (index) => {
        setSelectedDataIndex(index); // Устанавливаем индекс выбранного элемента
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const excursionData = [
        {
            title: "Сын не вернулся из боя",
            image: "/about.png",
            description:
                'Данная экскурсия посвящена выпускнику ГУО "Средняя школа №13 г. Бреста имени В. И. Хована", погибшему при исполнении интернационального долга. Экскурсоводы знакомят с биографией Валерия Ивановича от школьной скамьи до Афганистана.',
        },
        {
            title: "Оружие и техника в Афганской войне",
            image: "/about.png",
            description:
                "В экскурсии рассказывается об обмундировании советских солдат во время Афганской войны. Также можно узнать о самом распространенном оружии и технке, которую использовали на протяжении более 9-ти лет войны",
        },
        {
            title: "Боль Афгана в стихах и песнях",
            image: "/exposition-khovan.jpg",
            description:
                "В данной экскурсии звучат стихотворения и песни об Афганистане в исполнении учащихся школы. Можно услышать попурри, состоящее из 8 песен, рассказывающее об афганских буднях советских солдат.",
        },
    ];

    return (
        <section className={styles.excursion} id="excursion">
            <div className={styles.inner}>
                <div className={styles.title}>
                    <h2>Экскурсии</h2>
                </div>
                <div className={styles.list}>
                    {excursionData.map((item, index) => (
                        <div className={styles.elem} key={index}>
                            <img src={item.image} alt="" />
                            <div className={styles.info}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <div onClick={() => openModal(index)}>
                                    {/* Передаем индекс элемента в функцию openModal */}
                                    <Button>Читать больше</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className={styles.elem}>
                        <img src="/about.png" alt="" />
                        <div className={styles.info}>
                            <h2>Сын не вернулся из боя</h2>
                            <p>
                                Данная экскурсия посвящена выпускнику СШ №13 г. Бреста имени Хована
                                В. И., погибшему при исполнении интернационального долга.
                                Экскурсоводы знакомят с биографией Валерия Ивановича от школьной
                                скамьи до Афганистана.
                            </p>
                        </div>
                    </div>
                    <div className={styles.elem}>
                        <img src="/about.png" alt="" />
                        <div className={styles.info}>
                            <h2>Оружие и техника в Афганской войне</h2>
                            <p>
                                В экскурсии рассказывается об обмундировании советских солдат во
                                время Афганской войны. Также можно узнать о самом распространенном
                                оружии и технке, которую использовали на протяжении более 9-ти лет
                                войны
                            </p>
                        </div>
                    </div>
                    <div className={styles.elem}>
                        <img src="/about.png" alt="" />
                        <div className={styles.info}>
                            <h2>Боль Афгана в стихах и песнях</h2>
                            <p>
                                В данной экскурсии звучат стихотворения и песни об Афганистане в
                                исполнении учащихся школы и заведующей библиотекой Леванович А.В. В
                                частности, можно услышать попурри, состоящее из 8 песен,
                                рассказывающее об афганских буднях советских солдат.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
            <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
                {isOpen && selectedDataIndex !== null && (
                    <Modal title={excursionData[selectedDataIndex].title} close={closeModal}>
                        <p>{excursionData[selectedDataIndex].description}</p>
                    </Modal>
                )}
            </AnimatePresence>
        </section>
    );
}
