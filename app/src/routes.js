import Frontpage from './views/Frontpage.vue';
import BookView from './views/BookView.vue';
import GenreBooksView from './views/GenreBooksView.vue';

export default [
	{ name: 'frontpage', 		path: '/', 						component: Frontpage },
	{ name: 'book', 			path: '/:book_slug', 			component: BookView,  props: true},
	{ name: 'genre', 			path: '/:genre_slug', 			component: GenreBooksView, props: true },
];

