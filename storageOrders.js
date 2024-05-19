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
  measurementId: "G-RK5P0291EP",

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);//добавление данных

export function createItemsStorage(key) {

  // const storage = getStorage();
  // const AppleRef = ref(storage, 'images/Apple Watch.jpg');
  // console.log(AppleRef);

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



    // push: async function(movie) {
    //   try {
    //     await setDoc(doc(this.db, this.key, movie.id), {//переделываем add на set, т.к. нужно, чтобы id не создавалось, а приходило из модели
    //       title: movie.title,
    //       done: movie.done,
    //       createdAdd: serverTimestamp()//при создании документа добавь дату создания
    //     }); 
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //     }
    //   },

    // delete: async function(movie) {
    //   const batch = writeBatch(this.db, this.key, movie.id);
       
    //   const ref = doc(this.db, this.key, movie.id);
      
    //   batch.delete(ref);
    //   await batch.commit();
  
    //   },

    // update: async function(movie) {
    //   const ref = doc(this.db, this.key, movie.id);
    //   console.log(movie);
    //   await updateDoc(ref, {
    //      done: movie.done
  
    //     });  
    // }


async function add() {//добавить новую запись
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      // id: '',
      userId: "458",
      address: {
        city: "Htitnb[f",
        line: "djrzpfkmyfz 31",
        userName: 'Bhbyf',
        phone: 4582235
      },
      deliveryPrice: 6.99,
      items: {
        itemId: "125",
        quantity: 2
      },
      paymentMethod: "card",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


async  function get() {
  const querySnapshot = await getDocs(collection(db, "orders"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().userId}`);
});

}
// add();
// get();