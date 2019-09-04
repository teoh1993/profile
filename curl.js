
console.log('Hello World!');


// console.log(jQuery);




jQuery.ajax({
	url:"http://localhost/~teoh/cloneBox/my/?ac=EPRateCheckingBulk",
	type: "GET",
	// dataType:'jsonp',
	responseType:'application/json',

	data: "data",
	success: function(data){
		console.log(data); 
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
		console.log(XMLHttpRequest)
		console.log(textStatus)
		console.log(errorThrown)
	}
})


// $.ajax({
//   type: 'GET',
//   url:"http://demo.connect.easyparcel.my?ac=EPRateCheckingBulk",
//   // contentType: 'application/json',
//   // dataType:'jsonp',
//   // responseType:'application/json',
//   xhrFields: {
//     withCredentials: false
//   },
//   headers: {
//     'Access-Control-Allow-Credentials' : true,
//     'Access-Control-Allow-Origin':'*',
//     'Access-Control-Allow-Methods':'GET',
//     'Access-Control-Allow-Headers':'application/json',
//   },
//   success: function(data) {
//     console.log(data);
//   },
//   error: function(error) {
//     console.log("FAIL....=================");
//   }
// });




