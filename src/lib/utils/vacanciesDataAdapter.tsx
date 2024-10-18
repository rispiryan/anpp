import { TLocale } from '@/@types/locale';

export const vacanciesDataAdapter = (vacancies: IVacancies, ln: TLocale) => ({
  ...vacancies,
  description: vacancies[`${ln}_description`],
  title: vacancies[`${ln}_title`],
});
