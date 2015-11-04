function initSeats(){
  // Initialize the appearance of all seats
  for (var i = 0; i < seats.length; i++){
    for (var j = 0 ; j<seats[i].length; j++) {
      if(seats[i][j]){
        // Set the seat to unavailable
        document.getElementById("seat"+(i*seats[i].length+j)).src="seat_avail.png";
        document.getElementById("seat"+(i*seats[i].length+j)).alt="Available seat";
      }
      else{
        // Set the seat to unavailable
        document.getElementById("seat"+(i*seats[i].length+j)).src="seat_unavail.png";
        document.getElementById("seat"+(i*seats[i].length+j)).alt="Unavailable seat";
      }
    }
  }
}