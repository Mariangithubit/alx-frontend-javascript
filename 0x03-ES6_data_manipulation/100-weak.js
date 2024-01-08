export const weakMap = new WeakMap();
export function queryAPI(endpointArg) {
  let numberOfQueries;
  if (weakMap.has(endpointArg)) {
    numberOfQueries = weakMap.get(endpointArg);
    numberOfQueries += 1;
    weakMap.set(endpointArg, numberOfQueries);
  } else {
    weakMap.set(endpointArg, 1);
  }
  if (numberOfQueries >= 5) throw new Error('Endpoint load is high');
}
