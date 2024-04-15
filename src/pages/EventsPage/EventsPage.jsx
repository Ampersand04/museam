import styles from './EventsPage.module.scss';

import { Layout } from '../../components/layout/Layout';
import { Intro } from '../../components/layout/intro/Intro';
import { useState } from 'react';
import { Events } from '../../components/layout/home/events/Events';

export const EventsPage = () => {
    const [eventID, setEventID] = useState('');

    const handleEventClick = (index) => {
        setEventID(index); // Set eventID state with the index
    };
    return (
        <div className={styles.eventsPage}>
            <Layout>
                <Intro small title="Мероприятия" />
                <Events onEventClick={handleEventClick} />
            </Layout>
        </div>
    );
};
