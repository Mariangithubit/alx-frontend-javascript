export default function cleanSet(set, startString) {
  /* Create a function named cleanSet that returns a string of
  all the set values that start with a specific string (startString).

  It accepts two arguments: a set (Set) and a startString (String).

  When a value starts with startString you only append the rest of the string.
  The string contains all the values of the set separated by - */

  if (!(set instanceof Set)) return '';
  if (!startString || typeof startString !== 'string') return '';
  let str = '';
  let first = 0;
  for (const element of set) {
    if (element.localeCompare(startString) !== 0
      && element.startsWith(startString)) {
      if (!first) {
        first = 1;
      } else {
        str += '-';
      }
      str += element.slice(startString.length);
    }
  }
  return str;
}
