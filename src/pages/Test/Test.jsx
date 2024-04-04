import styles from './Test.module.scss';
import { Layout } from '../../components/layout/Layout';
import { Intro } from '../../components/layout/intro/Intro';

export const Test = () => {
    return (
        <Layout>
            <Intro small title="Тесты" />

            <div className={styles.list}>
                <a href="/test.docx" className={styles.elem}>
                    <p>Скачать файл</p>
                </a>
                <a href="/test-otvety.docx" className={styles.elem}>
                    <p>Скачать все ответы</p>
                </a>
            </div>
        </Layout>
    );
};
