export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let started = 0;
  for (const name of reportWithIterator) {
    if (!started) {
      started = 1;
    } else {
      str += ' | ';
    }
    str += name;
  }
  return str;
}
