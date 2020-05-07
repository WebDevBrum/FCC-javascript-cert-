// Only change code below this line
class Thermostat {
  constructor(tempF) {
    this._tempF = tempF;
  }
  //getter for getting temp in c
  get temperature() {
  
  return 5/9 * (this._tempF - 32);
  
  //if F would just write return _tempF 
   //5/9 * (_tempF - 32);
  
  }
  //setter for setting temp in c
 set temperature(newTemp) {
   this._tempF = newTemp * 9.0 / 5 + 32;

   //if F would just write this._tempF = newTemp;
 }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius from76 in fahrenheit
thermos.temperature = 26; //new temp in c so 79rnd in fahrenhreit
temp = thermos.temperature; // 26 in Celsius is temp returned

console.log(temp);
