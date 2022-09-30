const startTime = new Date();

setInterval(() => {
  const now = new Date();
  console.log((now.getTime() - startTime.getTime()) / 1000 + "秒");
}, 1000);
