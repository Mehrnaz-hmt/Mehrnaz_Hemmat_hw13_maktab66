let tbody = $("table").children("tbody");
let table = tbody.length ? tbody : $("table");
let tr = $(tbody).children();
let td = $("#my-td");
let delBtn = $("#del-btn");
let myInput1 = $("#my-input-1");
let radioBox = $("td").children();
let counter = 0;
let rowCount = $("table tbody tr").length;

//add-row btn 
 $(".add-row").on('click', addRow);
 function addRow() {
   counter++;
     $("tbody").append(`
     <tr id="my-tr">
     <td id="my-td" scope="row">
       <button
         style="
           background-color: rgb(250, 11, 11);
           border: none;
           color: white;
           padding: 4px 8px;
           font-size: 16px;
           cursor: pointer;
         "
         id="del-btn"
         class="btn"
         ><i class="fa fa-trash"></i> Delete</button
       >
       <button
         style="
           background-color: rgb(81, 116, 212);
           border: none;
           color: white;
           padding: 4px 8px;
           font-size: 16px;
           cursor: pointer;
         "
         id="clone-btn"
         class="btn"
         ><i class="fa fa-clone"></i> Clone</button
       >
     </td>
     <div class="col-3">
       <td><input type="text" id="my-input-1" /></td>
       <td><input type="text" /></td>
       <td>
         <div class="form-check form-check-inline">
           <input
             class="form-check-input"
             type="radio"
             name="inlineRadioOptions${counter}"
             id="inlineRadio1"
             value="option1"
           />
           <label class="form-check-label" for="inlineRadio1">New</label>
         </div>
         <div class="form-check form-check-inline">
           <input
             class="form-check-input"
             type="radio"
             name="inlineRadioOptions${counter}"
             id="inlineRadio2"
             value="option2"
           />
           <label class="form-check-label" for="inlineRadio2"
             >In Progresse</label
           >
         </div>
         <div class="form-check form-check-inline">
           <input
             class="form-check-input"
             type="radio"
             name="inlineRadioOptions${counter}"
             id="inlineRadio3"
             value="option3"
           />
           <label class="form-check-label" for="inlineRadio3"
             >Confirmed</label
           >
         </div>
       </td>
     </div>
   </tr>
     `);
 };


//when I click on Delete btn:
$(document).ready(function() {
    $(".table").on("click", "#del-btn", function() {
        $(this).closest("tr").remove();
     }); 
     
    var allRowsValue= $(".all-rows").val();
    $("allRowsValue").html(`All rows number: ${rowCount--}`);
  
     
})

//when I click on clone btn:
var r = $(this).closest('tr').clone();
$(document).on('click',"#clone-btn", function(e)
{
  var r = $(this).closest('tr').clone();
  $(this).closest('tr').after(r);
});


//All rows number:
$(document).ready(function(){
  $('.add-row').click(function(){
      var rowCount = $("table tr").length-1;
      $(".all-rows").html(`All rows number: ${rowCount++}`);
  });

});

//radioBox in confirmed mood
$('.radio-box-cont').on('click', function() {
  if($('input[value=Confirmed]:checked')) {
    $("#my-input-1").prop('disabled', true);
    $("#my-input-2").prop('disabled', true);
  }
});

//Not confirmed row btn:

// let ncrownumber = 0;
//   if($('input[!value==Confirmed]:checked')) {
//     $(".nc-rows-Number").html(`Not comfired rows number: ${ncrownumber++}`)
//   }

// $('.add-row').click(function(){
//   var rowCount = $("table tr").length-1;
//  let nConfirmedBtn =  $('input[name="radio-box-cont"]:checked').val();
//  if(nConfirmedBtn=="confirmed"){

//  }
// });

//test 
$("table").on("click", ".new", function (e) {
  let check = $(this).closest(".thisRow");
  let inputs = $(":text");
  if (e.target.checked) {
    check.find(inputs)[0].disabled = false;
    check.find(inputs)[1].disabled = false;
  }
  checkConfrimed()
});