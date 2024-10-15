export const dataAdapter = (news: INews, ln: string) => {
  switch (ln) {
    case 'en': {
      return {
        ...news,
        description: news.en_description,
        content1: news.en_content1,
        content2: news.en_content2,
        content3: news.en_content3,
        title: news.en_title,
      };
    }
    case 'ru': {
      return {
        ...news,
        description: news.ru_description,
        content1: news.ru_content1,
        content2: news.ru_content2,
        content3: news.ru_content3,
        title: news.ru_title,
      };
    }
    default: {
      return {
        ...news,
        description: news.ar_description,
        content1: news.ar_content1,
        content2: news.ar_content2,
        content3: news.ar_content3,
        title: news.ar_title,
      };
    }
  }
};
