/**
 * Create a function named cleanSet that returns a string of
 *    all the set values that start with a specific string (startString).
 * @set: (Set)
 * @startString: (String).
 * Return: String
 */

export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) return '';
  if (!startString || typeof startString !== 'string') return '';
  let str = '';
  let first = true;

  for (const element of set) {
    if (element.startsWith(startString)) {
      if (!first) {
        str += '-';
      } else {
        first = false;
      }
      str += element.slice(startString.length);
    }
  }
  return str;
}
