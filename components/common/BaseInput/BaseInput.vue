<template>
  <div class="relative">
    <div class="p-float-label border border-stone-200 rounded-xl p-2 px-3" :class="{ ['border-red-400']: errorText }">
      <input
        class="outline-none shadow-none w-full text-sm py-1"
        :class="{ ['p-filled']: modelValue, [`${inputClass}`]: Boolean(inputClass) }"
        :value="props.modelValue"
        :type="type"
        @input="onInputChangeHandler"
      />
      <label
        class="text-xs text-stone-400 bg-white rtl:right-3 rtl:left-auto"
        :for="id"
        :class="{ ['text-red-400']: errorText }"
      >
        <span>
          {{ labelText }}
        </span>
        <span v-if="showAstric" class="text-red-500"> * </span>
      </label>
    </div>
    <span v-if="errorText" class="block px-3 text-start text-xs font-normal text-red-400 mt-0.5">
      {{ errorText }}
    </span>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
  type?: string;
  id?: string;
  labelText?: string;
  modelValue?: string | number;
  showAstric?: boolean;
  errorText?: string;
  inputClass?: string;
}>();

const { id, labelText, type, modelValue, showAstric } = toRefs(props);

const onInputChangeHandler = (event: Event) => {
  const inputEle = event.target as HTMLInputElement;
  emit('update:modelValue', inputEle?.value);
};
</script>
