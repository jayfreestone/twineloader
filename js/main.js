$('document').ready(function(){
	var tl = new TimelineMax();
	$intro = $('.intro');
	$introTitle = $intro.find('h1');
	$introCopy = $intro.find('p');
	$progressBar = $('.progress-bar');
	$progressBarSections = $('.progress-bar__section');
	$progressBarIcons = $('.progress-bar__icon');
	$progressBarCaptions = $('.progress-bar__icon-label');
	$progressBarBg = $progressBar.find('.progress-bar__bg');
	$progressEta = $('.progress-eta');
	$progressEtaSeconds = $progressEta.find('.progress-eta__seconds');
    $progressLines = $progressBar.find('.progress-bar__line');

	// Colors
	var green = $('body').css('background-color');
	var darkGreen = '#1a7566';

	// Intro
	tl.set($intro, {opacity: 1});
	tl.set($introTitle, {opacity: 0, y: '20%'});
	tl.set($introCopy, {opacity: 0, y: '20%'});

	tl.to($introTitle, .5, {opacity: 1, y: '0%'});
	tl.to($introCopy, .5, {opacity: 1, y: '0%'});

	// First make it green so it's invisible
	// tl.set($progressBar, {backgroundColor: green});
	tl.set($progressBarIcons, {y: '20%', opacity: 0, scale: .8});
	tl.set($progressLines, {opacity: 0});
	tl.set($progressBarCaptions, {opacity: 0});

	// Show the parent
	tl.set($progressBar, {opacity: 1});

	// Show the icons
	tl.staggerTo($progressBarIcons, 1, {y: '0%', opacity: 1, scale: 1, ease:Back.easeInOut}, 0.3, 'showBar');
	tl.staggerTo($progressLines, 1, {opacity: .5, ease:Back.easeInOut}, 0.3, 'showBar');

	tl.to($progressBarCaptions, .5, {opacity: 1}, 'appear');

	// Prep the BG fill on the icon parent
	tl.set($progressBarSections, {backgroundColor: darkGreen});
	tl.set($progressBarIcons.find('#icon'), {fill: 'transparent'});

	// For each section, run the fill sequence
	$progressBarSections.each(function(i, section){
		tl.to($(section).find('.progress-bar__icon-bg'), 6, {scaleX: 1, ease: Power2.easeIn});
		tl.to($(section).find('.progress-bar__icon-label'), 1, {color: '#fff'});
		tl.to($(section).next('.progress-bar__line'), 1, {backgroundColor: '#fff'});
	});

	// Coundown timer
	var counter = { var: parseInt($progressEtaSeconds.text()) };

	tl.to(counter, 32, {
		var: 0,
		onUpdate: function() {
			$progressEtaSeconds.text(Math.ceil(counter.var));
		},
		ease: Power4.easeOut,
	});
});
