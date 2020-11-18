const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  const letterBank = []
  
  this.alphabet.forEach((letter) => {
    let phrase = this.phrase.toLowerCase()
    if (phrase.includes(letter)) {
      letterBank.push(letter)
    }
  })
  if (letterBank.length === 26) {
    return true
  } else {
    return false
  }
}

module.exports = PangramFinder;
