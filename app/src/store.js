import frontpage from './modules/frontpage.js';
import cart from './modules/cart.js';
import genre from './modules/genre.js';
import book from './modules/book.js';

export default {
    state() {
        return {
          
        }
    },

    modules: {
        frontpage,
        cart,
        genre,
        book
    }
}