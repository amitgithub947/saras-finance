<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: String,
  isLoading: Boolean
});

const emit = defineEmits(['update:modelValue']);

const handleInput = (e) => {
  emit('update:modelValue', e.target.value);
};
</script>

<template>
  <div class="relative w-full max-w-2xl mx-auto">
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 pointer-events-none">
        <svg aria-hidden="true" class="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      
      <input 
        :value="modelValue"
        @input="handleInput"
        type="text" 
        class="block w-full p-3 sm:p-4 pl-10 sm:pl-12 pr-10 sm:pr-12 text-sm sm:text-base text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent shadow-lg active:shadow-md sm:hover:shadow-xl transition-all duration-300 outline-none placeholder-slate-400 dark:placeholder-slate-500 touch-manipulation" 
        placeholder="Search financial terms..." 
        required
      >
      
      <div v-if="isLoading" class="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4">
        <svg class="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-blue-500 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
      </div>
    </div>
  </div>
</template>