<script src="https://code.jquery.com/jquery-2.2.3.min.js">

<script>
$(document).ready(function)(){
console.log(names);
});

//LOOPS and ARRAYS GO TOGETHER
for (var i = 0; i < names.length; i++) {
	$("#list").append("<li>" +names[i]+"<li>");
}

 $("#list").click(function(){
        $("#list li").replaceWith("#bio");
     });

 //need to link list item with name and send to reference our object to get the correct bio out

var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

$("list li").click(function()){
	console.log(this)
	//var bio = // something
	$("#bio").append(bio);
});


var names = Object.keys(data);
console.log(this);
var person = this.innerHTML;
//console.log(person);
var bio = data[person];
//console.log(bio);
$("#bio").empty();
$("#bio").append(bio);

//for each key that is a name -> the value is going to be another object

var data = {
	"Vint Cerf": {
		gender: "m",
		bio:
	}
}
});

//.keys is the function - method type (argument)


$('a.ui-icon-cart').click(function(){
         $(this).closest('li').clone().appendTo('#cart ul');
  });

//if it's male put in the male 
//if it's female put in the female


