'use strict'
let CHARTABLE = ['a', 'b', 'c', '?', 'd',
    'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'r', 's', 'š',
    't', 'u', 'v', 'z', 'ž', '_', 0];

let IMPORTANT_MESSAGE = [
    'v', 'n', 'p', 'b', 'm', 'e',
    'g', 'n', 'u', 'l', 'm', 'e',
    'f', 'b', 'p', 'u', 'k', 'z',
    'b', 'h', 'e', 'g', 'n', 'u',
    'l', 'k', 'z', 'b', '?', 'j',
    'e', 'h', 0];





//console.log(get_char_index('p'));

function get_char_index_encrypted(char) {
    for (var i in IMPORTANT_MESSAGE) {
        if (char == IMPORTANT_MESSAGE[i]) {
            return i;
        }

    }
}

function get_char_index_decrypted(num) {
    for (var i in CHARTABLE) {
        if (num == i) {
            return CHARTABLE[i];
        }
    }
}

function decrypt(array) {
    let between = [];
    let PLAIN_MESSAGE = [];
    for (var i in IMPORTANT_MESSAGE) {
        PLAIN_MESSAGE.push(get_char_index_decrypted(get_char_index_encrypted(IMPORTANT_MESSAGE[i])));
    }
    console.log(PLAIN_MESSAGE);
}


//decrypt(IMPORTANT_MESSAGE);
//console.log(get_char_index_decrypted(get_char_index_encrypted('p')));
console.log(get_char_index_decrypted(get_char_index_encrypted(IMPORTANT_MESSAGE[2])));
'use strict'