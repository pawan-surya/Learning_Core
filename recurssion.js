function monthlyBudget(date, duration) {
  if (duration == 0) {
    return [];
  }
  const pm = monthlyBudget(date, duration - 1);
  const cm = moment(date)
    .add(duration - 1)
    .startOf("month")
    .format("YYYY-MM");
  return [...pm, cm];
}
const monthOrder = monthlyBudget("2024-01-01", 1);
console.log(monthOrder);
