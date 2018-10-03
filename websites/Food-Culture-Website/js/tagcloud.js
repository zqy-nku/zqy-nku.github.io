$("#dataset").change(function () {
    if (this.value == "rating5")
	var url = './images/section5/tagcloud5.png';
    else if (this.value == "rating6")
	var url = './images/section5/tagcloud6.png'
    else if (this.value == "rating7")
	var url = './images/section5/tagcloud7.png'
	else if (this.value == "rating8")
	var url = './images/section5/tagcloud8.png'
    $("#text")
        .fadeOut(400, function() {
            $("#tags-cloud").attr('src', url);
        })
        .fadeIn(400);
});
