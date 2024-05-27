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

export function createItemsStorage(key) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);//добавление данных

  return {
    key,
    db,
    pull: async function() { // метод get по сети обращается в firestore копируем из firebase get, +this данным коллекции
      const ref = collection(this.db, this.key);
      const q = query(ref, orderBy("price"));
      const querySnapshot = await getDocs(q);
           
      const items = []; //создаем пустой массив
      
      querySnapshot.forEach((doc) => {//перебирая БД добавляем данные в пустой пока массив
        items.push({
          model: doc.data().model,
          series: doc.data().series,
          image: doc.data().image,
          description: doc.data().description,       
          price: doc.data().price,
          rating: doc.data().rating,      
          descriptionShort: doc.data().descriptionShort,
          id: doc.id,
          // count: doc.data().count
         })
        // console.log(`${doc.id} => ${doc.data().count}`);
      });
      return items;  //метод возвращает или пустой массив (если в хранилище ничего нет) или набор объектов 
    }
  }
}

