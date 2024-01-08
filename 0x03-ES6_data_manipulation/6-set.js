export default function setFromArray(arr) {
  if (!(arr instanceof Array)) throw new TypeError('argument must be an Array');
  return new Set(arr);
}
