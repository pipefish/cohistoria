function goThread(e) {
	var thread = Alloy.createController('thread');
  	thread.getView().open();
  	$.index.close();
}

function goForm(e) {
	var form = Alloy.createController('form');
	form.getView().open();
	$.index.close();
}

$.index.open();