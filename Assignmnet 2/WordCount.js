function countWords(text) {
  return text
     .split(/\s+/)
     .filter(function(num) { return num != '' })
     .length;
}
