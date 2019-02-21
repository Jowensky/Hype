import axios from "axios";

export default {
  // Gets all books
  scrape: function() {
    return axios.get(`https://www.off---white.com/en/US/men/t/seasons/ss2019`);
  }
};

app.get("/scrape", function(req, res) {
  axios
    .get("https://www.off---white.com/en/US/men/t/seasons/ss2019")
    .then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);

      // Now, we grab every h2 within an article tag, and do the following:
      $("article").each(function(i, element) {
        // Save an empty result object
        var result = {};

        // Add the text and href of every link, and save them as properties of the result object
        result.link = $(this)
          .children("a")
          .attr("href");
        result.image = $(this)
          .children("a")
          .children("figure")
          .children("img")
          .attr("src");
        result.name = $(this)
          .children("a")
          .children("figure")
          .children("figcaption")
          .children(".brand-name")
          .text();
        result.category = $(this)
          .children("a")
          .children("figure")
          .children("figcaption")
          .children(".category-and-season")
          .children(".category")
          .text();
        result.price = $(this)
          .children("a")
          .children("figure")
          .children("figcaption")
          .children(".price")
          .children("span")
          .children("strong")
          .text();

        db.Article.create(result)
          .then(function() {
          })
          .catch(function(err) {
            return res.json(err);
          });
      });
    });
  res.redirect("/");
});

module.exports = app;
