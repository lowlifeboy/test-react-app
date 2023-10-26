export function bubbleSortByProperty<T>(arr: T[], key: string): T[] {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      // @ts-ignore
      if (parseInt(arr[i][key], 10) > parseInt(arr[i + 1][key], 10)) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
