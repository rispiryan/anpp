export const educationDataAdapter = (education: IEducation, ln: string) => {
  switch (ln) {
    case 'en': {
      return {
        ...education,
        description: education.en_description,
        content1: education.en_content1,
        content2: education.en_content2,
        content3: education.en_content3,
        title: education.en_title,
      };
    }
    case 'ru': {
      return {
        ...education,
        description: education.ru_description,
        content1: education.ru_content1,
        content2: education.ru_content2,
        content3: education.ru_content3,
        title: education.ru_title,
      };
    }
    default: {
      return {
        ...education,
        description: education.ar_description,
        content1: education.ar_content1,
        content2: education.ar_content2,
        content3: education.ar_content3,
        title: education.ar_title,
      };
    }
  }
};
