module.exports = function (mongoose) {
  return {
    Mail: require('./Mail')(mongoose)
  }
}
