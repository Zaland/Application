const checkIfEmpty = (value: string) => value.length === 0;

const checkIfSpacesAround = (value: string) =>
  value[0] === " " || value[value.length - 1] === " ";

const checkIfSymbols = (value: string) =>
  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

export { checkIfEmpty, checkIfSpacesAround, checkIfSymbols };
