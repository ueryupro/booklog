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
  let yourHand;
  if (hand === "グー") {
    yourHand = 0;
  } else if (hand === "チョキ") {
    yourHand = 1;
  } else if (hand === "パー") {
    yourHand = 2;
  } else {
    yourHand = "グー、チョキ、パーのいずれかを入力してください";
  }

  const cpHand = Math.floor(Math.random() * 3);
  let cp;
  if (cpHand === 0) {
    cp = "グー";
  } else if (cpHand === 1) {
    cp = "チョキ";
  } else if (cpHand === 2) {
    cp = "パー";
  }

  let result;
  if ((yourHand === 0 && cpHand === 0) || (yourHand === 1 && cpHand === 1) || (yourHand === 2 && cpHand === 2)) {
    result = "あいこ";
  } else if ((yourHand === 0 && cpHand === 2) || (yourHand === 1 && cpHand === 0) || (yourHand === 2 && cpHand === 1)) {
    result = "あなたの負け";
  } else if ((yourHand === 0 && cpHand === 1) || (yourHand === 1 && cpHand === 2) || (yourHand === 2 && cpHand === 0)) {
    result = "あなたの勝ち";
  }
  res.json({
    "your-hand": hand,
    "cp-hand": cp,
    "result": result
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})