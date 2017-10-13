function rentalCarCost(days) {
  var totalCost = days * 40;
  return (days == 7 || days >7) ? (totalCost - 50) : (days == 3 || days > 3 && days <7) ? (totalCost - 20) : totalCost;
}