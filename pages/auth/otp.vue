<template>
  <div class="text-center">
    <div class="flex flex-col items-center mt-8">
      <img class="h-56" src="../../assets/images/otp-message-icon.webp" alt="otp-message-image" />
      <div class="w-full md:w-3/4 flex flex-col gap-4">
        <p class="text-3xl font-semibold text-primary">
          {{ $t('auth.verifyEmailToAccessServices') }}
        </p>
        <p class="text-neutral-400 text-sm">
          {{ $t('auth.verifyAccountEnterDigits') }}
        </p>

        <VOtpInput
          v-model:value="bindModal"
          class="flex items-center justify-between"
          separator=""
          input-classes="otp-input"
          input-type="letter-numeric"
          :num-inputs="otpPlaceholderList.length"
          :should-auto-focus="true"
          :placeholder="otpPlaceholderList"
        />
        <p v-if="!timeIsDoneStatus" class="text-sm flex items-center self-center gap-1">
          <IconClockCircle class="text-white text-lg" />
          <span class="text-red-500"> {{ formattedTime }} </span>
        </p>
        <BaseButton class="bg-primary text-white py-3 mt-5 w-full"> {{ $t('auth.verify') }} </BaseButton>
      </div>
    </div>

    <BaseButton
      class="text-sm text-neutral-400 !my-4 block m-auto !shadow-none disabled:text-neutral-300"
      :disabled="!timeIsDoneStatus"
      @click="resetTimer"
    >
      <span>
        {{ $t('auth.didntReceiveCode') }}
      </span>
      <span class="text-secondary font-bold" :class="{ ['!text-neutral-300']: !timeIsDoneStatus }">
        {{ $t('auth.resend') }}
      </span>
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import VOtpInput from 'vue3-otp-input';
import IconClockCircle from '@/assets/icons/clockCircle.svg';

const initialTime = 10;

const otpPlaceholderList = new Array(7).join('-').split('');

const bindModal = ref('');

const timeIsDoneStatus = ref(false);

const countdownTimeInSeconds = ref(initialTime);

const intervalCounter = ref();

const formattedTime = computed(() => {
  const minutes = Math.floor(countdownTimeInSeconds.value / 60);
  const seconds = countdownTimeInSeconds.value % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

const updateCountdown = () => {
  countdownTimeInSeconds.value--;

  if (countdownTimeInSeconds.value < 0) {
    clearInterval(intervalCounter.value);
    timeIsDoneStatus.value = true;
  }
};

const resetTimer = () => {
  timeIsDoneStatus.value = false;
  clearInterval(intervalCounter.value);
  countdownTimeInSeconds.value = initialTime;
  intervalCounter.value = setInterval(updateCountdown, 1000);
  updateCountdown();
};

onMounted(() => {
  updateCountdown();
  intervalCounter.value = setInterval(updateCountdown, 1000);
});

onDeactivated(() => {
  clearInterval(intervalCounter.value);
});

definePageMeta({
  layout: 'auth',
});
</script>

<style lang="scss">
.otp-input {
  @apply w-[62px] h-[62px] border border-neutral-200 text-neutral-200 text-center rounded-xl bg-transparent outline-none;
}
.otp-input.is-complete {
  @apply border-primary text-primary bg-transparent;
}
</style>
