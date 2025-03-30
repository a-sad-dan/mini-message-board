class Message {
  constructor(text, user) {
    this.text = text;
    this.user = user;
    this.added = new Date();
  }
}

const messages = [
  {
    text: "I will go to Ireland",
    user: "Monish Obaid",
    added: new Date()
  },
  {
    text: "Muslim Commune is coming soon!",
    user: "Danish",
    added: new Date()
  }
]

module.exports = messages;