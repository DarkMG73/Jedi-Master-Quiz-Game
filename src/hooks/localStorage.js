function localStorageTools() {
  return {
    saveToLocal: (name, item) => {
      const preparedItem = JSON.stringify(item);
      localStorage.setItem(name, preparedItem);
    },

    getFromLocal: (name) => {
      const grabbedItem = localStorage.getItem(name);
      return JSON.parse(grabbedItem);
    },

    clearLocal: (name) => {
      localStorage.removeItem(name);
    },
  };
}

export default localStorageTools;
