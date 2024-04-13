<template>
  <div class="flex flex-col items-center justify-center">
    <p class="text-secondary font-semibold uppercase">
      {{ $t('exam.mayItHelpYou') }}
    </p>
    <p class="text-primary font-semibold text-2xl capitalize mt-2 text-center">
      {{ curreStepDetails.title }}
    </p>
    <ExamSteps id="examSteps" :steps="examSteps" :currect-step-index="currectStepIndex" />

    <Transition name="fade" mode="out-in">
      <ExamIntialStep v-if="currectStepIndex == 0 && !examStartedStatus" />
      <component :is="curreStepDetails.component" v-else class="exam-form-card">
        <template #navigation>
          <ExamNavigation
            class="mt-10 mb-2"
            :currect-step-index="currectStepIndex"
            :exam-started-status="examStartedStatus"
            @next-step="nextStepHandler"
            @prev-step="prevStepHandler"
            @start-creation="startExamCreationHandler"
            @toggle-success-modal="toggleDialogHandler"
          />
        </template>
      </component>
    </Transition>

    <ExamNavigation
      v-if="currectStepIndex == 0 && !examStartedStatus"
      :currect-step-index="currectStepIndex"
      :exam-started-status="examStartedStatus"
      @next-step="nextStepHandler"
      @prev-step="prevStepHandler"
      @start-creation="startExamCreationHandler"
    />
    <ExamSuccessModal :visible-status="successModalStatus" @toggle-dialog="toggleDialogHandler" />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const FirstExamForm = defineAsyncComponent(
  () => import('~/components/createExam/_ExamForms/_FirstExamForm/_FirstExamForm.vue'),
);
const SecondExamForm = defineAsyncComponent(
  () => import('~/components/createExam/_ExamForms/_SecondExamForm/_SecondExamForm.vue'),
);
const ThirdExamForm = defineAsyncComponent(
  () => import('~/components/createExam/_ExamForms/_ThirdExamForm/_ThirdExamForm.vue'),
);
const FourthExamForm = defineAsyncComponent(
  () => import('~/components/createExam/_ExamForms/_FourthExamForm/_FourthExamForm.vue'),
);
const FifthExamForm = defineAsyncComponent(
  () => import('~/components/createExam/_ExamForms/_FifthExamForm/_FifthExamForm.vue'),
);

const currectStepIndex = ref<number>(0);

const examStartedStatus = ref(false);

const successModalStatus = ref(false);

const examSteps = [
  {
    title: t('exam.firstTypeNameAndDescription'),
    component: FirstExamForm,
  },
  {
    title: t('exam.numberOfQuestions'),
    component: SecondExamForm,
  },
  {
    title: t('exam.typeOfCriteria'),
    component: ThirdExamForm,
  },
  {
    title: t('exam.contentForExamCreation'),
    component: FourthExamForm,
  },
  {
    title: t('exam.finallyExamCreated'),
    component: FifthExamForm,
  },
];

const curreStepDetails = computed(() => examSteps[currectStepIndex.value]);

const nextStepHandler = () => {
  const lastStepIndex = 4;
  if (currectStepIndex.value < lastStepIndex) ++currectStepIndex.value;
  scrollToTheTopOfForm();
};

const prevStepHandler = () => {
  const firstStepIndex = 0;
  if (currectStepIndex.value > firstStepIndex) --currectStepIndex.value;
  scrollToTheTopOfForm();
};

const startExamCreationHandler = () => {
  examStartedStatus.value = true;
  scrollToTheTopOfForm();
};

const scrollToTheTopOfForm = () => {
  const element = document.getElementById('examSteps');
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const toggleDialogHandler = () => {
  successModalStatus.value = !successModalStatus.value;
};
</script>
<style lang="scss">
.exam-form-card {
  @apply bg-white/50 border border-primary/10 p-5 w-full rounded-xl;
}
</style>
