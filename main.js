var url = "https://api.coinlore.net/api/ticker/?id="
var allCoin = "https://api.coinlore.net/api/tickers/"
$(document).ready(function(){

    $.get(`${allCoin}`,function(res){
        function displayCoins (x){
            for (var i = 0; i < 100; i++) {
                var coinId = "";
                coinId += "<li>" + res.data[i].symbol + " " +  "<b>" + res.data[i].name + "</b>" + " " + "ID: " + res.data[i].id + "</li>"
                $(".allCoins").append(coinId);
            }

        }
        displayCoins();
    })

    $("form").submit(function(event){
        event.preventDefault();
        var coin = $(".coin").val();
        $.get(`${url}${coin}`,function(res){
            var coins = "";
            console.log(res);
            coins += "<h5>" + res[0].name + " " + "(" + res[0].symbol + ")" + "</h5>"
            coins += "<h2>" + "$ " + res[0].price_usd + "</h4>"
            coins += "<h5>" + "Change (1 hour)" + " " + res[0].percent_change_1h + "%" + "</h5>"
            coins += "<h5>" + "Change (24 hour)" + " " + res[0].percent_change_24h + "%" + "</h5>"
            coins += "<h5>" + "Change (7 day)" + " " + res[0].percent_change_7d + "%" + "</h5>"
            $(".info").html(coins);
        }, "json");
    })
})