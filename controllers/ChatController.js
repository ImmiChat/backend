const ChatModel = require("../models/ChatModel");

class ChatController {
  static getChat = async (req, res) => {
    const { senderId, receiverId } = req.params;
    if (!senderId || !receiverId) return;
    try {
      const chatArray = await ChatModel.getChatFromDB(senderId, receiverId);
    return res.status(201).json(chatArray);
    } catch (err) {
      return res.status(404).json(err)
    }
  };
  static createChat = async (req, res) => {
    const { senderId, receiverId } = req.params;
    const message = req.body.message;
    try {
      const newChat = await ChatModel.createChatFromDB(
        senderId,
        receiverId,
        message
      );
      return res.status(201).json(newChat);
    } catch(err) {
      return res.status(404).json(err)
    }
    
  };
}

module.exports = ChatController;
