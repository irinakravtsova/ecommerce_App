import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDjy5thQwhCO9qDdjehZ-IUT5KR75zmWRo",
  authDomain: "ecommerce-app-65411.firebaseapp.com",
  projectId: "ecommerce-app-65411",
  storageBucket: "ecommerce-app-65411.appspot.com",
  messagingSenderId: "612979040841",
  appId: "1:612979040841:web:3e8a0047a9dca8e03bd598",
  measurementId: "G-RK5P0291EP"
};

export function createOrdersStorage(key) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);//добавление данных

  return {
    key,
    db,
    //читаем данные
    pull: async function() { // метод get по сети обращается в firestore копируем из firebase get, +this данным коллекции
      const orders = []; //создаем пустой массив
      const querySnapshot = await getDocs(collection(this.db, this.key));
  
        querySnapshot.forEach((doc) => {
          orders.push({
            id: doc.id,
            userId: doc.data().userId,
            city: doc.data().city,
            line: doc.data().line,
            userName: doc.data().userName,
            phone: doc.data().phone,
            deliveryPrice: 6.99,
            items: doc.data().items,
            paymentMethod: doc.data().paymentMethod,
            sum: doc.data().sum,
            total: doc.data().total
          })
          // console.log(`${doc.id} => ${doc.data().sum}`);
      });
      return orders;
    },
    
    push: async function add(order) {//добавить новую запись
      try {
        const docRef = await addDoc(collection(this.db, this.key), {
            userId: order.userId,
            city: order.city,
            line: order.line,
            userName: order.name,
            phone: order.phone,
            deliveryPrice: 6.99,
            items: order.items,
            paymentMethod: order.paymentMethod,
            sum: order.sum,
            total: order.total
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }
}


