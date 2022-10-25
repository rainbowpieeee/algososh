import { DELAY_IN_MS } from "../constants/delays";
import { IColumn } from "../pages/sorting/sorting";
import { ICircleElement } from "../types/types";
import { ElementStates } from "../types/element-states";

export const setDelay = (delay: number = DELAY_IN_MS): Promise<null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, delay);
  });
};

export const swapArrElements = (
  arr: ICircleElement[] | IColumn[],
  firstIndex: number,
  secondIndex: number
): void => {
  [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
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

export const getRandomNumber = () => Math.floor(Math.random() * 1000);

export const getRandomChar = () => {
  const charString = "abcdefghigklmnopqrstuvwxyz0123456789";
  const randomIndex = Math.floor(Math.random() * charString.length);
  const char = charString[randomIndex];
  return char;
};