module.exports = (durationSeconds) => {
  return new Promise(resolve => setTimeout(resolve, durationSeconds * 1000 ));
}
