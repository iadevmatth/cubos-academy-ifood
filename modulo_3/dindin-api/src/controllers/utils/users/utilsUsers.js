const validField = (req, res, fields) => {
  const errors = [];

  for (const field in fields) {
    if (!req.body[field]) {
      errors.push(`The field '${field}' must be mandatory.`);
    };
  };

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Invalid Fields', errors });
  };

};

const validEmail = (req, res, fields) => {
  const foundEmail = [];

  for (const fieldEmail in fields) {
    if (req.body[email]) {
      console.log(fieldEmail)
    }
  }
}

module.exports = { validField }