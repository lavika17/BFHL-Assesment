# BFHL-Assesment

#  BFHL Assessment API – Chitkara University

This project is a RESTful API built for the **BFHL (Bajaj Finserv Hiring League)** assessment round, designed using **Node.js** and hosted on **Render**.

---

##  Live API Endpoint

> **POST** `https://bfhl-assesment.onrender.com/bfhl`

This endpoint accepts an array of strings and returns a structured JSON response based on numeric, alphabetic, and special character classifications.

---

##  Sample Request

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
## Sample Response
{
  "is_success": true,
  "user_id": "lavika_singla_170317",
  "email": "lavikasingla1703@gmail.com",
  "roll_number": "2210990540",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}

Logic Highlights
Numbers are filtered into odd and even, returned as strings

Alphabets are converted to uppercase

Special characters are filtered separately

Returns a string of all alphabets reversed with alternating caps

Response includes: status, user ID, email, roll number, and detailed breakdown


