const express = require('express'),
      app = express();

let port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Your app is running on PORT ${ port }.`);
});
