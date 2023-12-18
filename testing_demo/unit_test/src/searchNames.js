import * as services from "./services";

const searchNames = term => {
  const matches = services.getNames().filter(name => {
    return name.includes(term);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

const functionNotTested = term => {
  return `Hello ${term}`;
};

export const ConvertNameToLowerCase = name => {
  return name.toLowerCase();
};

export default searchNames;
