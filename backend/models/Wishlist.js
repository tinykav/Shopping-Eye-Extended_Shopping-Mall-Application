//models/Wishlist.js
const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }]
});

const Wishlist = mongoose.model("Wishlist", WishlistSchema);
module.exports = Wishlist;
