import type { BasicSearchRootKindEnum } from '../basic-search/basic-search.enum';

export type DataResponseType<TTData> = {
  data: TTData;
};

export type DataPaginationResponseType<TTData> = {
  data: TTData;
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: Array<{ url?: string; label?: string; active?: boolean }>;
    path: string;
    per_page: number;
    to: number;
    total: number;
    root_kind?: BasicSearchRootKindEnum;
  };
};
