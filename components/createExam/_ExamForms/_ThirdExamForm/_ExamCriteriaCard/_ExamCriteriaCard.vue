<template>
  <div
    class="border border-stone-400/25 p-2 rounded-xl mb-3 flex flex-col items-start md:flex-row md:items-center gap-3 cursor-pointer shadow-sm relative transition-all ease-in-out"
    :class="{ ['bg-primary']: props.active }"
  >
    <img
      class="w-full md:w-36 h-36 object-cover rounded-xl"
      src="https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162_1280.jpg"
      alt="course-image"
    />
    <div class="flex flex-col items-start">
      <p class="text-secondary text-xs font-semibold uppercase">
        {{ $t('exam.questions', { count: 20 }) }}
      </p>
      <p class="text-primary/35 text-[10px] capitalize mt-1 mb-1.5" :class="{ ['text-white/35']: props.active }">
        {{ $t('exam.defaultByArabyEngine') }}
      </p>
      <p class="text-primary font-semibold capitalize mb-2" :class="{ ['text-white']: props.active }">
        Lazzem & transitive criteria
      </p>
      <p class="text-primary/60 text-xs" :class="{ ['text-white/65']: props.active }">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of
        the printing and typesetting industry.
      </p>
    </div>

    <BaseButton
      v-if="props.active"
      class="bg-white p-1 px-2 shadow-none flex items-center gap-2 text-emerald-400 font-semibold uppercase text-xs !rounded-lg absolute rtl:left-0 ltr:right-0 top-0 m-5"
    >
      <IconCheckMarkCircle class="text-xl" />
      <span> {{ $t('common.selected') }} </span>
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import IconCheckMarkCircle from '@/assets/icons/checkMarkCircle.svg';

const props = defineProps<{ active?: boolean }>();
</script>
