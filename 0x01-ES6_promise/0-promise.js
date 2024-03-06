export default function getResponseFromAPI() {
  return new Promise(function(resolve, reject) {
    if (true) {
      resolve("It worked");
    } else {
      reject(Error("Maybe next time"));
    }
  });
};
