import type { ConjugationsLinguisticGroupTypeEnum } from '../conjugations/conjugations.enum';
import type {
  BasicSeachRootTripleMujarradTypesEnum,
  BasicSearchRootKindEnum,
  BasicSearhRootGroupTypeEnum,
} from './basic-search.enum';

export type KeywordSearchItemType = {
  _id: string;
  value: string;
  value_without_formation: string;
  type: ConjugationsLinguisticGroupTypeEnum;
  url: string;
};

export type KeywordSearhSectionType = {
  group: ConjugationsLinguisticGroupTypeEnum;
  results: Array<KeywordSearchItemType>;
  hasMore: boolean;
  moreUrl: string;
};

export type RootSearchItemType = {
  cardTitle: string;
  arabicValue: string;
  englishValue: string;
};

export type RootSearchSectionType = {
  sectionTitle: string;
  items: Array<RootSearchItemType>;
};

export type RootSearchVerbValueType = {
  arabic_display: string;
  conjugation: BasicSeachRootTripleMujarradTypesEnum;
  formula_no?: number;
};

export type RootSearchDataType = {
  _id: {
    rootKind: BasicSearchRootKindEnum;
    formulaNoGroup: BasicSearhRootGroupTypeEnum;
  };
  verbs: Array<RootSearchVerbValueType>;
};
