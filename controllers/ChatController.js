const ChatModel = require("../models/ChatModel");

class ChatController {
  static getChat = async (req, res) => {
    const { senderId, receiverId } = req.params;
    const chatArray = await ChatModel.getChatFromDB(senderId, receiverId);
    return res.status(201).json(chatArray);
  };
  static createChat = async (req, res) => {
    const { senderId, receiverId } = req.params;
    const message = req.body.message;
    const newChat = await ChatModel.createChatFromDB(
      senderId,
      receiverId,
      message
    );
    return res.status(201).json(newChat);
  };
}

module.exports = ChatController;
