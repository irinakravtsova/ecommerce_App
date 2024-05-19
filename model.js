// import { count } from 'firebase/firestore';
// import {v4 as uuidv4} from 'uuid';
// const userid = uuidv4();

export function createItemsrModel(items) {
  return {
    
    itemsIds: [],//[id1, id2, id3]
    itemsByIds: {},// также, как в базе по индексу{id1{id, count}, ...}

    // addItem: function({id, count}) {
    //  const product = {
    //     id,
    //     count
    //   };
    //   this.bag.push(product.id);
    
      
    //   this.productsIds.push(product.id);

    //   this.bagById[product.id] = product;
    //   console.log(this.productsIds);
    
    //   return product;
    // },
    setItems: function(items) {
      this.itemsIds = [];
      this.itemsById = {};

      this.items.forEach(item => {
        this.itemsIds.push(item.id),
              this.itemsById[item.id] = item;
      });
     
    },

    getItems: function() {
      return {
        itemsById: this.itemsById,
        itemsIds: this.itemsIds
      }
    },
    getItem: function(id) {
      return this.itemsByIds[id];
    }
  }


};

// export function createOrdersModel (orders) {
//   return {
//     orderId,
//     adress,
//     paymentMethod,
  
//     status,
//     user,
//     updateOrders: function (orders) {
//       this.orders = orders
//     },
//     setOrders: function(orders) {//задать список
//       orders.forEach(order => {//добавь  в массив  
//       this.orders.push(order)
 
//     })
//   },
//   getOrders: function() { //получить список
//         return this.orders
//   },
//   }

// }

export function createBagModel(bag) {

//   // bag = {                             //ключ id, значение - count
//     //   id1: count,
//     //   id2: count,
//     //   id3: count
//     // }

return {
    
  bagIds: [],//[id1, id2, id3]
  bagByIds: {},// также, как в базе по индексу{id1{id, count}, ...}

  addProductFromBag: function({id, count}) {
   const product = {
      id,
      count
    };
   
    this.bagIds.push(product.id);
    this.bagById[product.id] = product;
    
    return product;
  },
  setBag: function(bag) {
    this.bagIds = [];
    this.bagById = {};

    this.bag.forEach(product => {
      this.itemsIds.push(product.id),
            this.itemsById[product.id] = product;
    });
   
  },

  getBag: function() {
    return {
      bagById: this.itemsById,
      bagIds: this.itemsIds
    }
  },
  getProduct: function(id) {
    return this.bagByIds[id];
  }
}
}
 

  
 



    // plusProduct: function(id) {
    //  this.bagById[count] = this.bagById[count]++;
    // },

    // minusProduct: function(id) {
    //   this.bagById[id].count = count--;
    // },

    // deleteProduct: function(id) {
    //   this.bagById[id].delete;
    // },
//     getProduct: function(id) {
//       return this.bagById[id];
//     } 
 
//   }
// }


export function createItemsModel(items) {
  return {
    items,
    update: function(items) {
      this.items = items;
    },
 
    setItems: function(items) {//задать список
        items.forEach(item => {//добавь  в массив  
        this.items.push(item)
   
      })
    },
    getItems: function() { //получить список
          return this.items
    },
  
  
  }
}

export function createCardModel() {
  return {
    loadCard: function(items) {
      if (!items || items.length) {
        console.log("error");

      }
      const productId = getParameterFromURL(id);
      console.log(productId);
      if (!productId) {
        console.log("error");
      }
      // this.items = items;
    },
    

    }


  }
//   function getParameterFromURL(parameter) {//передай из URL страницы параметр, id - ключ из которого нужно вынуть значение
//     const urlParams = new URLSearchParams(window.location.search) //в переменную забери из адресной строки, образуя объект
//     return urlParams.get(parameter); //воспользуйся методом get() для этого значеня, чтобы получить само это значение  

