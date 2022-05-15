const FeedModel = require("../models/FeedModel");

class FeedController {
  static getFeed = async (req, res) => {
    const feed = await FeedModel.getFeedFromDB();
    return res.status(200).json(feed);
  };
}

module.exports = FeedController;
