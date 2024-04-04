import styles from './Excursion.module.scss';

export function Excursion() {
    return (
        <section className={styles.excursion} id="excursion">
            <div className={styles.inner}>
                <div className={styles.title}>
                    <h2>Экскурсии</h2>
                </div>
                <div className={styles.list}>
                    <div className={styles.elem}>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
