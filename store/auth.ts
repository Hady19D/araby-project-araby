export const useAuthStore = defineStore('useAuthStore', () => {
  const sendRegisterData = async () => {
    const response = await useDataFetcher('/auth/register');

    console.log(response);
  };

  return { sendRegisterData };
});
