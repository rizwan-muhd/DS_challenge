db.user.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$customerId", totalspent: { $sum: "amount" } } },
]);
