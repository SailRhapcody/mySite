$(document).ready(function(){
    $(".more a").click(function(event){
    	event.preventDefault();
    	var className = $(this).attr('class');
    	className = "." + className + "t";
    	var classValue = $(className).css("height");
    	if(classValue == "150px"){
    		$(className).animate({
    			"height" : "350px"
    		}, 600, function(){

    		});
    		$(this).text("свернуть");
    	}
    	else{
    		$(className).animate({
    			"height" : "150px"
    		}, 200, function(){

    		});
    		$(this).text("Подробнее");
    	}


    })
});