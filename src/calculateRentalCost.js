/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40; // dolars$
  const longTerm = 7; // days
  const longTermDiscount = 50; // dolars$
  const shortTerm = 3; // days
  const shortTermDiscount = 20; // dolars$
  let total = days * pricePerDay;

  switch (true) {
    case days >= longTerm:
      total -= longTermDiscount;

      return total;

    case days >= shortTerm:
      total -= shortTermDiscount;

      return total;

    default:
      return total;
  }
}

module.exports = calculateRentalCost;
