import { ref, watch } from 'vue';

const getInitialMode = () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode !== null) {
    return savedMode === 'true';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const isDark = ref(getInitialMode());

const applyDarkMode = (value) => {
  if (value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

applyDarkMode(isDark.value);

watch(isDark, (newValue) => {
  applyDarkMode(newValue);
  localStorage.setItem('darkMode', newValue.toString());
});

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
  };

  const setDarkMode = (value) => {
    isDark.value = value;
  };

  return {
    isDark,
    toggleDarkMode,
    setDarkMode
  };
}
