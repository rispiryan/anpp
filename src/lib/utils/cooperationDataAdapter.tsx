import { TLocale } from '@/@types/locale';

export const cooperationDataAdapter = (events: ICooperation, ln: TLocale) => ({
  ...events,
  title: events[`${ln}_title`],
});
