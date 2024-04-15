import styles from './Event.module.scss';
import { Event as EventIntro } from '../../components/layout/eventsPage/event/Event';

import { Layout } from '../../components/layout/Layout';
import { useParams } from 'react-router-dom';

export const Event = () => {
    const { id } = useParams();
    return (
        <div className={styles.event}>
            <Layout>
                <EventIntro id={id} />
            </Layout>
        </div>
    );
};
