<template>
  <div>
    <div class="relative border border-stone-200 rounded-xl p-2 px-3" :class="{ ['border-red-400']: errorText }">
      <label
        class="absolute -top-2 text-xs text-stone-400 bg-white rtl:right-3 rtl:left-auto"
        :class="{ ['text-red-400']: errorText }"
      >
        <span>
          {{ labelText }}
        </span>
        <span v-if="showAstric" class="text-red-500"> * </span>
      </label>

      <div class="mt-2">
        <QuillEditor :value="modelValue" @input="onInputChangeHandler" />
      </div>
    </div>
    <span v-if="errorText" class="block px-3 text-start text-xs font-normal text-red-400 mt-0.5">
      {{ errorText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';

const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
  labelText?: string;
  modelValue?: string | number;
  errorText?: string;
  showAstric?: boolean;
}>();

const { labelText, modelValue, errorText, showAstric } = toRefs(props);

const onInputChangeHandler = (event: Event) => {
  const inputEle = event.target as HTMLInputElement;
  emit('update:modelValue', inputEle?.value);
};
</script>

<style lang="scss">
@import '@vueup/vue-quill/dist/vue-quill.snow.css';

.ql-toolbar {
  @apply bg-neutral-100 border-0 rounded-xl #{!important};
}

.ql-container {
  @apply border-0 h-[212px] #{!important};
}
</style>
