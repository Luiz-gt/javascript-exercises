const palindromes = function (stringRaw) {

    let string=stringRaw.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').toUpperCase();
    return(string===string.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
