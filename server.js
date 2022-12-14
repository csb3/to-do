const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const app        = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
