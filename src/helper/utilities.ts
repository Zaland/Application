import { isPast, isToday } from "date-fns";

const checkIfSpacesAround = (value: string) =>
  value[0] === " " || value[value.length - 1] === " ";

const checkIfSymbols = (value: string) =>
  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

const checkIfPasswordValid = (value: string) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(value);

const checkIfDateValid = (value: Date) => !isToday(value) && isPast(value);

export {
  checkIfSpacesAround,
  checkIfSymbols,
  checkIfPasswordValid,
  checkIfDateValid,
};
