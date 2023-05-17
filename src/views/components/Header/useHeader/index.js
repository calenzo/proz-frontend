export const useHeader = () => {
  const user = {
    name: "João da Silva",
    profession: "Professor",
  };

  const handleNotification = () => {};

  return {
    user,
    handleNotification,
  };
};
