function indexOfIgnoreCase(s1, s2) {
  // write your code here
	function indexOfIgnoreCase(str: string, subStr: string): number {
  return str.toLowerCase().indexOf(subStr.toLowerCase());
}

	//console.log(indexOfIgnoreCase("Hello World", "world")); // 6
//console.log(indexOfIgnoreCase("apple", "Ple"));         // 2
//console.log(indexOfIgnoreCase("test", "aaa"));

	
}

// Please do not change the code below
const s1 = prompt(Hello World", "world);
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
