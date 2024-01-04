export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  let i = 0;
  for (const element of array) {
    newArray[i] = appendString + element;
    i += 1;
  }

  return newArray;
}
