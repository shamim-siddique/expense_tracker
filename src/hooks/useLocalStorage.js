export const getFromLocalStorage = (key) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
}

export const saveToLocalStorage = (key, value) => {
   return localStorage.setItem(key, JSON.stringify(value));
}