$("document").ready(function(){var r=new TimelineMax;$intro=$(".intro"),$introTitle=$intro.find("h1"),$introCopy=$intro.find("p"),$progressBar=$(".progress-bar"),$progressBarSections=$(".progress-bar__section"),$progressBarIcons=$(".progress-bar__icon"),$progressBarCaptions=$(".progress-bar__icon-label"),$progressBarBg=$progressBar.find(".progress-bar__bg"),$progressEta=$(".progress-eta"),$progressEtaSeconds=$progressEta.find(".progress-eta__seconds");var o=$("body").css("background-color"),s=$progressBar.css("background-color");r.set($intro,{opacity:1}),r.set($introTitle,{opacity:0,y:"20%"}),r.set($introCopy,{opacity:0,y:"20%"}),r.to($introTitle,.5,{opacity:1,y:"0%"}),r.to($introCopy,.5,{opacity:1,y:"0%"}),r.set($progressBar,{backgroundColor:o}),r.set($progressBarIcons,{y:"20%",opacity:0,scale:.8}),r.set($progressBarCaptions,{color:o}),r.set($progressBar,{opacity:1}),r.staggerTo($progressBarIcons,1,{y:"0%",opacity:1,scale:1,ease:Back.easeInOut},.3).to($progressBar,1,{backgroundColor:s}),r.to($progressBarCaptions,1,{color:s},"appear"),r.set($progressBarIcons.find("#icon"),{fill:"transparent"});var e={var:parseInt($progressEtaSeconds.text())};r.to(e,40,{var:0,onUpdate:function(){$progressEtaSeconds.text(Math.ceil(e.var))},ease:Power4.easeOut},"countdown"),r.to($progressBarBg,40,{right:0,ease:Power4.easeOut},"countdown")});