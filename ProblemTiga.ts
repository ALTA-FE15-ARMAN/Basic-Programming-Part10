function printDiamond(letter: string): void {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letterIndex = alphabet.indexOf(letter.toUpperCase());
  
    if (letterIndex === -1) {
      console.log('Invalid input. Please enter a letter from A to Z.');
      return;
    }
  
    const width = letterIndex * 2 + 1;
  
    for (let i = 0; i < letterIndex; i++) {
      const currentLetter = alphabet[i];
      const leftPadding = '.'.repeat(letterIndex - i);
      const middlePadding = i > 0 ? ' '.repeat(i * 2 - 1) : '';
      console.log(leftPadding + currentLetter + middlePadding + (i > 0 ? currentLetter : '') + leftPadding);
    }
  
    const middleLetter = alphabet[letterIndex];
    const middlePadding = '.'.repeat(width - 2);
    console.log(middleLetter + middlePadding + middleLetter);
  
    for (let i = letterIndex - 1; i >= 0; i--) {
      const currentLetter = alphabet[i];
      const leftPadding = '.'.repeat(letterIndex - i);
      const middlePadding = i > 0 ? ' '.repeat(i * 2 - 1) : '';
      console.log(leftPadding + currentLetter + middlePadding + (i > 0 ? currentLetter : '') + leftPadding);
    }
  }
  
  printDiamond('C');
  