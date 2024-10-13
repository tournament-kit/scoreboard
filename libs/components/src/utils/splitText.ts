
const isSplitChar = (char: string) => {
  return [" ", "-", "_", "(", ")", "[", "]", "{", "}"].includes(char);
}

const isLowerChar = (char: string) => {
  return getCharType(char) === 'letter' && char === char.toLowerCase();
}

const isUpperChar = (char: string) => {
  return getCharType(char) === 'letter' && char === char.toUpperCase();
}

const getCharType = (char: string) => {
  if (char.match(/[a-zA-Z]/i)) {
    return "letter";
  }
  if ('0123456789'.includes(char)) {
    return "number";
  }
  if (isSplitChar(char)) {
    return "split";
  }
  return "other";
}

export const splitText = (text: string, maxLength = 8) => {
  const parts = [];
  let part = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];
    part += char
    if (
      nextChar && isLowerChar(char) && isUpperChar(nextChar) ||
      nextChar && getCharType(char) !== getCharType(nextChar) ||
      nextChar && isSplitChar(char) ||
      part.length >= maxLength ||
      !nextChar
    ) {
      parts.push(part);
      part = "";
    }
  }
  return parts;
}
