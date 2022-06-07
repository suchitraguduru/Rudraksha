const Reception = require("../models/reception");
const addReceptionGuest = async (req, res, next) => {
  try {
    const guest = new Reception({
      ...req.body,
      photo: req.file.buffer,
    });
    await guest.save();
    res.status(201).json({
      success: true,
      guest,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: error.message,
      message: "Some Error Occured Please try again later!",
    });
  }
};

module.exports = {
  addReceptionGuest,
};
