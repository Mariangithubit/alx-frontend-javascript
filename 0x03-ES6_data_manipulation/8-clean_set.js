/**
 * Create a function named cleanSet that returns a string of
 *    all the set values that start with a specific string (startString).
 * @set: (Set)
 * @startString: (String).
 * Return: String
 */

export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
	  return '';
  }
  return Array.from(set)
    .filter((element) => element && element.startsWith(startString))
    .map((element) => element.replace(startString, ''))
    .join('-');
}
