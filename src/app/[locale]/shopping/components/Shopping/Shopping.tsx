import { useTranslations } from 'next-intl';

import EventsCard from '@/app/[locale]/events/components/EventsCard/EventsCard';

import styles from './Shopping.module.scss';

interface IShoppingProps {
  shopping: IShopping[];
}

const Shopping = ({ shopping }: IShoppingProps) => {
  const t = useTranslations();
  return (
    <div className={styles.shopping}>
      <p className={styles.title}>{t('shopping')}</p>
      <div className={styles.grid}>
        {shopping.map((el) => (
          <EventsCard key={el.id} events={el} />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
