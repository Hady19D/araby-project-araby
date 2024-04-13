<template>
  <div class="p-float-label border border-stone-200 rounded-xl p-2 px-3">
    <textarea
      :id="id"
      class="outline-none w-full"
      :name="id"
      cols="20"
      rows="4"
      :value="modelValue"
      @input="onInputChangeHandler"
    ></textarea>
    <label class="text-xs text-stone-400 bg-white" :for="id">
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
  modelValue?: string | number;
  showAstric?: boolean;
}>();

const { id, labelText, modelValue, showAstric } = toRefs(props);

const onInputChangeHandler = (event: Event) => {
  const inputEle = event.target as HTMLInputElement;
  emit('update:modelValue', inputEle?.value);
};
</script>
