class Message {
  constructor(text, user) {
    this.text = text;
    this.user = user;
    this.added = new Date();
  }
}

const messages = [
  {
    text: "Hi There",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Muslim Commune is coming soon!",
    user: "Danish",
    added: new Date()
  }
]

module.exports = messages;