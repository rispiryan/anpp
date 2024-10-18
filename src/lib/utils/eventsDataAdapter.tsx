import { TLocale } from '@/@types/locale';

export const eventsDataAdapter = (events: IEvents, ln: TLocale) => ({
  ...events,
  description: events[`${ln}_description`],
  title: events[`${ln}_title`],
});
