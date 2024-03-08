"use strict";
// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["Muree", "Turki", "suadiarab", "Dubai", "Italy"];
//1• Print your array in its original order.
console.log(places);
//2 • Print your array in alphabetical order without modifying the actual list.
console.log([...places].sort());
//3 • Show that your array is still in its original order by printing it.
console.log(places);
//4 • Print your array in reverse alphabetical order without changing the order of the original list.
console.log([...places].sort().reverse());
//5 • Show that your array is still in its original order by printing it again.
console.log(places);
//6• Reverse the order of your list. Print the array to show that its order has changed.
console.log(places.reverse());
//7 • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(places.reverse());
// 8• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(places.sort());
//8 • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(places.sort().reverse());
