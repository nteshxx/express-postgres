const catchAsync = require('../utils/catchAsync');

const version = catchAsync(async (req, res) => {
  return res.status(200).json({version: '0.0.5'});
});

module.exports = {
  version,
};