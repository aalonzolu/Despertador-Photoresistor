var five = require("johnny-five"),
board, photoresistor;

board = new five.Board();

board.on("ready", function() {

  var piezo = new five.Piezo(3);

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

  photoresistor = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  board.repl.inject({
    pot: photoresistor
  });

  photoresistor.on("data", function() {
    console.log(this.value);
    if(this.value >=90)
    {
      piezo.play({
        song: [
        ["C4", 1 / 4],
        ["D4", 1 / 4],
        ["F4", 1 / 4],
        ["D4", 1 / 4],
        ["A4", 1 / 4],
        [null, 1 / 4],
        ["A4", 1],
        ["G4", 1],
        [null, 1 / 2],
        ["C4", 1 / 4],
        ["D4", 1 / 4],
        ["F4", 1 / 4],
        ["D4", 1 / 4],
        ["G4", 1 / 4],
        [null, 1 / 4],
        ["G4", 1],
        ["F4", 1],
        [null, 1 / 2]
        ],
        tempo: 100
      });
    }
  });
});
