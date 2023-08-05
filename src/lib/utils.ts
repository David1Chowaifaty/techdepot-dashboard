import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function containsLowercase(str: string) {
  const pattern = /[a-z]/;
  return pattern.test(str);
}
export function containsNumber(str: string) {
  const pattern = /\d/;
  return pattern.test(str);
}
export function containsSpecialCharacter(str: string) {
  const pattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~`|\\\-=/]/;
  return pattern.test(str);
}
export function containsUppercase(str: string) {
  const pattern = /[A-Z]/;
  return pattern.test(str);
}
export function Capitalize(str: string) {
  return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
}
