<template>
  <PrimeInputSwitch
    :pt="{
      root: 'h-[24px]',
      slider: ({ context }) => context.checked && 'bg-primary before:bg-green-500 transition-all ease-in-out',
    }"
  />
</template>
