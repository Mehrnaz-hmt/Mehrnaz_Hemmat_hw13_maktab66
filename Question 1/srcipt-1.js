let tbody = $("table").children("tbody");
let table = tbody.length ? tbody : $("table");
let tr = $(tbody).children();
let td = $("#my-td");
let delBtn = $("#del-btn");
let myInput1 = $("#my-input-1");
let radioBox = $("td").children();


$(document).ready(function () {
  $(".add-row").click(function () {
    table.append(
      "<tr><td>" +
        delBtn +
        "</td><td>" +
        myInput1 +
        "</td><td>" +
        myInput1 +
        "</td>" +
        "<td>" +
        radioBox +
        "</td>" +
        "</tr>"
    );
  });
});

//when I click on Delete btn
$(document).ready(function() {
    $(".table").on("click", "#del-btn", function() {
        $(this).closest("tr").remove();
     }); 

})

