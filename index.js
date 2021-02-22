module.exports = function is(value, type) {
  if (typeof type === "string") {
    return typeof value === type;
  }

  return value instanceof type;
};
