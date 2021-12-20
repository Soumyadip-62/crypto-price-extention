fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h%2C1h"
)
  .then((data) => data.json())
  .then((crypto) => {
    var cryptoName = "";
    var cclass = "";
    cryptoName += "<table>";
    cryptoName +=
      "<tr>" +
      "<th>" +
      "Rank" +
      "</th>" +
      "<th>" +
      "</th>" +
      "<th>" +
      "Name" +
      "</th>" +
      "<th>" +
      "Market Cap" +
      "</th>" +
      "<th>" +
      "24h" +
      "</th>" +
      "<th>" +
      "24h%" +
      "</th>" +
      "<th>" +
      "Price" +
      "</th>" +
      "</tr>";
    for (let i = 0; i < crypto.length; i++) {
      var plus = Math.sign(crypto[i].price_change_24h);
      if (plus == "+1") {
        cclass = "plus";
      } else {
        cclass = "minus";
      }
      console.log(cclass);
      cryptoName += "<tr>";
      cryptoName +=
        "<td>" +
        crypto[i].market_cap_rank +
        "</td>" +
        "<td>" +
        crypto[i].symbol.toUpperCase() +
        "</td>" +
        "<td class=" +
        "cname" +
        ">" +
        crypto[i].name +
        "</td>" +
        "<td class=" +
        "cap" +
        ">" +
        "₹" +
        crypto[i].market_cap.toLocaleString() +
        "</td>" +
        "<td class=" +
        cclass +
        ">" +
        crypto[i].price_change_24h.toLocaleString() +
        "</td>" +
        "<td class=" +
        cclass +
        ">" +
        crypto[i].price_change_percentage_24h +
        "</td>" +
        "<td>" +
        "₹" +
        crypto[i].current_price.toLocaleString() +
        "</td>";
      cryptoName += "</tr>";
    }
    cryptoName += "</table>";

    document.getElementById("price").innerHTML = cryptoName;
  });
document.getElementById("search").onclick = function () {
  var coin = document.getElementById("coin").value;
  search(coin);
};
