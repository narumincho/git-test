const start = new Date();

console.log("開始時刻: " + start);

setInterval(() => {
  const now = new Date();
  console.log((now.getTime() - start.getTime()) / 1000 + "秒");
}, 1000);
