module.exports = function (mongoose) {
  return mongoose.model('Mail', new mongoose.Schema({
    destination: String,
    subject: String,
    text: String,
    sent: {
      type: Boolean,
      default: false
    }
  }))
}
