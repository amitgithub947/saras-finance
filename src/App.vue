<script setup>
import { ref, watch } from 'vue';
import { searchService } from './services/mockApi';
import SearchBar from './components/SearchBar.vue';
import SearchResultList from './components/SearchResultList.vue';
import BaseLoader from './components/BaseLoader.vue';
import DarkModeToggle from './components/DarkModeToggle.vue';

const searchQuery = ref('');
const results = ref([]);
const isLoading = ref(false);
const error = ref(null);
let debounceTimeout = null;

const performSearch = async (query) => {
  if (!query.trim()) {
    results.value = [];
    return;
  }

  isLoading.value = true;
  error.value = null;

  try {
    const data = await searchService.search(query);
    results.value = data;
  } catch (err) {
    error.value = "An error occurred while fetching results.";
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

watch(searchQuery, (newQuery) => {
  if (debounceTimeout) clearTimeout(debounceTimeout);

  if (!newQuery) {
    results.value = [];
    return;
  }

  isLoading.value = true; 

  debounceTimeout = setTimeout(() => {
    performSearch(newQuery);
  }, 400);
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500 py-6 sm:py-12 px-3 sm:px-6 lg:px-8">
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
      <div class="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>

    <DarkModeToggle />

    <div class="max-w-3xl mx-auto relative z-10">
      
      <div class="text-center mb-6 sm:mb-10 pt-2">
        <h1 class="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-2 px-2">
          Saras Finance Knowledge Base
        </h1>
        <p class="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600 dark:text-slate-300 px-2">
          Search for definitions, terms, and financial concepts.
        </p>
      </div>

      <SearchBar 
        v-model="searchQuery" 
        :is-loading="isLoading" 
      />

      <div class="mt-8">
        <div v-if="error" class="text-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          {{ error }}
        </div>

        <div v-else-if="isLoading && !results.length" class="max-w-2xl mx-auto">
          <BaseLoader />
        </div>

        <div v-else-if="!isLoading && searchQuery && results.length === 0" class="text-center text-slate-500 dark:text-slate-400 mt-10">
          No results found for "{{ searchQuery }}". Try "Equity" or "Tax".
        </div>

        <SearchResultList v-else :results="results" />
      </div>

    </div>
  </div>
</template>

<style>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>