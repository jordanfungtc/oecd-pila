import { reactive } from "vue";

export const store = reactive({
  isLoading: true,
  auth: {} as { [key: string]: any }, // user, provider
  state: {} as { [key: string]: any }, // KnowLearning state
  metadata: {} as { [key: string]: any }, // KnowLearning metadata
  titleKey: "", // Page title in navbar
});
