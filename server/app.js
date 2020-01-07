const express = require("express");
const app = express();
const port = 3000;

var tmdb = require("tmdbv3").init(require("./env").tmdb);

app.get("/search/:searchValue", (req, routeRes) => {
  let searchValue = req.params.searchValue;
  tmdb.search.movie(searchValue, function(err, res) {
    routeRes.send(res.results);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
