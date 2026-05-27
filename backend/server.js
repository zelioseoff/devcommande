const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const orderRoutes = require('./routes/orders');

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', orderRoutes);

app.get('/', (req, res) => {
  res.send('ForgeBot Backend est en ligne ! 🚀');
});

app.listen(PORT, () => {
  console.log(`✅ Serveur ForgeBot démarré sur http://localhost:${PORT}`);
});