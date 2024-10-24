'use client';
import { useEffect, useRef } from 'react';

import Link from 'next/link';
import cn from 'classnames';

import { routes } from '@/constants/routes';

import styles from './HomeSections.module.css';

const links = [
  { href: routes.safety, title: 'safety' },
  { href: routes.vacancies, title: 'vacancies' },
  { href: routes.production, title: 'production' },
  { href: routes.electricalWorkshop, title: 'electricalWorkshop' },
  { href: routes.structure, title: 'structure' },
  { href: routes.cooperation, title: 'cooperation' },
  { href: routes.report, title: 'report' },
  { href: routes.events, title: 'events' },
  { href: routes.history, title: 'history' },
  { href: routes.zachFactory, title: 'zachFactory' },
  { href: routes.reactorFactory, title: 'reactorFactory' },
  { href: routes.turbineFactory, title: 'turbineFactory' },
];

const HomeSections = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.documentElement.clientWidth > 769) {
      document.body.addEventListener('scroll', () => {
        if (sectionsRef.current) {
          const docScrollTop = document.body.scrollTop;
          const docScrollHeight =
            document.body.scrollHeight - document.body.clientHeight;
          // Get the custom div scroll information
          const customDivScrollHeight =
            sectionsRef.current.scrollHeight - sectionsRef.current.clientHeight;

          // Calculate the scroll ratio
          const scrollRatio = docScrollTop / docScrollHeight;

          // Apply the same scroll ratio to the custom div
          sectionsRef.current.scrollTop = scrollRatio * customDivScrollHeight;
        }
      });
    }
  }, []);

  return (
    <div className={styles.imagesWrap} ref={sectionsRef}>
      {links.map((el) => (
        <Link href={el.href} key={el.title}>
          <div className={cn(styles.image, { [styles[el.title]]: el.title })} />
        </Link>
      ))}
    </div>
  );
};

export default HomeSections;
