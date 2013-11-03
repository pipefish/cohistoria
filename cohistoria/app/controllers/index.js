var thread = Alloy.createController('thread').getView();

function clickImage(e) {
	$.index.animate({view: thread, transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
}

$.index.open();