const AppError = require("../utils/AppError.js");

function CheckIfRatingIsValid(request, response, next) {
  const { rating } = request.body;

  if(rating < 1 || rating > 5) {
    throw new AppError("A nota dada para o filme precisa ser entre 1 e 5");
  }

  next();
}

module.exports = CheckIfRatingIsValid;