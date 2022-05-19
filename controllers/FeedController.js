const FeedModel = require("../models/FeedModel");

class FeedController {
  static getFeed = async (req, res) => {
    const feed = await FeedModel.getFeedFromDB();
    return res.status(200).json(feed);
  };
  static getLikes = async (req, res) => {
    const likes = await FeedModel.getLikesFromDB();
    return res.status(200).json(likes);
  };
}

module.exports = FeedController;
