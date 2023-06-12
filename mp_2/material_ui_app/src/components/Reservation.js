import React from 'react'

function Reservation() {
    return (
        function generateReservationCode(length) {
            var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var code = "";
            
            for (var i = 0; i < length; i++) {
              var randomIndex = Math.floor(Math.random() * charset.length);
              code += charset.charAt(randomIndex);
            }
            
            return code;
          }
          
          // Generate a reservation code with a length of 8 characters
          let reservationCode = generateReservationCode(8);
          console.log(reservationCode);
          
    <div>Reservation</div>
  )
}

export default Reservation