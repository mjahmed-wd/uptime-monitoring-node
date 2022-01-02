const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, { message: "The requested URL was not found" });
};

module.exports = handler;
