function printLocalTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
// Print out the local time every second
setInterval(printLocalTime, 1000);