// #1
db.pizzaOrders.findOne(
  { customer_name: "Zoe" },
  { projection: { customer_name: 1, total_price: 1 } }
);
