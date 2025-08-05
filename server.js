const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const internData = {
  name: "Riddhi Khilnani",
  referralCode: "riddhi2025",
  donationsRaised: 4250,
  leaderboard: [
    { name: "Riddhi", donations: 4250 },
    { name: "Amit", donations: 3900 },
    { name: "Neha", donations: 3500 }
  ]
};

app.get('/api/intern', (req, res) => {
  res.json({
    name: internData.name,
    referralCode: internData.referralCode,
    donationsRaised: internData.donationsRaised
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json(internData.leaderboard);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
