const db = require("../db/db");

class ChatModel {
  static getChatFromDB(senderId, receiverId) {
    return db
      .select("")
      .from("chat")
      .where(
        db.raw(`
    (sender_id = ${senderId} and receiver_id = ${receiverId}) 
    or 
    (sender_id = ${receiverId} and receiver_id = ${senderId})
    `)
      );
  }
  static createChatFromDB(senderId, receiverId, message) {
    return db("chat")
      .insert({ sender_id: senderId, receiver_id: receiverId, message })
      .returning("*");
  }
}

module.exports = ChatModel;
