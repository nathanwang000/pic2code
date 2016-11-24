// // Grab elements, create settings, etc.
// var video = document.getElementById('video');

$(document).ready(function(){
    // Get access to the camera!
    if(navigator.mediaDevices &&
       navigator.mediaDevices.getUserMedia) {
	// Not adding `{ audio: true }` since we only want video now
	navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
	    video.src = window.URL.createObjectURL(stream);
	    video.play();
	});
    }
    
    // Elements for taking the snapshot
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

    // Trigger photo take
    $("#snap").click(function() {
	context.drawImage(video, 0, 0, 640, 480);
	var dataURL = canvas.toDataURL();
	$.ajax({
	    type: 'POST',
	    data: {img: dataURL} // b64 image
	})

    });
});
