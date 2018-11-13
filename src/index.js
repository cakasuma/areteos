import './assets/css/index.scss';

//Import all images
const importAll = r => {
	r.keys().forEach(r);
}
importAll(require.context('./assets/', true, /\.(png|svg|jpg|gif|ico)$/));

//Header scroller
let header = document.getElementById('header-title');
window.addEventListener('scroll', e => {
	let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	header.style.opacity = Math.max(0, Math.min(1, -scroll / 200 + 2));
});