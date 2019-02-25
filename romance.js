function parseText(text) {
  let formatted = '';
  let punctuation = `,.;:"!?()-'`;
  for (let i=0; i<text.length; i++) {
    if (punctuation.includes(text[i])){
      continue;
      }
    formatted += text[i];
  }
  return formatted.toLowerCase().split(' ');
}


function generateWordPairs(corpus){
  let pairs = {};
  for (let i=0; i<corpus.length; i++){
    let key = corpus[i];
    if (!(key in pairs)){
    pairs[key] = [corpus[i+1]];
    } else {
      //Markov chain that goes 2 elements deep
      pairs[key].push(corpus[i+1], corpus[i+2])
    }
  }
  return pairs;
}


function random(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }


function writeLine(wordPairs, wordCount){
  let line = '';
  let count = 0;
  let arrayKeys = Object.keys(wordPairs);
  while (count < wordCount){
    if (!count){
      // randomly select a key from wordPairs
      word = arrayKeys[random(arrayKeys.length)];
    } else {
      // using the prior val as key, randomly select from its vals.
      word = wordPairs[word][random(wordPairs[word].length)];
    }
    if (word === undefined){
      word = arrayKeys[random(arrayKeys.length)];
      continue;
    } else {
      line += `${word} `;
      count++;
    }
  }
  return line;
}


function generatePoem(text, wordCount, lineCount) {
  let poem = ''
  let corpus = parseText(text);
  let wordPairs = generateWordPairs(corpus);
  let count = 0;
  while (count < lineCount) {
    let line = writeLine(wordPairs, wordCount);
    poem += `${line}\n `;
    count ++
  }
  return poem;
}
