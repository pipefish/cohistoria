function goBack(e) {
	var index = Alloy.createController('index');
	index.getView().open();
	$.thread.close();
}

function goAdd(e) {
	var add = Alloy.createController('add');
	add.getView().open();
	$.thread.close();
}
