<template>
  <div class="flex items-center gap-2">
    <PrimeCheckbox
      v-model="checkBoxValue"
      :input-id="id"
      :name="name"
      :value="value"
      :pt="checkboxCustomStyles"
      binary
    />
    <label
      v-if="labelText"
      :for="id"
      class="text-sm text-primary font-medium cursor-pointer"
      :class="{ ['!text-neutral-500']: rounded, ...labelClass }"
    >
      {{ labelText }}
    </label>
  </div>
</template>

<script setup lang="ts">
import type { CheckboxPassThroughOptions } from 'primevue/checkbox';
import type { PassThrough } from 'primevue/ts-helpers';

const props = defineProps<{
  id?: string;
  name?: string;
  labelText?: string;
  value: string | number | boolean;
  rounded?: boolean;
  checkboxPt?: PassThrough<CheckboxPassThroughOptions>;
  labelClass?: Record<string, boolean>;
}>();

const checkBoxValue = ref(false);

const { id, rounded, checkboxPt, name, labelText } = toRefs(props);

const checkboxCustomStyles = computed(() => {
  if (checkboxPt.value) return checkboxPt.value;

  if (rounded.value) {
    return {
      box: `rounded-full ${checkBoxValue.value ? 'bg-primary' : 'bg-transparent border-2 border-neutral-400'}`,
      input: 'outline-none shadow-none',
    };
  }
  return {
    box: 'border border-neutral-200 outline-none shadow-none',
    input: ({ context }: any) => ({
      class: context.checked && 'bg-secondary outline-none shadow-none ',
    }),
  };
});
</script>
