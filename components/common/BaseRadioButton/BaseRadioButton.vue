<template>
  <div>
    <div class="flex items-center gap-1">
      <PrimeRadioButton
        :model-value="modelValue"
        :input-id="inputId"
        :name="name"
        :value="checkBoxReturnValue"
        :pt="{
          root: 'w-[19px] h-[19px]',
          box: 'border-[3px] w-[19px] h-[19px] border-gray-400 bg-transparent p-[3px]',
          icon: 'bg-secondary w-[8px] h-[8px]',
        }"
        @update:model-value="onInputChangeHandler"
      />
      <label
        :for="inputId"
        class="text-gray-400 text-sm cursor-pointer"
        :class="{ ['text-secondary']: modelValue === checkBoxReturnValue }"
      >
        {{ labelText }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
  inputId: string;
  name: string;
  modelValue: any;
  checkBoxReturnValue: any;
  labelText: string;
}>();

const { inputId, name, checkBoxReturnValue } = toRefs(props);

const onInputChangeHandler = (value: any) => {
  emit('update:modelValue', value);
};
</script>
