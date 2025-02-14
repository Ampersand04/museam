import styles from "./Home.module.scss";

import { Layout } from "../../components/layout/Layout";
import Button from "../../components/ui/button/Button";
import { Link } from "react-router-dom";
import { Excursion } from "../../components/layout/home/excursion/Excursion";
import { Events } from "../../components/layout/home/events/Events";
import { Intro } from "../../components/layout/intro/Intro";

export const Home = () => {
    return (
        <div className={styles.home}>
            <Layout>
                <Intro small={false} title={"Музей войны в Афганистане"} button />
                <section className={styles.about} id="about">
                    <div className={styles.inner}>
                        <div className={styles.text}>
                            <h2>
                                Добро пожаловать <br />в наш Музей войны <br />в Афганистане
                            </h2>
                            <p>
                                Музей войны в Афганистане средней школы № 13 г. Бреста принял своих
                                первых посетителей в декабре 2006 года. Создание музея было
                                инициировано Брестской городской организацией ОО “Белорусский союз
                                ветеранов войны в Афганистане”. Основой для создания экспозиции
                                послужили материалы, собранные учителем математики Харкович Надеждой
                                Владиславовной о выпускнике школы Ховане Валерии Ивановиче,
                                героически погибшем в Афганистане в 1987 году...
                            </p>

                            <Link to="about">
                                <Button>Читать больше</Button>
                            </Link>
                        </div>
                        <img src="/about-image.png" alt="" className={styles.image} />
                    </div>
                </section>
                <Excursion />
                <Events />
            </Layout>
        </div>
    );
};
