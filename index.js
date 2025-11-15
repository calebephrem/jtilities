export function randomElementFromArray(arr) {
  if (arr == '' || arr == null || !Array.isArray(arr)) {
    console.error(`Error: ${arr} is not an array`);
    return;
  }

  const randomInteger = Math.floor(Math.random() * arr.length);
  return arr[randomInteger];
}

export function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function capitalize(str) {
  if (typeof str != 'string') {
    console.error(`Error: ${str} is not a string`);
  } else {
    str = str.trim();
    let firstLetter = str.slice(0, 1).toUpperCase(),
      otherLetters = str.slice(1).toLowerCase();
    const full = firstLetter + otherLetters;
    return full;
  }
}

export function ellipsify({ text, length }) {
  if (text.length <= length) {
    return text;
  } else {
    return text.slice(0, length) + '...';
  }
}

export function isObj(param) {
  return typeof param == 'object' && !Array.isArray(param) && param !== null;
}

export function shuffleArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    let randIndex = Math.floor(Math.random() * arr.length);
    let tempVal = arr[i];
    arr[i] = arr[randIndex];
    arr[randIndex] = tempVal;
  }

  return arr;
}

export function shuffleStr(str) {
  if (typeof str !== 'string') {
    console.error(`Error: ${str} is not a string`);
    return;
  }

  const arr = [...str];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

export function sortArr(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...sortArr(left), pivot, ...sortArr(right)];
}

export function unique(arr) {
  return [...new Set(arr)];
}

export function chunk(arr, size) {
  if (size <= 0) throw new Error('Size must be greater than 0');
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function flatten(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );
}

export function compact(arr) {
  return arr.filter(Boolean);
}

export function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter((item) => set2.has(item));
}

export function difference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter((item) => !set2.has(item));
}
