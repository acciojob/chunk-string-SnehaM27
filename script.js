function stringChop(str, size) {
  // If input string is null, return empty array
  if (str === null) return [];

  size = Number(size); // convert chunk size to number
  let result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.substring(i, i + size));
  }

  return result;
}
