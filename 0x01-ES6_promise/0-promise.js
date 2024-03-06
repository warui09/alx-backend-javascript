export default function getResponseFromAPI() {
  return new Promise(((resolve, reject) => {
    if (true) {
      resolve('It worked');
    } else {
      reject(Error('Maybe next time'));
    }
  }));
}
