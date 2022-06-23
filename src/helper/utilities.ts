const checkIfSpacesAround = (value: string) => {
  console.log("in here", value);
  return value[0] === " " || value[value.length - 1] === " ";
};

const checkIfSymbols = (value: string) =>
  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

export { checkIfSpacesAround, checkIfSymbols };
