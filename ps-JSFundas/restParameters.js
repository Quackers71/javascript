function sendCars(day, ...carIds){
    carIds.forEach( id => console.log(id) );
  }
  
  sendCars('Monday',1,2,3);