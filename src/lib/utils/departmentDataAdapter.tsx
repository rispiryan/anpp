import { TLocale } from '@/@types/locale';

export const departmentDataAdapter = (news: IDepartment, ln: TLocale) => ({
  ...news,
  description: news[`${ln}_description`],
  content1: news[`${ln}_content1`],
  content2: news[`${ln}_content2`],
  content3: news[`${ln}_content3`],
  title: news[`${ln}_title`],
});
