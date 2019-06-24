/*
  TIME ESTIMATION
  Time Estimation adalah sebuah fungsi yang menerima 2 input berupa
  departureTime (waktu keberangkatan) dan travelingTime (waktu tempuh dalam hitungan jam) dan 
  akan mengembalikan nilai berupa arrivalTime (waktu kedatangan).

  FORMAT WAKTU PADA INPUT ADALAH "HH:MM AM/PM"

  EXAMPLE 1:
  INPUT Departure Time = "02.00 AM"
  INPUT Traveling Time = 2 (2 Jam)
  OUTPUT Arrival Time = "04.00 AM"

  EXAMPLE 2:
  INPUT Departure Time = "11.00 AM"
  INPUT Traveling Time = 2 (2 Jam)
  OUTPUT Arrival Time = "01.00 PM"

  RULES:
  1. tidak boleh menggunakan built in function .split(), .map(), .filter()
  2. Asumsi input travelingTime hanya dalam hitungan jam
  3. Perhatikan AM/PM antara waktu kedantangan dan keberangkatan, 
  perhitungan AM/PM mengikuti standard
*/

function timeEstimation(departureTime, travelingTime) {
  let finish = '';
  let result = '';

  if (parseInt(departureTime[0] + departureTime[1]) + travelingTime > 12 && departureTime[6] + departureTime[7] == 'AM') {
    result += parseInt(departureTime[0] + departureTime[1]) + travelingTime - 12 + departureTime[2] + departureTime[3] + departureTime[4] + departureTime[5] + 'PM';
  } else if (parseInt(departureTime[0] + departureTime[1]) + travelingTime > 12 && departureTime[6] + departureTime[7] == 'PM') {
    result += parseInt(departureTime[0] + departureTime[1]) + travelingTime - 12 + departureTime[2] + departureTime[3] + departureTime[4] + departureTime[5] + 'AM';
  } else {
    result += parseInt(departureTime[0] + departureTime[1]) + travelingTime + departureTime[2] + departureTime[3] + departureTime[4] + departureTime[5] + departureTime[6] + departureTime[7];
  }

  if (result.length < 8) {
    finish += '0' + result;
  } else {
    finish += result;
  }

  return finish;
}

console.log(timeEstimation("01:21 AM", 3)) // "04:21 AM"
console.log(timeEstimation("10:00 AM", 4)) // "02:00 PM"
console.log(timeEstimation("11:33 PM", 2)) // "01:33 AM"