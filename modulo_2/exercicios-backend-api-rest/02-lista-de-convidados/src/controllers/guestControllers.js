let guests = require('../database/guestData');

const listGuest = (req, res) => {
  const { name } = req.query;
  // Result was defined as a filter
  let result = guests.filter((guest) => guest === name);

  if (result.length === 0) {
    return res.status(404).json({ message: 'Guest not found in the list.' })
  };

  return res.status(200).json({ message: 'Guest present.' });
};

module.exports = {
  listGuest
}