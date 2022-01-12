const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// app.post('/booklog', (req, res) => {
//   booklog = req.body;

//   if (!(booklog.name && booklog.text)) {
//     return res.json({
//       "ok": false,
//       "error": "invalid parameter"
//     })
//   }
//   res.json({
//     "ok": true,
//     "booklog": booklog
//   })
// })

app.get("/janken", (req, res) => {
  const hand = req.body.hand;
  res.json({
    "ok": true,
    "hand": hand
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})