import FrontpageView from './views/FrontpageView.vue';
import BookView from './views/BookView.vue';

export default [
	{ name: 'frontpage', 		path: '/', 						component: FrontpageView },
	{ name: 'book', 			path: '/:book_slug', 			component: BookView },
];

