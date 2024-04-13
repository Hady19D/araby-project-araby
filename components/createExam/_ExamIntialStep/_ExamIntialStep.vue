<template>
  <div class="text-center mt-8 flex flex-col items-center">
    <p class="text-primary font-medium text-lg">
      {{ $t('exam.firstTypeNameAndDescription') }}
    </p>
    <p class="text-neutral-400 w-4/5 m-auto">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s
    </p>
    <img class="mt-8" src="@/assets/images/dummyImage.webp" alt="dummyImage" />
    <div class="flex items-center justify-between w-full mt-10">
      <BaseButton class="flex items-start gap-2 shadow-none font-semibold text-secondary">
        <span> {{ $t('common.next') }} </span>
        <IconArrowRight class="text-primary text-xl rtl:rotate-180" />
      </BaseButton>
      <BaseButton class="flex items-start gap-1 shadow-none text-neutral-400 font-semibold uppercase">
        <span>
          {{ $t('exam.skipAndStart') }}
        </span>
        <IconSkillArrowRight class="text-primary text-xl rtl:rotate-180" filled />
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconArrowRight from '@/assets/icons/arrow-right.svg';
import IconSkillArrowRight from '@/assets/icons/skillArrowRight.svg';
</script>
