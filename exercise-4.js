db.pizzaOrders.find({
  $and: [{ quantity: { $lt: 5 } }, { credit_card_type: "mastercard" }],
});
//or db.pizzaOrders.find({credit_card_type: "mastercard", quantity: {$lt:5}})
db.pizzaOrders.find({
  $and: [
    { size: "small" },
    { $and: [{ quantity: { $gte: 1 } }, { quantity: { $lte: 5 } }] },
  ],
});
//or db.pizzaOrders.find({size: "small",quantity: { $gte: 1, $lte: 5 }})
db.pizzaOrders.find({ credit_card_type: null, quantity: { $gt: 10 } });
