const start = new Date();

setInterval(() => {
  const now = new Date();
  console.log(
    "始まってからの秒数: " + (now.getTime() - start.getTime()) / 1000
  );
}, 1000);
