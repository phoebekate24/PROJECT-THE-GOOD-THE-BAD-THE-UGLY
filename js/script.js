$(document).ready(start);

function start() {
	$("#submit-btn").click(loadImages);
}

function loadImages(e){
	e.preventDefault();
	var input = $("#ausCity").val();
	$("#cityImages").attr('class', input);
	$("img").load(function(){
    alert("Image loaded.");
});
}

// 	$('#handleForm').submit(function(){
// $(this).hide();
// $('#loadingimage').show();});