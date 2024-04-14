function useDebounce(callback, delay = 1000) {
  // it takes a callback and return a modified callback after the delay completes
  let timeID;
  return (...args) => {
    clearTimeout(timeID); //if there is any already timeout going on clear it
    timeID = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export default useDebounce;
