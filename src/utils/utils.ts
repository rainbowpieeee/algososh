import { DELAY_IN_MS } from "../constants/delays";
import { ISimbol } from "../pages/string/string";
import { ElementStates } from "../types/element-states";

export const setDelay = (delay: number = DELAY_IN_MS): Promise<null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, delay);
  });
};

export const swapArrElements = (
  arr: ISimbol[],
  firstIndex: number,
  secondIndex: number
): void => {
  [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
};

export const getFibanacciArr = (n: number): number[] => {
  let resultArr: number[] = [0, 1];
  for (let i = 2; i <= n + 1; i++) {
    resultArr.push(resultArr[i - 2] + resultArr[i - 1]);
  }
  return resultArr.slice(1);
};

export const getRandomArr = (
  minArrLength: number,
  maxArrLength: number,
  maxArrElement: number
) => {
  let randomArr = [];
  const length = Math.floor(
    Math.random() * (maxArrLength - minArrLength) + minArrLength
  );
  for (let i = 0; i <= length; i++) {
    randomArr.push({
      number: Math.floor(Math.random() * (maxArrElement + 1)),
      state: ElementStates.Default,
    });
  }
  return randomArr;
};