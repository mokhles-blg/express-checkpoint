const d = new Date();
const hours = d.getHours();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayName = days[d.getDay()];

function logger(req, res, next) {
  if (
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(
      dayName
    ) &&
    hours >= 9 &&
    hours <= 17
  ) {
    next();
  } else {
    res.send("site is closed");
  }
}

module.exports = logger;
