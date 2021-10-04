// TP 20

function rotateArray(arr, numberOfRotations, direction) {
  const arrayToRotate = [...arr];

  for (let i = 1; i <= numberOfRotations; i++) {
    if (direction === "right") {
      const popedValue = arrayToRotate.pop();

      arrayToRotate.unshift(popedValue);
    } else {
      const popedValue = arrayToRotate.shift();

      arrayToRotate.push(popedValue);
    }
  }

  return arrayToRotate;
}
