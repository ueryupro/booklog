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
  let userHand = undefined;
  if (hand === "グー") {
    userHand = 0;
  } else if (hand === "チョキ") {
    userHand = 1;
  } else if (hand === "パー") {
    userHand = 2;
  } else {
    userHand = "グー、チョキ、パーのいずれかを入力してください";
  }

  const cpHand = Math.floor(Math.random() * 3);
  res.json({
    "ok": true,
    "your-hand": userHand,
    "cp-hand": cpHand
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})