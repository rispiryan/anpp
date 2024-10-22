import { routes } from '@/constants/routes';
interface MenuItem {
  title: string;
  to: string;
  isFirstItem?: boolean;
  isLastLevel?: boolean;
  id?: string;
  menu?: Menu;
}

interface NestedMenuItem {
  title: string;
  menu: Menu;
  to?: string;
}

export type Menu = (NestedMenuItem | MenuItem)[];

export const menu: Menu = [
  { to: routes.production, title: 'production' },
  { to: routes.safety, title: 'safety' },
  { to: routes.history, title: 'history' },
  {
    menu: [
      { to: routes.news, title: 'news' },
      { to: routes.cooperation, title: 'cooperation' },
      { to: routes.vacancies, title: 'vacancies' },
      { to: routes.events, title: 'events' },
      { to: routes.shopping, title: 'shopping' },
      { to: routes.education, title: 'education' },
      { to: routes.report, title: 'report' },
      { to: routes.structure, title: 'structure' },
      {
        menu: [
          { to: routes.reactorFactory, title: 'Reactor Factory' },
          { to: routes.turbineFactory, title: 'Turbine Factory' },
          { to: routes.electricalWorkshop, title: 'Electrical Workshop' },
          { to: routes.zachFactory, title: 'ZACH Factory' },
        ],
        title: 'Main products',
      },
    ],
    title: 'About the station',
  },
  { to: routes.contacts, title: 'contacts' },
];
