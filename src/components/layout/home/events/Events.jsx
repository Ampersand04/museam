import styles from './Events.module.scss';

export function Events() {
    return (
        <section className={styles.events}>
            <div className={styles.inner}>
                <div className={styles.title}>
                    <h2>Мероприятия</h2>
                </div>
                <div className={styles.list}>
                    <div className={styles.elem}>
                        <img src="/event01.jpg" alt="" />
                        <div className={styles.info}>
                            <h4>
                                Митинг-реквием, посвященный Дню памяти В.И. Хована (15 сентрября)
                            </h4>
                        </div>
                    </div>
                    <div className={styles.elem}>
                        <img src="/event02.jpg" alt="" />
                        <div className={styles.info}>
                            <h4>
                                Митинг-реквием, посвященный Дню рождения В.И. Хована (24 февраля)
                            </h4>
                        </div>
                    </div>
                    <div className={styles.elem}>
                        <img src="/event03.jpg" alt="" />
                        <div className={styles.info}>
                            <h4>Городской митинг, посвященный Дню вывода войск из Афганистана</h4>
                        </div>
                    </div>
                    <div className={styles.elem}>
                        <img src="/event04.jpg" alt="" />
                        <div className={styles.info}>
                            <h4>Уроки мужества</h4>
                        </div>
                    </div>
                    <div className={styles.elem}>
                        <img src="/event05.jpg" alt="" />
                        <div className={styles.info}>
                            <h4>Встречи с ветеранами</h4>
                        </div>
                    </div>
                    <div className={styles.elem}>
                        <img src="/event06.jpg" alt="" />
                        <div className={styles.info}>
                            <h4>Форум "Музеи Беларуси"</h4>
                        </div>
                    </div>
                    <div className={styles.elem}>
                        <img src="/event07.jpg" alt="" />
                        <div className={styles.info}>
                            <h4>Финал конкурса 100 идей для Беларуси</h4>
                        </div>
                    </div>
                    <div className={styles.elem}>
                        <img src="/event08.jpg" alt="" />
                        <div className={styles.info}>
                            <h4>Областная коллегия</h4>
                        </div>
                    </div>
                    <div className={styles.elem}>
                        <img src="/event05.jpg" alt="" />
                        <div className={styles.info}>
                            <h4>Беларусь интеллектуальная</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
