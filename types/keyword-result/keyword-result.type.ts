import type { ConjugationsLinguisticGroupTypeEnum } from '../conjugations/conjugations.enum';

export type KeywordResultItemType = {
  _id: string;
  value: string;
  value_without_formation: string;
  type: ConjugationsLinguisticGroupTypeEnum;
  url: string;
};
