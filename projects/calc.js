function addition() {

    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    if(isNaN(first) || isNaN(second)) {
        document.getElementById("output").innerHTML = `<h5>Please only enter numbers!</h5>`;
        return;
    }

    output = first + second;

    if(output < 0) {
        document.getElementById("output").innerHTML = `<h3 style="color: red;">${output}</h3>`;
    } else {
        document.getElementById("output").innerHTML = `<h3>${output}</h3>`;
    }
    


}

function subtract() {

    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    if(isNaN(first) || isNaN(second)) {
        document.getElementById("output").innerHTML = `<h5>Please only enter numbers!</h5>`;
        return;
    }

    output = first - second;

    if(output < 0) {
        document.getElementById("output").innerHTML = `<h3 style="color: red;">${output}</h3>`;
    } else {
        document.getElementById("output").innerHTML = `<h3>${output}</h3>`;
    }
    
}

function multiply() {

    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    if(isNaN(first) || isNaN(second)) {
        document.getElementById("output").innerHTML = `<h5>Please only enter numbers!</h5>`;
        return;
    }

    output = first * second;

    if(output < 0) {
        document.getElementById("output").innerHTML = `<h3 style="color: red;">${output}</h3>`;
    } else {
        document.getElementById("output").innerHTML = `<h3>${output}</h3>`;
    }
    
}

function divide() {

    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    if(isNaN(first) || isNaN(second)) {
        document.getElementById("output").innerHTML = `<h5>Please only enter numbers!</h5>`;
        return;
    }

    output = first / second;

    if(output < 0) {
        document.getElementById("output").innerHTML = `<h3 style="color: red;">${output}</h3>`;
    } else {
        document.getElementById("output").innerHTML = `<h3>${output}</h3>`;
    }
    
}

function power() {

    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    if(isNaN(first) || isNaN(second)) {
        document.getElementById("output").innerHTML = `<h5>Please only enter numbers!</h5>`;
        return;
    }

    let startNumber = 1;

    for(let i = 0; i < second; i++) {
        startNumber = first * startNumber;
    }

    if(startNumber < 0) {
        document.getElementById("output").innerHTML = `<h3 style="color: red;">${startNumber}</h3>`;
    } else {
        document.getElementById("output").innerHTML = `<h3>${startNumber}</h3>`;
    }
    
}

function clearInput() {

    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";

}