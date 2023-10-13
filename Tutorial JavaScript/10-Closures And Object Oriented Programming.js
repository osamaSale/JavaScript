
// Closures And Object Oriented Programming

// Practice
const makeSafe = function (
  _safeSize,
  _attempts,
  _lockDownDuration,
  _alarmDuration
) {
  let safeSize = _safeSize;
  let safePassCode;
  const storage = [];
  let attempts = _attempts;
  const lockDownDuration = _lockDownDuration;
  const alarmDuration = _alarmDuration;

  let isOpen = false;
  let isLocked = false;
  let alarm = false;

  const safe = {
    add: function (name, size) {
      if (isLocked) return "Safe is locked";
      if (!isOpen) return "Please open the safe first";

      if (safeSize - size >= 0) {
        storage.push({ name: name, size: size });
        safeSize -= size;
        return true;
      } else {
        return false;
      }
    },
    remove: function (name) {
      if (isLocked) return "Safe is locked";
      if (!isOpen) return "Please open the safe first";

      let found = "Not Found";
      storage.forEach(function (element, index) {
        if (element.name === name) {
          safeSize += element.size;
          found = element;
          storage.splice(index, 1);
          return;
        }
      });
      return found;
    },
    setPassCode: function (passCode) {
      if (!safePassCode) {
        safePassCode = passCode;
        return safePassCode;
      } else {
        return "Reset passcode first";
      }
    },
    resetPassCode: function (passCode) {
      if (!safePassCode) return "Set passCode first";

      if (safePassCode === passCode) {
        safePassCode = undefined;
        return "PassCode has been reset";
      } else {
        return "PassCode doesn't match";
      }
    },
    openSafe: function (passCode) {
      if (isLocked) return "Safe is locked";

      if (safePassCode === passCode) {
        isOpen = true;
        alarm = false;
        return "Safe is open and ready to use";
      } else {
        if (!alarm) {
          alarm = true;
          safe.alarm();
        }
        if (!--attempts) {
          return safe.lockSafe();
        }
        return "Wrong passcode";
      }
    },
    closeSafe: function () {
      isOpen = false;
      return "Safe is now closed";
    },
    lockSafe: function () {
      isLocked = true;
      setTimeout(function () {
        isLocked = false;
      }, lockDownDuration);
      // return "Safe is now locked";
    },
    alarm: function () {
      setTimeout(function () {
        if (alarm) {
          isLocked = true;
          console.log("ALARM ALARM ALARM !!!");
        }
      }, alarmDuration);
    },
  };

  return safe;
};

const safe = makeSafe(10, 2, 5000, 10000);

// Extra Practice

const makePie = function (name, ingredients, bakeDuration) {
  const pie = {
    name: name,
    ingredients: ingredients,
    bakeDuration: bakeDuration,
    slices: 1,
    isBaked: false,
    timer: undefined,
    bakeTime: 0,
    bake: bake,
    slicePie: slicePie,
    checkIngredients: checkIngredients,
    addTopping: addTopping,
    stopBaking: stopBaking,
  };

  return pie;
};

const bake = function () {
  const that = this;
  this.timer = setInterval(function () {
    if (!that.bakeTime) {
      that.bakeTime = 1;
      console.log(that.bakeTime + " second have passed");
      that.bakeTime++;
    } else if (that.bakeTime !== that.bakeDuration) {
      console.log(that.bakeTime + " seconds have passed");
      that.bakeTime++;
    } else {
      that.name = "Baked " + that.name;
      console.log(that.name);
      that.bakeTime = 0;
      clearInterval(that.timer);
    }
  }, 1000);
};

const slicePie = function () {
  return (this.slices += 2 + "slices");
};

const checkIngredients = function (ingredients) {
  if (isBaked) return "Already Baked";

  const ingredientsObj = {};
  let found = false;

  this.ingredients.forEach(function (element) {
    ingredientsObj[element] = true;
  });

  ingredients.forEach(function (element) {
    if (ingredientsObj[element]) {
      found = true;
    }
    return found;
  });
};

const addTopping = function (topping) {
  if (!isBaked) return "Please bake the pie first";

  return (this.name += " with " + topping);
};

const stopBaking = function () {
  clearInterval(this.timer);
  if (this.bakeDuration - this.bakeTime > 10) {
    this.bakeTime = 0;
    this.name = "Undercooked " + this.name;
    console.log(this.name);
  } else {
    this.bakeTime = 0;
    this.name = "Baked  " + this.name;
    console.log(this.name);
  }
};

const applePie = makePie("Apple Pie", ["Apples", "Sugar", "Cinnamon"], 4);