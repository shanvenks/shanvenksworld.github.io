$(document).ready(function () {
  $.getJSON("https://getthirukkural.appspot.com/api/2.0/kural/rnd?appid=uz03p4mkt4moz&format=json&jsoncallback=?", function(data) {
      $.each(data.KuralSet.Kural, function(i, Kural) {
          $('#load-kural').html("<p>Thirukural: #" + Kural.Number + "</p>" + "<h3>" + Kural.Line1 + "</h3>" + "<h3>" + Kural.Line2 + "</h3>");
      });
  });
});
