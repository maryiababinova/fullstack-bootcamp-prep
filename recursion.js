const countToTen = n => {
  if (n === 10) {
    console.log(n);
  } else {
    console.log(n);
    countToTen(n + 1);
  }
};

const backwardString = s => {
  if (s.length === 1 || !s.length) console.log(s);
  else {
    console.log(s[s.length - 1]);
    backwardString(s.slice(0, -1));
  }
};

const sumNums = n => {
  if (n === 0) return 0;
  return n + sumNums(n - 1);
};

const isPalindrome = s => {
  s = s.toLowerCase();
  if (s.length === 1) return true;
  if (s.length === 2) return s[0] === s[1];
  if (s[0] === s[s.length - 1]) return isPalindrome(s.slice(1, -1));
  return false;
};
