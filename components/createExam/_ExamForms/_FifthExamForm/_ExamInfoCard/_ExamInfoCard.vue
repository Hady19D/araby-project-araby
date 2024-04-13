<template>
  <div class="flex items-center gap-3 p-5 bg-secondary/10 rounded-xl">
    <component :is="examCardIcon" class="text-2xl text-primary" filled />
    <div>
      <p class="text-xs text-secondary capitalize">
        {{ examInfo.title }}
      </p>

      <div class="mt-1">
        <div v-if="examInfo.type === ExamsCreateExamInfoCardTypeEnum.tags" class="flex items-center gap-3 flex-wrap">
          <BaseTag
            v-for="(tagValue, index) in examInfo.value"
            :key="`exam_info_tag_${index}`"
            class="!bg-primary text-secondary rounded-md py-2 px-8 text-center text-xs"
          >
            {{ tagValue }}
          </BaseTag>
        </div>
        <div
          v-else
          class="text-primary font-semibold"
          :class="{ ['font-light']: examInfo.type === ExamsCreateExamInfoCardTypeEnum.description }"
        >
          {{ examInfo.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPen from '@/assets/icons/pen.svg';
import IconChecklistMinimalistic from '@/assets/icons/ChecklistMinimalistic.svg';
import IconTransparentClockCircle from '@/assets/icons/transparentClockCircle.svg';
import IconChatLine from '@/assets/icons/chatLine.svg';
import IconFilter from '@/assets/icons/Filter.svg';
import IconBookmarkCircle from '@/assets/icons/BookmarkCircle.svg';
import { ExamsCreateExamInfoCardTypeEnum } from '~/types/exams/exams.enum';
import type { ExamsCreateExamInfoCardObjectType } from '~/types/exams/exams.type';

const props = defineProps<{ examInfo: ExamsCreateExamInfoCardObjectType }>();

const { examInfo } = toRefs(props);

const examCardIcon = computed(() => {
  switch (examInfo.value.icon) {
    case 'pen':
      return IconPen;
    case 'chat':
      return IconChatLine;
    case 'clock':
      return IconTransparentClockCircle;
    case 'list':
      return IconChecklistMinimalistic;
    case 'bookmark':
      return IconBookmarkCircle;
    case 'filters':
      return IconFilter;
  }
});
</script>
