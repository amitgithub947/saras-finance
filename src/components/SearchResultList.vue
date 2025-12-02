<script setup>
import SearchResultItem from './SearchResultItem.vue';

defineProps({
  results: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="w-full max-w-2xl mx-auto mt-6 space-y-4">
    <TransitionGroup name="list" tag="div" class="space-y-4">
      <SearchResultItem 
        v-for="item in results" 
        :key="item.id" 
        :result="item" 
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>