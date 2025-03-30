class Message {
  constructor(text, user) {
    this.text = text;
    this.user = user;
    this.date = new Date();
  }
}

const messages = [
  {
    text: "Hi There",
    user: "Amando",
    added: new Date()
  }
]

module.exports = messages;