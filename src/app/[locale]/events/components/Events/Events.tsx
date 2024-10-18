import { useTranslations } from 'next-intl';

import EventsCard from '@/app/[locale]/events/components/EventsCard/EventsCard';

import styles from './Events.module.scss';

interface IEventsProps {
  events: IEvents[];
}

const Events = ({ events }: IEventsProps) => {
  const t = useTranslations();
  return (
    <div className={styles.events}>
      <p className={styles.title}>{t('events')}</p>
      <div className={styles.grid}>
        {events.map((el) => (
          <EventsCard key={el.id} events={el} />
        ))}
      </div>
    </div>
  );
};

export default Events;
