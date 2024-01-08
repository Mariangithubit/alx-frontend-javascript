export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) throw new TypeError('first argument must be a Set');
  if (!(array instanceof Array)) throw new TypeError('Second argument must be an Array');
  for (const element of array) if (!set.has(element)) return false;
  return true;
}
