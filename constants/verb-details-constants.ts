import {
  ConjugationsActivePassiveFixedTypeEnum,
  ConjugationsCinguisticEntitiesEnum,
  ConjugationsGerundsFixedTypeEnum,
  ConjugationsNounsFixedTypeEnum,
} from '~/types/conjugations/conjugations.enum';

export const activeAndPassiveFixedList = [
  {
    mainLabelText: 'conjugations.absentPronouns',
    items: [
      { label: 'conjugations.hePronoun', value: '-' },
      { label: 'conjugations.shePronoun', value: '-' },
      { label: 'conjugations.theyTwoMasculine', value: '-' },
      { label: 'conjugations.theyTwoFeminine', value: '-' },
      { label: 'conjugations.theyPronoun', value: '-' },
      { label: 'conjugations.theyFemininePronoun', value: '-' },
    ],
  },
  {
    mainLabelText: 'conjugations.addressingPronouns',
    items: [
      { label: 'conjugations.youMasculine', value: '-' },
      { label: 'conjugations.youFeminine', value: '-' },
      { label: 'conjugations.youDual', value: '-' },
      { label: 'conjugations.youPlural', value: '-' },
      { label: 'conjugations.youFemininePlural', value: '-' },
    ],
  },
  {
    mainLabelText: 'conjugations.speakerPronouns',
    items: [
      { label: 'conjugations.iPronouns', value: '-' },
      { label: 'conjugations.wePronouns', value: '-' },
    ],
  },
];

export const gerundsAndNounsFixedList = [
  {
    mainLabelText: 'conjugations.nominativeCase',
    linguisticEntitiesList: [
      {
        label: 'conjugations.singular',
        key: ConjugationsCinguisticEntitiesEnum.individual,
        masculineIndex: 0,
        feminineIndex: 1,
      },
      {
        label: 'conjugations.dual',
        key: ConjugationsCinguisticEntitiesEnum.synonym,
        masculineIndex: 2,
        feminineIndex: 3,
      },
      {
        label: 'conjugations.plural',
        key: ConjugationsCinguisticEntitiesEnum.plural,
        masculineIndex: 4,
        feminineIndex: 5,
      },
    ],
  },
  {
    mainLabelText: 'conjugations.accusativeCase',
    linguisticEntitiesList: [
      {
        label: 'conjugations.singular',
        key: ConjugationsCinguisticEntitiesEnum.individual,
        masculineIndex: 6,
        feminineIndex: 7,
      },
      {
        label: 'conjugations.dual',
        key: ConjugationsCinguisticEntitiesEnum.synonym,
        masculineIndex: 8,
        feminineIndex: 9,
      },
      {
        label: 'conjugations.plural',
        key: ConjugationsCinguisticEntitiesEnum.plural,
        masculineIndex: 10,
        feminineIndex: 11,
      },
    ],
  },
  {
    mainLabelText: 'conjugations.genitiveCase',
    linguisticEntitiesList: [
      {
        label: 'conjugations.singular',
        key: ConjugationsCinguisticEntitiesEnum.individual,
        masculineIndex: 12,
        feminineIndex: 13,
      },
      {
        label: 'conjugations.dual',
        key: ConjugationsCinguisticEntitiesEnum.synonym,
        masculineIndex: 14,
        feminineIndex: 15,
      },
      {
        label: 'conjugations.plural',
        key: ConjugationsCinguisticEntitiesEnum.plural,
        masculineIndex: 16,
        feminineIndex: 17,
      },
    ],
  },
];

export const linguisticEntitiesList = [
  {
    label: 'conjugations.singular',
    key: ConjugationsCinguisticEntitiesEnum.individual,
  },
  {
    label: 'conjugations.dual',
    key: ConjugationsCinguisticEntitiesEnum.synonym,
  },
  {
    label: 'conjugations.plural',
    key: ConjugationsCinguisticEntitiesEnum.plural,
  },
];

export const activeAndPassiveFixedTypes = [
  {
    label: 'conjugations.pastPassive',
    key: ConjugationsActivePassiveFixedTypeEnum.past,
  },
  {
    label: 'conjugations.presentNominativePassive',
    key: ConjugationsActivePassiveFixedTypeEnum.nominativePresent,
  },
  {
    label: 'conjugations.presentAccusativePassive',
    key: ConjugationsActivePassiveFixedTypeEnum.accusativePresent,
  },
  {
    label: 'conjugations.presentSubjunctivePassive',
    key: ConjugationsActivePassiveFixedTypeEnum.jussivePresent,
  },
  {
    label: 'conjugations.presentAssertivePassive',
    key: ConjugationsActivePassiveFixedTypeEnum.emphasizedPresent,
  },
  {
    label: 'conjugations.imperative',
    key: ConjugationsActivePassiveFixedTypeEnum.imperative,
  },
  {
    label: 'conjugations.emphasizedImperative',
    key: ConjugationsActivePassiveFixedTypeEnum.emphasizedImperative,
  },
];

export const gerundsFixedTypes = [
  {
    label: 'conjugations.originalSource',
    key: ConjugationsGerundsFixedTypeEnum.standards,
  },
  {
    label: 'conjugations.mimicSource',
    key: ConjugationsGerundsFixedTypeEnum.meems,
  },
  {
    label: 'conjugations.timeSource',
    key: ConjugationsGerundsFixedTypeEnum.nomens,
  },
  {
    label: 'conjugations.entitySource',
    key: ConjugationsGerundsFixedTypeEnum.sourceofOrganization,
  },
];

export const nounsFixedTypes = [
  {
    label: 'conjugations.activeParticiple',
    key: ConjugationsNounsFixedTypeEnum.doerName,
  },
  {
    label: 'conjugations.passiveParticiple',
    key: ConjugationsNounsFixedTypeEnum.doneActionName,
  },
  {
    label: 'conjugations.temporalAndSpatialNouns',
    key: ConjugationsNounsFixedTypeEnum.timeAndPlaceName,
  },
  {
    label: 'conjugations.exaggerationOfActiveParticiple',
    key: ConjugationsNounsFixedTypeEnum.exaggerationOfDoerName,
  },
  {
    label: 'conjugations.instrumentNoun',
    key: ConjugationsNounsFixedTypeEnum.instrumentName,
  },
];
