// @desc  Get all transactions
// @route GET /api/v1/transactions
// @access Public

exports.getTransactions = (req, res, next) => {
  res.send("GET All Transactions");
};

// @desc  Post transaction
// @route POST /api/v1/transactions
// @access Public

exports.addTransaction = (req, res, next) => {
  res.send("POST Transaction");
};

// @desc  Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public

exports.deleteTransactions = (req, res, next) => {
  res.send("DELETE Transaction");
};
