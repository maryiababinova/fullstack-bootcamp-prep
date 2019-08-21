function getRow(puzzle, idx) {
  return puzzle[idx];
}

function getColumn(puzzle, idx) {
  let column = [];
  for (let i = 0; i < puzzle.length; i++) {
    column.push(puzzle[i][idx]);
  }
  return column;
}

function getSection(puzzle, x, y) {
  let section = [];
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      section.push(puzzle[i][j]);
    }
  }
  return section;
}

function includes1to9(array) {
  for (let i = 1; i <= array.length; i++) {
    if (!array.includes(i)) {
      return false;
    }
  }
  return true;
}

function sudokuChecker(puzzle) {
  for (let i = 0; i < puzzle.length; i++) {
    let row = getRow(puzzle, i);
    if (!includes1to9(row)) {
      return false;
    }
  }
  for (let i = 0; i < puzzle.length; i++) {
    let column = getColumn(puzzle, i);
    if (!includes1to9(column)) {
      return false;
    }
  }
  for (let i = 0; i < puzzle.length; i += 3) {
    for (let j = 0; j < puzzle.length; j += 3) {
      let section = getSection(puzzle, i, j);
      console.log(section);
      if (!includes1to9(section)) {
        return false;
      }
    }
  }
  return true;
}
