function indexOfIgnoreCase(s1, s2) {
  // write your code here
	function indexOfIgnoreCase(str, subStr) {
    // If subStr is empty, return 0 (same behavior as normal indexOf)
    if (subStr.length === 0) return 0;

    // Convert both strings to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSub = subStr.toLowerCase();

    // Use indexOf to find the substring
    return lowerStr.indexOf(lowerSub);
}

