// console-trace.js

function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.trace("Trace here");
}

first();