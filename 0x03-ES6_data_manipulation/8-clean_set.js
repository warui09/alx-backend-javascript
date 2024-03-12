export default function cleanSet(set, startString) {
  const result = [];

  if (!startString) {
    return result.join('');
  }

  for (const elem of set) {
    if (elem.startsWith(startString)) {
      result.push(elem.substring(startString.length));
    }
  }

  return result.join('-');
}
