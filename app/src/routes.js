import Frontpage from './views/Frontpage.vue';
import BookView from './views/BookView.vue';
import GenreBooksView from './views/GenreBooksView.vue';
import Cart from './views/Cart.vue';

export default [
	{ 
		name: 'frontpage', 		
		path: '/', 						
		component: Frontpage 
	},
	{ 
		name: 'book', 			
		path: '/:book_slug', 			
		component: BookView  		
	},
	{ 
		name: 'genre', 			
		path: '/:genre_slug', 			
		component: GenreBooksView 
	},
	{
		name: 'cart',
		path: '/cart',
		component: Cart
	}
];

