export default function divideFunction(numerator, denominator) {
  if (denominator && typeof (denominator) === 'number') return numerator / denominator;
  throw new Error('cannot divide by 0');
}
