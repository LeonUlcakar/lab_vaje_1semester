'use strict';

function get_num_dividers(x) {
    var num_of_dividers = 0;
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) {
            num_of_dividers++;
        }
    }
    return num_of_dividers;
}

function divider(x) {
    var results = [];
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) {
            results.push(i);
        }
    }
    console.log(results.toString());
    if (results.length == 1) {
        console.log("Number is prime.");
    }
    else {
        console.log("Number isn't prime");
    }
}


function dividers2(array) {
    let results = [];
    let between = [];
    let num_divisions;
    for (let i in array) {
        num_divisions = get_num_dividers(array[i]); 
        between.push({num: array[i],num_of_divisions: num_divisions });
    }
    results = between.sort(({ num_of_divisions: a }, { num_of_divisions: b }) => b - a)
    console.log(results);
}

function get_modes(array) {
    var frequency = []; 
    var max_frequency = 0; 
    var modes = [];

    for (var i in array) {
        frequency[array[i]] = (frequency[array[i]] || 0) + 1; 

        if (frequency[array[i]] > max_frequency) { 
            max_frequency = frequency[array[i]]; 
        }
    }

    for (var j in frequency) {
        if (frequency[j] == max_frequency) {
            modes.push(j);
        }
    }

    return modes;
}

//console.log(get_modes([1,1,1,3,3,4,5,5,5,6,6,6,7,7,9]));

//divider(n);
dividers2([12,15, 16, 18, 20,112]);



