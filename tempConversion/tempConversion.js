const ftoc = function(temp) {
  celsius = ((temp -32) * (5/9));
  if (celsius % 1 != 0) {
    celsius = (Math.round(celsius * 10) / 10).toFixed(1);
  }
  return Number(celsius);
}

const ctof = function(temp) {
  far = ((temp * (9/5)) + 32);
  if (far % 1 != 0) {
    far = (Math.round(far * 10) / 10).toFixed(1);
  }
  return Number(far);
}

module.exports = {
  ftoc,
  ctof
}
