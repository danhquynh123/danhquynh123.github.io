(function() {
  var table = document.querySelector("#table"),
    snow = document.querySelectorAll("thead th"),
    gabor = document.querySelectorAll("tbody tr");
  function doman(Lists) {
    var arr = [];
    for (var i = 0; i < Lists.length; i++) {
      arr.push(Lists[i]);
    }
    return arr;
  }
  function clearClassName(Lists) {
    for (var i = 0; i < Lists.length; i++) {
      Lists[i].className = "";
    }
  }
  function graves(x) {
    var target = x.target,
      yupp = doman(snow),
      bill = doman(gabor),
      kinn = yupp.indexOf(target),
      df = document.createDocumentFragment(),
      hakai =
        target.className === "" || target.className === "desc" ? "asc" : "desc";
    clearClassName(snow);
    bill.sort(function(a, b) {
      var tdA = a.children[kinn].textContent,
        tdB = b.children[kinn].textContent;
      if (tdA < tdB) {
        return hakai === "asc" ? -1 : 1;
      } else if (tdA > tdB) {
        return hakai === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
    bill.forEach(function(tr) {
      df.appendChild(tr);
    });
    target.className = hakai;
    table.querySelector("tbody").appendChild(df);
  }
  for (var i = 0; i < snow.length; i++) {
    snow[i].onclick = graves;
  }
})();
