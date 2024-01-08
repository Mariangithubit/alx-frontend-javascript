export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number'
    || typeof position !== 'number'
    || typeof value !== 'number') throw new TypeError('arguments must all be of type number');
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  if (position >= int8View.length) throw new Error('Position outside range');
  int8View[position] = value;
  return new DataView(buffer, 0);
}
