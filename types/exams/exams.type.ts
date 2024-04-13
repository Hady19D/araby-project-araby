import type { ExamsCreateExamInfoCardTypeEnum } from './exams.enum';

export type ExamsCreateExamInfoCardObjectType = {
  title: string;
  value: string | Array<string>;
  type?: ExamsCreateExamInfoCardTypeEnum;
  icon: string;
};
