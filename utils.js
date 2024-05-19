

export function getBagLocalStorage() {
  const data = localStorage.getItem('bag');
  return data ? JSON.parse(data): [];
}

export function setBagLocakStorage(bag) { //передаем массив с объектами: id, count
  // const count = 
  const preparedData = JSON.stringify(bag);
  localStorage.setItem('key', preparedData);
}