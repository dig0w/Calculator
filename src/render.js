let expression = "0";
let result = 0;
let units = "deg";

function updateExpression() {
    document.getElementById("expression").innerHTML = expression.replaceAll("/", "÷").replaceAll("**", "^").replaceAll("*", "×").replaceAll("Math.PI", "π").replaceAll("Math.E", "e").replaceAll("Math.sqrt", "√").replaceAll("Math.sin", "sin").replaceAll("Math.cos", "cos").replaceAll("Math.tan", "tan").replaceAll("Math.asin", "sin⁻¹").replaceAll("Math.acos", "cos⁻¹").replaceAll("Math.atan", "tan⁻¹").replaceAll("Math.log10", "log").replaceAll("Math.log", "ln");

    if (expression.includes("!")) {
        var indices = [];
        for (var i = 0; i < expression.length; i++) {
            if (expression[i] === "!") indices.push(i);
        };
    };

    result = eval(expression);
    document.getElementById("result").innerHTML = "= " + result;
};

// Numbers
function addNumber(number) {
    switch (expression.slice(-1)) {
        case "0":
            if (expression == "0") {
                expression = "" + number;
            } else {
                expression = expression + number;
            };
        break;
        case ")": case "I": case "E":
            if (number !== ")") {
                expression = expression + "*" + number;
            } else {
                if (expression == "0") {
                    expression = "" + number;
                } else {
                    expression = expression + number;
                };
            };
        break;
    
        default:
            if (expression == "0") {
                expression = "" + number;
            } else {
                expression = expression + number;
            };
        break;
    };

    updateExpression();
};
function addDot() {
    if (!expression.includes(".")) {
        expression = expression + ".";
    };

    updateExpression();
};

// Operations
function equal() {
    document.getElementById("expression").classList.replace("main", "sub");
    document.getElementById("result").classList.replace("sub", "main");

    updateExpression();
};
function addOperator(op) {
    if (expression.slice(-1) == "+" || expression.slice(-1) == "-" || expression.slice(-1) == "*" || expression.slice(-1) == "/") {
        if (expression.slice(-1) !== op) {
            expression = expression.slice(0, -1) + op;
        };
    } else {
        expression = expression + op;
    };

    updateExpression();
};
function addOperator2(op) {
    switch (expression.slice(-1)) {
        case "0":
            if (expression == "0") {
                expression = "" + op;
            } else {
                expression = expression + "*" + op;
            };
        break;
        case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case ")": case "I": case "E":
            expression = expression + "*" + op;
        break;
    
        default:
            if (expression == "0") {
                expression = "" + op;
            } else {
                expression = expression + op;
            };
        break;
    };

    updateExpression();
};
function addOperator3(op) {
    expression = expression + op;

    updateExpression();
};

// Clears
function clearAll() {
    expression = "0";

    document.getElementById("expression").classList.replace("sub", "main");
    document.getElementById("result").classList.replace("main", "sub");

    updateExpression();
};
function clearLast() {
    switch (document.getElementById("expression").innerHTML.slice(-1)) {
        case "π":
            if (expression.slice(0, -7) == "") {
                expression = "0";
            } else {
                expression = expression.slice(0, -7);
            };
        break;
        case "e":
            if (expression.slice(0, -6) == "") {
                expression = "0";
            } else {
                expression = expression.slice(0, -6);
            };
        break;
        case "^":
            if (expression.slice(0, -2) == "") {
                expression = "0";
            } else {
                expression = expression.slice(0, -2);
            };
        break;
        case "(":
            if (document.getElementById("expression").innerHTML.slice(-2) == "√(") {
                if (expression.slice(0, -10) == "") {
                    expression = "0";
                } else {
                    expression = expression.slice(0, -10);
                };
            } else if (document.getElementById("expression").innerHTML.slice(-4) == "sin(" || document.getElementById("expression").innerHTML.slice(-4) == "cos(" || document.getElementById("expression").innerHTML.slice(-4) == "tan(") {
                if (expression.slice(0, -9) == "") {
                    expression = "0";
                } else {
                    expression = expression.slice(0, -9);
                };
            } else if (document.getElementById("expression").innerHTML.slice(-6) == "sin⁻¹(" || document.getElementById("expression").innerHTML.slice(-6) == "cos⁻¹(" || document.getElementById("expression").innerHTML.slice(-6) == "tan⁻¹(") {
                if (expression.slice(0, -10) == "") {
                    expression = "0";
                } else {
                    expression = expression.slice(0, -10);
                };
            } else if (document.getElementById("expression").innerHTML.slice(-4) == "log(") {
                if (expression.slice(0, -10) == "") {
                    expression = "0";
                } else {
                    expression = expression.slice(0, -10);
                };
            } else if (document.getElementById("expression").innerHTML.slice(-3) == "ln(") {
                if (expression.slice(0, -8) == "") {
                    expression = "0";
                } else {
                    expression = expression.slice(0, -8);
                };
            } else {
                if (expression.slice(0, -1) == "") {
                    expression = "0";
                } else {
                    expression = expression.slice(0, -1);
                };
            };
        break;

        default:
            if (expression.slice(0, -1) == "") {
                expression = "0";
            } else {
                expression = expression.slice(0, -1);
            };
        break;
    };

    updateExpression();
};

const indexes1 = [0,1,3,5,7,9,10,11,12,13,14,19,24,29,35];
function toggleMore() {
    document.getElementById("btns").classList.toggle("grid4x5");
    document.getElementById("btns").classList.toggle("grid5x7");

    for (let i = 0; i < indexes1.length; i++) {
        document.getElementById("btns").children[indexes1[i]].classList.toggle("hidden");
    };
};

const indexes2 = [3,4,5,6,7,8];
function toggle2nd() {
    for (let i = 0; i < indexes2.length; i++) {
        document.getElementById("btns").children[indexes2[i]].classList.toggle("hidden");
    };

    document.getElementById("btns").children[1].classList.remove("hidden");
    document.getElementById("btns").children[2].classList.add("hidden");

    document.getElementById("btns").children[1].children[0].disabled = !document.getElementById("btns").children[1].children[0].disabled;
    document.getElementById("btns").children[1].children[0].classList.toggle("disabled");

    units = "deg";
};

function degRad() {
    document.getElementById("btns").children[1].classList.toggle("hidden");
    document.getElementById("btns").children[2].classList.toggle("hidden");

    document.getElementById("btns").children[0].children[0].classList.toggle("disabled");
    document.getElementById("btns").children[0].children[0].disabled = !document.getElementById("btns").children[0].children[0].disabled;

    if (units == "deg") {
        units = "rad";
    } else {
        units = "deg";
    };
};