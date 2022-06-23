module.exports = function reverse (number) {
    let Stringnumber = String(number); 
    let splittedNumber = Stringnumber.split("");
    let modifiedNumber = splittedNumber.reverse();
    let rawNumber = modifiedNumber.join("");
    let finalNumber = rawNumber.replace('-', '');
    return finalNumber;
}
