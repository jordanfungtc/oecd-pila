import { reactive } from "vue";

export const store = reactive({
  isLoading: true,
  auth: {} as { [key: string]: any }, // user, provider
  state: {} as { [key: string]: any }, // KnowLearning state
  metadata: {} as { [key: string]: any }, // KnowLearning metadata
  title: "", // Page title in navbar
  scrollToTop: () => {
    window.scrollTo(0, 0);
  },
});
