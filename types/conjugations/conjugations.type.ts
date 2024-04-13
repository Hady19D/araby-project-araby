import {
  ConjugationGerundAndNounValuesEnum,
  ConjugationGerundsSecondLevelTypeEnum,
  ConjugationsActivePassiveFixedTypeEnum,
  ConjugationsGerundsFixedTypeEnum,
} from './conjugations.enum';

export type VerbTypeDetail = {
  pronounce?: number;
  conditionNo?: number;
  value: string;
  value_without_formation: string;
};

export type ConjugationGerundAndNounTypesValue = {
  [ConjugationGerundAndNounValuesEnum.annexedNouns]?: Array<VerbTypeDetail>;
  [ConjugationGerundAndNounValuesEnum.definiteNouns]?: Array<VerbTypeDetail>;
  [ConjugationGerundAndNounValuesEnum.indefiniteNouns]?: Array<VerbTypeDetail>;
};

export type VerbGerundAndNounValueType = {
  default?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.B1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.B2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.B7]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.C1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.C3]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.D2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.E1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.E2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.E3]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.E4]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.F1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.F2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.F3]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.F4]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.H1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.H2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.H3]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.H4]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.H5]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.H6]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.H7]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.H8]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.J2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.J3]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.J5]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.K1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.K2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.K3]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.K4]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.K6]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.K7]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.N2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.O1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.P1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.P3]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.P4]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.Q2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.R2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.S1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.S2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.S5]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.T2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.U1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.U2]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.U3]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.U5]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.U7]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.W1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.W3]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.X1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.X3]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.Y1]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.afal]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.ufulula]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.ifiil]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.faool]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.faulula]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.faiel]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.failula]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.faul]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.fail]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.faiil]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.faal]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.faalula]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.fal]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.falan_falana]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.falan_fala]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.falula]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.fualula]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.fualla]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.fuulla]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.fial]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.fiiil]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.filula]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.mufall]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.mufalal]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.mafal]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.mafalula]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.maful]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.mafil]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.mufail]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.mufailula]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.muful]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.mifaal]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.mifal]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.mifalula]?: ConjugationGerundAndNounTypesValue;
  [ConjugationGerundsSecondLevelTypeEnum.mifiil]?: ConjugationGerundAndNounTypesValue;
};

export type ConjugationVerbActiveAndPassiveTypes = {
  [ConjugationsActivePassiveFixedTypeEnum.past]?: Array<VerbTypeDetail>;
  [ConjugationsActivePassiveFixedTypeEnum.nominativePresent]?: Array<VerbTypeDetail>;
  [ConjugationsActivePassiveFixedTypeEnum.accusativePresent]?: Array<VerbTypeDetail>;
  [ConjugationsActivePassiveFixedTypeEnum.jussivePresent]?: Array<VerbTypeDetail>;
  [ConjugationsActivePassiveFixedTypeEnum.emphasizedPresent]?: Array<VerbTypeDetail>;
  [ConjugationsActivePassiveFixedTypeEnum.imperative]?: Array<VerbTypeDetail>;
  [ConjugationsActivePassiveFixedTypeEnum.emphasizedImperative]?: Array<VerbTypeDetail>;

  [ConjugationsGerundsFixedTypeEnum.meems]?: VerbGerundAndNounValueType;
  [ConjugationsGerundsFixedTypeEnum.nomens]?: VerbGerundAndNounValueType;
  [ConjugationsGerundsFixedTypeEnum.standards]?: VerbGerundAndNounValueType;
  [ConjugationsGerundsFixedTypeEnum.sourceofOrganization]?: VerbGerundAndNounValueType;
};

const ConjugationsFixedTypeEnums = { ...ConjugationsActivePassiveFixedTypeEnum, ...ConjugationsGerundsFixedTypeEnum };

export type VerbDetailsActiveTabType = keyof typeof ConjugationsFixedTypeEnums;

export type VerbDetailsResponseType = {
  arabic_display: string;
  conjugation: string;
  root: string;
  rootKind: string;
  root_characters: string;
  types: ConjugationVerbActiveAndPassiveTypes;
};
