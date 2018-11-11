import './assets/js/any';
import './assets/js/any2';
import './assets/scss/index.scss';
import AOS from 'aos'
import 'aos/dist/aos.css'
//Import all images
function importAll(r) {
	r.keys().forEach(r);
}
importAll(require.context('./assets/', true, /\.(png|svg|jpg|gif)$/));

//Header scroller
var header = document.getElementById('header_title');
window.addEventListener('scroll', function(e) {
	var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	header.style.opacity = Math.max(0, Math.min(1, -scroll / 200 + 2));
});

//AOS Animation init
AOS.init();
