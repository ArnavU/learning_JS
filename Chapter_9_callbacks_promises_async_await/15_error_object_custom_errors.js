try {
    arnav
}
catch(error) {
    console.log(error.name);
    console.log(error.message);
}

// custome errors
try {
    arnav
    throw new ReferenceError("Arnav is not good")
}
catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack)
}