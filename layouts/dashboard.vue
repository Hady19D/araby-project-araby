<template>
  <NuxtLayout name="default">
    <div class="mt-10">
      <div class="flex items-start flex-col md:flex-row gap-2">
        <BaseDasboardSidebar />
        <div class="w-full container my-10 md:mt-0">
          <slot />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>
