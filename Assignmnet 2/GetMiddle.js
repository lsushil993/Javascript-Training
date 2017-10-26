function getMiddle(text) {
  return text.length % 2 ? text.substr(text.length / 2, 1) : text.substr((text.length / 2) - 1, 2);
}
