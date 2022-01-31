function findCarInLot(car) {
    for (var i = 0; i < lot.length; i++) {
    if (car === lot[i]) {
    return i;
    }
    }
    return -1;
   }
   var chevy = {
    make: "Chevy",
    model: "Bel Air"
   };
   var taxi = {
    make: "Webville Motors",
    model: "Taxi"
   };
   var fiat1 = {
    make: "Fiat",
    model: "500"
   };
   var fiat2 = {
    make: "Fiat",
    model: "500"
   };
   var lot = [chevy, taxi, fiat1, fiat2];
   var loc1 = findCarInLot(fiat2);
   var loc2 = findCarInLot(taxi);
   var loc3 = findCarInLot(chevy);
   var loc4 = findCarInLot(fiat1);

   console.log(loc1);
   console.log(loc2);
   console.log(loc3);
   console.log(loc4);

/*  Output
3
1
0
2
*/