/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = days * 40;

  switch (true) {
    case days >= 7:
      total -= 50;

      return total;

    case days >= 3:
      total -= 20;

      return total;

    default:
      return total;
  }
}

module.exports = calculateRentalCost;
