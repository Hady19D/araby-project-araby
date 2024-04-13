<template>
  <div class="p-float-label border border-stone-200 rounded-xl p-2 px-3">
    <PrimeDropdown
      :model-value="modelValue"
      :options="options"
      :option-label="optionLabel"
      :pt="{
        root: 'bg-white h-full w-36 p-0 rounded-xl w-full outline-none shadow-none',
        input: 'py-1 text-primary font-medium text-start',
      }"
      @change="onInputChangeHandler"
    />
    <label class="text-xs text-stone-400 bg-white rtl:right-3 rtl:left-auto" :for="id">
      <span>
        {{ labelText }}
      </span>
      <span v-if="showAstric" class="text-red-500"> * </span>
    </label>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
  id?: string;
  labelText?: string;
  optionLabel?: string;
  modelValue?: Record<string, string> | string;
  options: Array<unknown>;
  showAstric?: boolean;
}>();

const { id, labelText, options, optionLabel, showAstric } = toRefs(props);

const onInputChangeHandler = (value: { value: Record<string, string> }) => {
  emit('update:modelValue', value.value);
};
</script>
