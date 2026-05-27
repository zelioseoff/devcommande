const fs = require('fs');
const path = require('path');

const createOrder = async (req, res) => {
  try {
    const { type, description, budget, email, discord } = req.body;

    const order = {
      id: Date.now(),
      type,
      description,
      budget,
      email,
      discord,
      status: "En attente",
      date: new Date().toISOString()
    };

    const filePath = path.join(__dirname, '../data/orders.json');
    let orders = [];

    if (fs.existsSync(filePath)) {
      orders = JSON.parse(fs.readFileSync(filePath));
    }

    orders.push(order);
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

    res.status(201).json({ success: true, message: "Commande enregistrée !" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
};

module.exports = { createOrder };