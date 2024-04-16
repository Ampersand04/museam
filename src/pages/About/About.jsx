import styles from './About.module.scss';

import { Layout } from '../../components/layout/Layout';
import { Intro } from '../../components/layout/intro/Intro';

export const About = () => {
    return (
        <div className={styles.about_page}>
            <Layout>
                <Intro small title="О музее" />
                <div className={styles.about_video}>
                    <div className={styles.video}>
                        <iframe
                            // width="560"
                            // height="315"
                            src="https://www.youtube.com/embed/fUdyxGyi1yY?si=FNhVVqIU4qwRUoFr"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </Layout>
        </div>
    );
};
