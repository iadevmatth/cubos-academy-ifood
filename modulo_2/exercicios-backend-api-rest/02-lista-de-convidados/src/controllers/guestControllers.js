let guests = require('../database/guestData');

const listGuest = (req, res) => {
  const { name } = req.query;

  if (name) {
    // Result was defined as a filter
    const result = guests.filter((guest) => guest === name);

    if (result.length === 0) {
      return res.status(404).json({ message: 'Guest not found in the list.' })
    };

    return res.status(200).json({ message: 'Guest present.' });

  };

  return res.status(200).json(guests);
};

const addGuest = (req, res) => {
  const { name } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ message: 'The field is not filled.' });
  };

  const guestName = guests.find((guest) => {
    return guest === name;
  })

  if (guestName) {
    return res.status(409).json({ message: 'The guest alredy exist in the list. If you want add a guest with same name, pls digit last name too.' })
  };


  const guestAdd = {
    name
  };

  guests.push(guestAdd.name);

  return res.status(201).json({ message: 'Guest added' })

};

const delGuest = (req, res) => {
  const { name } = req.params;

  const guest = guests.indexOf(name);

  if (guest === -1) {
    return res.status(404).json({ message: 'The name of guest at be remove dont exist in the list, no guest has been removed.' })
  };

  guests.splice(guest, 1)

  return res.status(200).json({ message: 'Guest removed.' })

}

module.exports = {
  listGuest,
  addGuest,
  delGuest
}