function findSeats(){
	alert("123");
	// If seats are already selected, reinitialize all seats to clear them
	if (selSeat >= 0) {
		selSeat = -1;
		initSeats();
	}
	//Search through all the seats for availability
	var i = 0, finished = false;
	while (i<seats.length && !finished) {
		for (var j = 0; j < seats[i].length; j++) {
			//See if the current seat plus the next two seats are available
			if (seats[i][j] && seats[i][j+1] && seats[i][j+2]) {
				// Set the seat selection and update the appearance of the seats
				selSeat = i*seats[i].length + j;
				document.getElementById('seat'+(i*seats[i].length + j)）.src = "seat_select.png";
				document.getElementById('seat'+(i*seats[i].length + j)).alt = "Your seat";
				document.getElementById('seat'+(i*seats[i].length + j+1)).src = "seat_select.png";
				document.getElementById('seat'+(i*seats[i].length + j+1)).alt = "Your seat";
				document.getElementById('seat'+(i*seats[i].length + j+2)).src = "seat_select.png";
				document.getElementById('seat'+(i*seats[i].length + j+2)).alt = "Your seat";
				//Prompt the user to accept the seats
				var accept = confirm("Seats "+(j+1)+" through "+(j+3)+" in Row "+(i+1)+" are available. Accept?");
				if (accept) {
					//The user accepted the seat,so we're done
					finished = true;
					break;
				}
				else {
					//The user rejected the seats, so clear the seat selection and keep looking
					selSeat = -1;
					document.getElementById('seat'+(i*seats[i].length + j)).src = "seat_avail.png";
					document.getElementById('seat'+(i*seats[i].length + j)).alt = "Available seat";
					document.getElementById('seat'+(i*seats[i].length + j+1)).src = "seat_avail.png";
					document.getElementById('seat'+(i*seats[i].length + j+1)).alt = "Available seat";
					document.getElementById('seat'+(i*seats[i].length + j+2)).src = "seat_avail.png";
					document.getElementById('seat'+(i*seats[i].length + j+2)).alt = "Available seat";
				}
			}
		}
		//Increment the loop counter
		i++;
	}
}