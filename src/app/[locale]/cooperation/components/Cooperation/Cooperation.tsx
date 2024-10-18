import { useTranslations } from 'next-intl';

import CooperationCard from '@/app/[locale]/cooperation/components/CooperationCard/CooperationCard';

import styles from './Cooperation.module.scss';

interface ICooperationProps {
  cooperation: ICooperation[];
}

const Cooperation = ({ cooperation }: ICooperationProps) => {
  const t = useTranslations();
  return (
    <div className={styles.cooperation}>
      <p className={styles.title}>{t('cooperation')}</p>
      <div className={styles.grid}>
        {cooperation.map((el) => (
          <CooperationCard cooperation={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Cooperation;
