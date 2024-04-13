import type { UseFetchOptions } from '#app';

type useFetchType = typeof useFetch;

export const useDataFetcher: useFetchType = <DataT>(
  path: string | Request | Ref<string | Request> | Function,
  options: UseFetchOptions<DataT> = {},
) => {
  const config = useRuntimeConfig();

  const { $i18n } = useNuxtApp();

  const fetchUrl = typeof path === 'object' ? path : `${config.public.apiBaseUrl}/${$i18n.locale.value}${path}`;

  return useFetch(fetchUrl, { watch: false, immediate: false, ...options });
};
