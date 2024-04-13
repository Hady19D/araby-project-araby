import type { VerbTypeDetail } from '~/types/conjugations/conjugations.type';

export const commonSetValuesFromFixedList = (fixedItemsList: any, verbList: Array<VerbTypeDetail>) => {
  let indexIteration = 0;
  return fixedItemsList.map((fixedListItem: { items: Array<Record<string, string>> }) => {
    fixedListItem.items.map((fixedListItemValue: any) => {
      const actualValue = verbList?.find((valueItem: VerbTypeDetail) => valueItem.pronounce === indexIteration);
      if (actualValue) fixedListItemValue.value = actualValue?.value;
      indexIteration++;
      return fixedListItemValue;
    });
    return fixedListItem;
  });
};
