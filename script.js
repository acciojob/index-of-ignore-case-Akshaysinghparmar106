function indexOfIgnoreCase(s1, s2) {
  // write your code here
	function indexOfIgnoreCase(str, subStr) {
  const main = str.toLowerCase();
  const search = subStr.toLowerCase();

  for (let i = 0; i <= main.length - search.length; i++) {
    let match = true;

    for (let j = 0; j < search.length; j++) {
      if (main[i + j] !== search[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return i;
    }
  }

  return -1;
}
(indexOfIgnoreCase("test," "aaa"));
	
