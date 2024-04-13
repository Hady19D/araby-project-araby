<template>
  <PrimePaginator
    class="my-3"
    :pt="{
      root: 'bg-transparent ltr-direction',
      pages: 'flex gap-2',
      previousPageButton: 'bg-secondary text-white rounded-lg w-10 h-10 mx-2 hidden md:flex items-center',
      nextPageButton: 'bg-secondary text-white rounded-lg w-10 h-10 mx-2 hidden md:flex items-center',
      firstPageButton: 'hidden md:block',
      lastPageButton: 'hidden md:block',
      pageButton: ({ context }) => ({
        class: context.active
          ? 'bg-primary text-white rounded-lg  w-10 h-10 font-semibold'
          : 'bg-secondary text-white rounded-lg  w-10 h-10 font-semibold',
      }),
    }"
  >
    <slot />
  </PrimePaginator>
</template>
