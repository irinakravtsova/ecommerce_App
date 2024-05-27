
import { ECOMMERCE_ITEMS_STORAGE_KEY } from "./constants";
import { ECOMMERCE_ORDERS_STORAGE_KEY } from "./constants";
import { createItemsStorage } from "./storage";
import { createOrdersStorage } from "./storageOrders";
import { createOrdersModel } from "./modelOrders";
import { createOrderView } from "./viewOrder";
import { createOrderBagView } from "./viewOrder";
import { createMsgErrorOrder } from "./viewErorMsg";


const initialOrders = [];
const modelOrders = createOrdersModel(initialOrders);
const viewOrder = createOrderView('.order-node');
const viewOrderBag = createOrderBagView('.bag-orders');
const viewOrderError = createMsgErrorOrder(".container");
const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
const storageOrders = createOrdersStorage(ECOMMERCE_ORDERS_STORAGE_KEY);

let bagIds = {};
let bagOrder = {};

storageOrders.pull().then((orders) => {
   loadOrderAddress(orders);
});

storage.pull().then((items) => {
  loadOrderBag(items);
});

function getParameterFromURL(parameter) {//получи id из URL
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameter)//функция get - получи значение, которое там есть
};

function loadOrderAddress(orders) {
    const orderId = getParameterFromURL('id');
        if (!orderId) {
          viewOrderError.renderMsgErrorOrder();
          return
        }
    const findOrder = orders.find(order => order.id === orderId);
    bagOrder = findOrder.items;
    bagIds = Object.keys(bagOrder);
   
    viewOrder.renderOrderAddress(findOrder)
};

function loadOrderBag(items) {
  const findItems = items.filter(item => bagIds.includes(item.id));
  viewOrderBag.renderOrderBag(findItems, bagOrder);
};

 










