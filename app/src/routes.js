import Frontpage from './views/Frontpage.vue';
import Book from './views/Book.vue';
import GenreBooks from './views/GenreBooks.vue';
import Cart from './views/Cart.vue';

export default [
	{ 
		name: 'frontpage', 		
		path: '/', 						
		component: Frontpage 
	},
	{ 
		name: 'book', 			
		path: '/books/:book_slug', 			
		component: Book  		
	},
	{ 	
		name: 'genre', 			
		path: '/:genre_slug', 			
		component: GenreBooks 
	},
	{
		name: 'cart',
		path: '/cart',
		component: Cart
	}
];

