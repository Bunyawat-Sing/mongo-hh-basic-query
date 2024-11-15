// #1
db.pizzaOrders.find({
  $and: [{ quantity: { $gte: 5 } }, { credit_card_type: "mastercard" }],
});

// #2
db.pizzaOrders.find({
  $and: [
    { quantity: { $gte: 1 } },
    { quantity: { $lt: 5 } },
    { size: "medium" },
  ],
});

// #3
db.pizzaOrders.find({
  $and: [{ quantity: { $gte: 10 } }, { credit_card_type: null }],
});
