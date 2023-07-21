function cetakTabelPerkalian(number: number): void {
    const maxDigits = (number * number).toString().length + 1;
  
    for (let i = 1; i <= number; i++) {
      let row = '';
      for (let j = 1; j <= number; j++) {
        const product = (i * j).toString();
        row += product.padStart(maxDigits, ' ') + ' ';
      }
      console.log(row.trim());
    }
  }
  
  cetakTabelPerkalian(9);
  