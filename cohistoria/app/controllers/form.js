function goBack(e) {
	var index = Alloy.createController('index');
	index.getView().open();
	$.form.close();
}

function takePicture(e) {
	
	Ti.Media.showCamera({
	
	    // overlay: '',
	    showControls: false,
	
	    success: function (event) {
	        Ti.API.debug("video was taken");
	    },
	    cancel: function () {},
	    error: function (error) {
	        var a = Titanium.UI.createAlertDialog({
	            title: 'Camera'
	        });
	        if (error.code == Titanium.Media.NO_CAMERA) {
	            a.setMessage('Please run this test on a device with a camera');
	        } else {
	            a.setMessage('Unexpected error: ' + error.code);
	        }
	        a.show();
	    }
	});
}

function submitThread(e) {
	var thread = Alloy.createController('thread');
	thread.getView().open();
	$.form.close();
}