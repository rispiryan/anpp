import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

import { eventsDataAdapter } from '@/lib/utils/eventsDataAdapter';

import { API_BASE_PATH } from '@/lib/consts';
import { TLocale } from '@/@types/locale';
import { formatDate } from '@/app/utils';

import styles from './EventsCard.module.scss';

interface IEventsCard {
  events: IEvents;
}

const EventsCard = ({ events }: IEventsCard) => {
  const t = useTranslations();
  const locale = useLocale() as TLocale;
  const data = eventsDataAdapter(events, locale);
  return (
    <div className={styles.eventsCard}>
      <>
        <img
          src={`${API_BASE_PATH}/${events.image}`}
          className={styles.img}
          alt={'img'}
        />
        <p className={styles.date}>{formatDate(data.createdAt, locale)}</p>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.description}>{data.description}</p>
      </>

      <Link className={styles.link} href={data.link}>
        {t('Participate')}
      </Link>
    </div>
  );
};

export default EventsCard;
