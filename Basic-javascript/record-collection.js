// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  //tracks
  if(prop != "tracks" && value != "") {
    collection[id][prop] = value;
  } else if (prop === "tracks" && collection[id].hasOwnProperty("tracks") != true) {
     collection[id][prop] = [value];
  } else if (prop === "tracks" && value != "") {
      collection[id][prop].push(value);
  } else if (value === "") {
    delete collection[id][prop];
  }

  return collection;
}

updateRecords(5439, "artist", "ABBA");
<<<<<<< HEAD

this is a trdt tedt tedt 
=======
console.log(123457);

ghis is a test test test test
>>>>>>> dc5047bb9bedc903665770bfbcaa221eeaa3c29a
