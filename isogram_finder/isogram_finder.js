const IsogramFinder = function (word) {
    this.word = word;

}

IsogramFinder.prototype.isIsogram = function () {
    let lowerCase = this.word.toLowerCase()
    let letterArray = lowerCase.split('')
    
    if (letterArray.some((letter, index) => letterArray.indexOf(letter) !== index)) {
        return false
    } else {
        return true
    }
}

module.exports = IsogramFinder;
