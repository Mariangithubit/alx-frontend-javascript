/* eslint-disable no-plusplus */
export default function createIteratorObject(report) {
  return {
    ...report,
    [Symbol.iterator]: () => ({
      aE: [...report.allEmployees.engineering, ...report.allEmployees.design],
      current: 0,
      last: report.allEmployees.engineering.length + report.allEmployees.design.length,
      next() {
        if (this.current < this.last) {
          return { done: false, value: this.aE[this.current++] };
        }
        return { done: true, value: undefined };
      },
    }),
  };
}
