import { TLocale } from '@/@types/locale';

export const shoppingDataAdapter = (events: IEvents, ln: TLocale) => ({
  ...events,
  description: events[`${ln}_description`],
  title: events[`${ln}_title`],
});
