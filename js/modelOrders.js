
export function createOrdersModel(orders) {
  return {
    orders,
    update: function(orders) {
      this.orders = orders;
    },
    add: function(order) {
      this.orders.push(order);
      console.log(orders);
    },
    get: function() {
      return this.orders;
    },
  }
}