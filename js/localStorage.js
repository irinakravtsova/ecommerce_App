

export function createLocalStorage(bagById) {
 
  return {
    bagById,
    pullBag: function() {
      const data = localStorage.getItem(this.bagById);
      return data ? JSON.parse(data): [];
  
      // if (!data) {
      //   return null;
      // }
      // return JSON.parse(data);
     
    },
  
    pushBag: function(bag) {//передаем массив, который нужно записать в LS
      const preparedData = JSON.stringify(bag);
      localStorage.setItem(this.bag, preparedData);
    }
  

    }
   
    
    
  }



