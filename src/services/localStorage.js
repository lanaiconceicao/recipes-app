// NOTE Funções prontas para guardar e resgatar itens no localStorage.

export const saveLocalStorage = (key, payload) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const getLocalStorage = (key) => JSON
  .parse(localStorage.getItem(key));
