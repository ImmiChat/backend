/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").insert([
    {
      id: 1,
      user_id: 1,
      body: "Looking for a roommate in Crown Heights Brooklyn. It's a nice area and very spacious at a good price.",
      topic: "Housing",
    },
    {
      id: 2,
      user_id: 2,
      body: "I have a lot of free first aid kits that I am giving away! Message me if you are interested.",
      topic: "Healthcare",
    },
    {
      id: 3,
      user_id: 3,
      body: "I came to NYC a couple of years ago and started working at FakeTechCompany recently. FakeTechCompany are looking to hire more engineers and are sponsoring VISA's. Message me if you're interested!!!",
      topic: "Jobs",
    },
    {
      id: 4,
      user_id: 2,
      body: "I am living in Sunset Park Brooklyn and I am loving it. Rent is cheap, amazing food and very nice people in the community. If you are looking for places to rent, look around Sunset Park.",
      topic: "Housing",
    },
    {
      id: 5,
      user_id: 3,
      body: "Covid cases are spiking up again! I know that there are many free covid test mobiles around Crown Heights Brooklyn. Please wear a mask and stay safe!",
      topic: "Healthcare",
    },
    {
      id: 6,
      user_id: 1,
      body: "I am looking for a job referral in consulting. Any help would be appreciated.",
      topic: "Jobs",
    },
  ]);
};
