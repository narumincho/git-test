const start = new Date();

setInterval(() => {
  const now = new Date();
  console.log((now.getTime() - start.getTime()) / 1000);
}, 1000);
