type HeaderSEOParamsType = {
  title: string;
  description: string;
  img?: string;
  twitterSite?: string;
  script?: Array<any>;
};

export const useSEOComposable = () => {
  const url = useRequestURL();

  const definedTermLDJson = (title: string, description: string) => {
    return [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          name: title,
          description,
          url: url.href,
          inDefinedTermSet: url.href,
          termCode: url.pathname,
        }),
      },
    ];
  };

  const searchActionLDJson = (title: string, description: string) => {
    return [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: url.href,
          name: title,
          description,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${url.href}?searchKeyword={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }),
      },
    ];
  };

  const headerSEO = ({ title, description, img, twitterSite, script }: HeaderSEOParamsType) => {
    return {
      title: `Araby | ${title}`,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:image', property: 'og:image', content: img },
        { hid: 'og:url', property: 'og:url', content: url.href },
        { hid: 'twitter:card', name: 'twitter:card', content: img },
        { hid: 'twitter:site', name: 'twitter:site', content: twitterSite },
      ],
      link: [{ rel: 'canonical', href: url.href }],
      script: script ? [...script] : [],
    };
  };
  return {
    headerSEO,
    searchActionLDJson,
    definedTermLDJson,
  };
};
