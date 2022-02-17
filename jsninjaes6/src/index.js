const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("PRONTO");
    }, 2000);
  });
};

console.log("Start");
myPromise().then(res => {
  console.log("Exec1", res);
});

async function otherPromise() {
  const res = await myPromise();
  console.log("Exec2", res);
}

otherPromise();

console.log("End");