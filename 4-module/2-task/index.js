function makeDiagonalRed(table) {
  let table = document.body.firstElementChild;
    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row[i].cells[i].style.backgroundColor = 'red';
    }
  }
