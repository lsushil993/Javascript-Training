function rentalCarCost(days) {
  return days * 40 - (days >= 7 ? 50 : (days >= 3 ? 20 : 0));
}