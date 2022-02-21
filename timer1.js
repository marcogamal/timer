const timer = function (inputs) {
  inputs.forEach((input) => {
    if (input >= 0 && !isNaN(input)) {
      setTimeout(() => {
        process.stdout.write("."); // can write '\x07' instead for bell dings
      }, input * 1000);
    }
  });
};

timer(process.argv);