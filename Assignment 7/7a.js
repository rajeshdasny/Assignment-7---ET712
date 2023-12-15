var initialArray = [];

var value = 2;
for (var i = 0; i < 6; i++) {
    initialArray.push(value);
    value *= 4;
}

console.log("Initial Array:", initialArray);

var newArray = [];
for (var i = initialArray.length - 2; i >= 1; i -= 1) {
    newArray.push(initialArray[i]);
}

console.log("New Array:", newArray);