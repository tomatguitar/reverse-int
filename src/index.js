module.exports = function reverse (n) {
  str = n.toString().split('');
  if(str[0] === "-") {
    str.shift();
  }
  return str.reverse().join('');
}