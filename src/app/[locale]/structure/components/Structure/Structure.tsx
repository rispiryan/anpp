import { useTranslations } from 'next-intl';

import StructureCard from '@/app/[locale]/structure/components/StructureCard';

import styles from './Structure.module.scss';
interface IStructureProps {
  structure: IStructure[];
}

const Structure = ({ structure }: IStructureProps) => {
  const t = useTranslations();
  return (
    <div>
      <p className={styles.title}>{t('structure')}</p>
      <div className={styles.grid}>
        {structure.map((el) => (
          <StructureCard structure={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Structure;
