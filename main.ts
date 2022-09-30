const startTime = new Date();

console.log("開始時刻: " + start);

setInterval(() => {
  const now = new Date();
  console.log((now.getTime() - startTime.getTime()) / 1000 + "秒");
}, 1000);
