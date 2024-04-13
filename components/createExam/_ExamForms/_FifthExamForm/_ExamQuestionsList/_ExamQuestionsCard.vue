<template>
  <div class="shadow-md border border-secondary/20 rounded-lg flex items-center p-2">
    <p class="text-neutral-400/75 font-semibold text-xs p-7">1</p>
    <div class="h-[75px] w-[1px] bg-secondary/45"></div>
    <div class="mx-2">
      <div class="flex items-center gap-2 flex-wrap">
        <div class="flex items-center gap-1">
          <IconPen class="input-pen" filled />
          <input
            class="text-neutral-400 text-sm underline outline-none w-[65px]"
            type="text"
            placeholder="mohamed"
            @keypress="modifiyInputWidth"
            @focusout="modifiyInputWidth"
          />
        </div>

        <p class="underline text-sm text-primary">Wrote</p>

        <div class="flex items-center gap-1">
          <IconPen class="input-pen" filled />
          <input
            class="text-neutral-400 text-sm underline outline-none"
            type="text"
            placeholder="the lesson."
            @keypress="modifiyInputWidth"
            @focusout="modifiyInputWidth"
          />
        </div>
      </div>

      <div class="flex items-center flex-wrap gap-2 md:gap-8">
        <BaseCheckbox
          v-for="x in 4"
          id="remember-me"
          :key="x"
          v-model="checkboxValue"
          class="my-3"
          name="remember-me"
          label-text="Wrote"
          value="Wrote"
          :label-class="{ ['!text-gray-400']: true }"
          :checkbox-pt="{
            icon: 'text-secondary',
            box: ({ context }: any) => ({
              class: context.checked
                ? 'border-2 border-secondary outline-none shadow-none bg-transparent'
                : 'border-2 border-gray-400 outline-none shadow-none bg-transparent',
            }),
          }"
        />
      </div>

      <div class="flex items-center justify-between mt-2 flex-wrap">
        <BaseRadioButton
          v-model="buttonValue"
          label-text="True"
          name="questionRadio"
          input-id="questionRadio1"
          :check-box-return-value="true"
        />

        <BaseRadioButton
          v-model="buttonValue"
          label-text="False"
          name="questionRadio"
          input-id="questionRadio2"
          :check-box-return-value="false"
        />
      </div>

      <!-- <p class="text-sm text-primary">What is the kind of this verb “ Verb Name ” ?</p> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPen from '@/assets/icons/pen.svg';

const checkboxValue = ref('');

const buttonValue = ref(false);

const modifiyInputWidth = (event: any) => {
  const target = event.target;
  if (target && target.value) {
    target.style.width = (target.value.length + 1) * 8 + 'px';
    return;
  }
  target.style.width = '65px';
};
</script>

<style lang="scss">
.input-pen {
  & path {
    @apply stroke-neutral-400;
  }
}
</style>
