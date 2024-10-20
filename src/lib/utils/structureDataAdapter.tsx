import { TLocale } from '@/@types/locale';

export const structureDataAdapter = (structure: IStructure, ln: TLocale) => ({
  ...structure,
  fullName: structure[`${ln}_fullName`],
  content: structure[`${ln}_content`],
  rank: structure[`${ln}_rank`],
});
