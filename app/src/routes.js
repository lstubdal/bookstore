import FrontpageView from './views/FrontpageView.vue';
import BookView from './views/BookView.vue';
import GenreBooksView from './views/GenreBooksView.vue';


export default [
	{ name: 'frontpage', 		path: '/', 						component: FrontpageView },
	{ name: 'book', 			path: '/:book_slug', 			component: BookView,  		props: true},
	{ name: 'genre', 			path: '/:genre_slug', 			component: GenreBooksView },
];

