const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

let port = 6500;
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
