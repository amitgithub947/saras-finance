<script setup>
import { ref } from 'vue';

const props = defineProps({
  result: {
    type: Object,
    required: true
  }
});

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div 
    @click="toggleExpand"
    class="group bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-5 shadow-md border border-slate-200 dark:border-slate-700 active:shadow-lg sm:hover:shadow-xl active:border-blue-400 sm:hover:border-blue-400 dark:active:border-blue-500 dark:sm:hover:border-blue-500 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 touch-manipulation"
  >
    <div class="flex justify-between items-start sm:items-center gap-3">
      <h3 class="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1">
        {{ result.title }}
      </h3>
      <svg 
        class="w-5 h-5 flex-shrink-0 text-slate-400 dark:text-slate-500 transform transition-transform duration-300 mt-0.5 sm:mt-0"
        :class="{ 'rotate-180': isExpanded }"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <p class="text-slate-600 dark:text-slate-300 mt-2 text-sm">{{ result.snippet }}</p>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-y-95 opacity-0 h-0"
      enter-to-class="transform scale-y-100 opacity-100 h-auto"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-y-100 opacity-100 h-auto"
      leave-to-class="transform scale-y-95 opacity-0 h-0"
    >
      <div v-show="isExpanded" class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
        <p class="text-slate-500 dark:text-slate-400 text-xs uppercase font-bold tracking-wider mb-2">Details</p>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
          {{ result.details }}
        </p>
      </div>
    </transition>
  </div>
</template>