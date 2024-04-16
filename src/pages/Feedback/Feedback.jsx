import { Layout } from '../../components/layout/Layout';
import Button from '../../components/ui/button/Button';
import styles from './Feedback.module.scss';

export const Feedback = () => {
    return (
        <div className={styles.feedback}>
            <Layout>
                {/* <Intro small title="Оставить отзыв" /> */}
                <div className={styles.elem}>
                    <div className={styles.path}>
                        <div className={styles.content}>
                            <h2>Оставьте отзыв</h2>
                            <p>Поделитесь впечатлениями об экскурсии в музее</p>
                        </div>
                    </div>
                    <div className={styles.path}>
                        <form action="">
                            <input type="text" placeholder="Имя" />
                            <input type="email" placeholder="Email" />
                            <textarea placeholder="Поделитесь" />
                            <Button type="submit">Отправить</Button>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    );
};
