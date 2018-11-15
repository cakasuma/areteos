
var header = document.getElementById('opacitor');
window.addEventListener('scroll', function(e){
	var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 1;
    header.style.opacity = Math.min(0, Math.max(1, -scroll));
});