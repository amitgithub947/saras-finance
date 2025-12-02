<template>
  <div class="animate-pulse space-y-4 w-full">
    <div v-for="n in 3" :key="n" class="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
      <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-3"></div>
      <div class="h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
    </div>
  </div>
</template>