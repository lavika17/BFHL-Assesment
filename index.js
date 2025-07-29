const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  const user_id = "lavika_singla_170317";
  const email = "lavikasingla1703@gmail.com";
  const roll_number = "2210990540";

  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let lettersForConcat = [];

  data.forEach(item => {
    if (/^\d+$/.test(item)) {
      const num = parseInt(item);
      sum += num;
      if (num % 2 === 0) even_numbers.push(item);
      else odd_numbers.push(item);
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      lettersForConcat.push(...item.split(''));
    } else {
      special_characters.push(item);
    }
  });

  // Create alternating caps string in reverse
  let reversed = lettersForConcat.reverse().join('');
  let concat_string = "";
  for (let i = 0; i < reversed.length; i++) {
    concat_string += i % 2 === 0
      ? reversed[i].toUpperCase()
      : reversed[i].toLowerCase();
  }

  res.status(200).json({
    is_success: true,
    user_id,
    email,
    roll_number,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
