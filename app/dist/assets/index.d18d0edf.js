var P=Object.defineProperty,L=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var S=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&S(e,r,t[r]);if(w)for(var r of w(t))I.call(t,r)&&S(e,r,t[r]);return e},F=(e,t)=>L(e,O(t));import{s as M,r as g,o as a,c as v,w as k,a as E,b as c,d as o,e as h,F as m,f,g as y,t as _,h as R,i as q,j as A,k as H}from"./vendor.3ce4f981.js";const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};Q();var $=M({projectId:"cuc1osaz",dataset:"production",apiVersion:"2022-04-02",useCdn:"false",withCredentials:!0}),b={data(){return{loading:!0,result:null}},methods:{async sanityFetchFrontpage(e){this.result=await $.fetch(e),this.$store.dispatch("updateLatestNews",this.result.latestNews),this.$store.dispatch("updateMostPopular",this.result.mostPopular),console.log("LATEST NEWS",this.latestNews),this.loading=!1},async sanityFetchGenreBooks(e,t){this.result=await $.fetch(e,t),this.$store.dispatch("updateCurrentGenre",this.result.currentGenre.name),this.$store.dispatch("updateGenreBooks",this.result.genreBooks),console.log("gernrebooks",this.genreBooks),this.loading=!1},async sanityFetchBook(e,t){this.result=await $.fetch(e,t),this.$store.dispatch("updateCurrentBook",this.result),this.loading=!1},async sanityFetchGenres(e){this.result=await $.fetch(e),this.$store.dispatch("updateGenres",this.result),console.log("genres!!!",this.result),this.loading=!1},updateTotalSold(e,t){$.patch(e).inc({totalSold:t.quantity}).commit().then(r=>{console.log("oppdatert!",r)}).catch(r=>{console.log("feil!!",r)})}},computed:{genreBooks(){return this.$store.getters.getGenreBooks},latestNews(){return this.$store.getters.getLatestNews}}},U=`*[_type == 'genre'] {

    name,
    
    slug {
        current
    }
}`;var p=(e,t)=>{const r=e.__vccOpts||e;for(const[u,n]of t)r[u]=n;return r};const V={},W=E(" \u2190 Back to frontpage");function K(e,t,r,u,n,s){const i=g("RouterLink");return a(),v(i,{to:{name:"frontpage"},class:"backToFrontpage"},{default:k(()=>[W]),_:1})}var B=p(V,[["render",K]]),j="/icons/cart.svg",D="/icons/hamburger.svg";const J={mixins:[b],data(){return{title:"THE NORWEGIAN BOOKSTORE",menuCliked:!1}},async created(){await this.sanityFetchGenres(U)},computed:{genres(){return this.$store.getters.getGenres},cart(){return this.$store.getters.getCart},totalItems(){return this.cart.length===0?"empty":this.cart.length}},methods:{toggleMenu(){this.menuCliked=!this.menuCliked,console.log(this.menuCliked)}},components:{BackToFrontpage:B}},z={class:"header"},Y={class:"header__cart-icon"},X=o("img",{src:j,alt:"cart icon"},null,-1),Z={class:"header__cart-items"},ee=o("p",{class:"header__cart-text"},"shoppingcart",-1),te={class:"genres"},oe={class:"genres--mobile"},se={class:"genres__hamburger genres__hamburger-content"},re=o("span",null,"menu",-1),ne=o("img",{src:D,alt:"hamburger menu"},null,-1),ae=[re,ne],ce={class:"genres__genre--mobile"};function ie(e,t,r,u,n,s){const i=g("RouterLink"),l=g("BackToFrontpage");return a(),c(m,null,[o("header",z,[h(i,{to:{name:"frontpage"},class:"header__title"},{default:k(()=>[o("h1",null,_(n.title),1)]),_:1}),h(i,{to:{name:"cart"},class:"header__cart"},{default:k(()=>[o("div",Y,[X,o("p",Z," ("+_(s.totalItems)+")",1)]),ee]),_:1})]),o("nav",te,[(a(!0),c(m,null,f(s.genres,d=>(a(),c("div",null,[h(i,{to:{name:"genre",params:{genre_slug:d.slug.current}},class:"genres__genre","active-class":"active"},{default:k(()=>[o("p",null,_(d.name),1)]),_:2},1032,["to"])]))),256))]),o("nav",oe,[o("div",se,[this.$route.name!=="frontpage"?(a(),v(l,{key:0,class:"genre__backToFrontpage"})):y("",!0),o("button",{class:"genres__hamburger-content",onClick:t[0]||(t[0]=(...d)=>s.toggleMenu&&s.toggleMenu(...d))},ae)]),n.menuCliked?(a(!0),c(m,{key:0},f(s.genres,d=>(a(),c("div",ce,[h(i,{to:{name:"genre",params:{genre_slug:d.slug.current}},class:"genres__genre--mobile","active-class":"active"},{default:k(()=>[o("p",null,_(d.name),1)]),_:2},1032,["to"])]))),256)):y("",!0)])],64)}var le=p(J,[["render",ie]]),_e="/icons/some.svg";const ue={data(){return{title:"THE NORWEGIAN BOOKSTORE",contactUs:"CONTACT US: norwegianbookstore@nb.no"}}},de={class:"footer"},ge={class:"footer__title"},he={class:"footer__contactUs"},pe=o("p",{class:"footer__text"},"or",-1),me=o("p",{class:"footer__text"},"CHECKOUT:",-1),ke=o("img",{src:_e,alt:"some links"},null,-1);function ve(e,t,r,u,n,s){return a(),c("div",de,[o("h2",ge,_(n.title),1),o("p",he,_(n.contactUs),1),pe,me,ke])}var fe=p(ue,[["render",ve]]);const ye={mounted(){this.$store.dispatch("getFromLocalStorage")},components:{Header:le,Footer:fe},computed:{cart(){return this.$store.getters.getCart}}},$e={class:"container"};function be(e,t,r,u,n,s){const i=g("Header"),l=g("RouterView"),d=g("Footer");return a(),c("div",$e,[h(i),(a(),v(l,{key:e.$route.fullPath})),h(d)])}var Be=p(ye,[["render",be]]),Ce={state(){return{latestNews:[],mostPopular:[]}},getters:{getLatestNews(e){return e.latestNews},getMostPopular(e){return e.mostPopular}},mutations:{setLatestNews(e,t){e.latestNews=t},setMostPopular(e,t){e.mostPopular=t}},actions:{updateLatestNews({commit:e},t){e("setLatestNews",t)},updateMostPopular({commit:e},t){e("setMostPopular",t)}}},we={state(){return{cart:[],totalSum:0}},getters:{getCart(e){return e.cart},getTotalSum(e){return e.totalSum=0,e.cart.forEach(t=>{e.totalSum+=t.price*t.quantity}),e.totalSum}},mutations:{add(e,t){const r=e.cart.findIndex(u=>u.title===t.title);if(r!==-1)e.cart[r].quantity+=1;else{const u=F(T({},t),{quantity:1});e.cart.push(u)}},remove(e,t){e.cart.forEach((r,u)=>{r.title===t.title&&e.cart.splice(u,1)})},increase(e,t){e.cart[t]&&(e.cart[t].quantity+=1)},decrease(e,t){e.cart[t]&&e.cart[t].quantity>0&&(e.cart[t].quantity-=1),e.cart[t]&&e.cart[t].quantity===0&&e.cart.splice(t,1)},setBooksInCart(e,t){e.cart=t},emptyCart(e){e.cart=[]}},actions:{addToCart({commit:e,dispatch:t},r){e("add",r),t("updateLocalStorage")},removeFromCart({commit:e,dispatch:t},r){e("remove",r),t("updateLocalStorage")},increaseQuantity({commit:e},t){e("increase",t)},decreaseQuantity({commit:e},t){e("decrease",t)},updateLocalStorage({state:e}){window.localStorage.setItem("books-cart",JSON.stringify(e.cart))},getFromLocalStorage({commit:e}){if(localStorage.getItem("books-cart")&&localStorage.getItem("books-cart").length>0){const t=JSON.parse(window.localStorage.getItem("books-cart"));e("setBooksInCart",t)}},emptyCartInLocalStorage({commit:e,dispatch:t}){e("emptyCart"),t("updateLocalStorage")}}},Se={state(){return{currentGenre:null,genres:[],genreBooks:[]}},getters:{getGenres(e){return e.genres},getGenreBooks(e){return e.genreBooks},getCurrentGenre(e){return e.currentGenre}},mutations:{setGenres(e,t){e.genres=t},setGenreBooks(e,t){e.genreBooks=t},setCurrentGenre(e,t){e.currentGenre=t}},actions:{updateGenreBooks({commit:e},t){e("setGenreBooks",t)},updateCurrentGenre({commit:e},t){e("setCurrentGenre",t)},updateGenres({commit:e},t){e("setGenres",t)}}},Te={state(){return{book:null}},getters:{getBook(e){return e.book}},mutations:{setBook(e,t){e.book=t}},actions:{updateCurrentBook({commit:e},t){e("setBook",t)}}},Fe={state(){return{allBooks:[]}},getters:{getAllBooks(e){return e.allBooks}},mutations:{setBooks(e,t){e.allBooks=t}},modules:{frontpage:Ce,cart:we,genre:Se,book:Te}},Ge=`{
    "latestNews": *[_type == 'book'] | order(yearOfPublication desc) {

        _id,
        
        title,

        author-> {
            name
        },

        cover {
            asset-> {
                url
            }
        },

        price,

        yearOfPublication,

        slug {
            current
        },

        totalSold
    },

    "mostPopular": *[_type == 'book'] | order(totalSold desc){
        _id,

        title,
    
        author-> {
            name
        },

        cover {
            asset-> {
                url
            }
        },

        totalSold,

        price,

        slug {
            current
        }, 
    }
}`,G="/icons/cart-small.svg";const Ne={props:{book:{type:Object}},methods:{addToCart(e){this.$store.dispatch("addToCart",e)}}},Pe={class:"preview"},Le={class:"preview__title"},Oe={class:"preview__author"},xe=["src"],Ie={class:"preview__price"},Me=o("p",null,"add to cart",-1),Ee=o("img",{src:G,alt:"mini cart icon"},null,-1),Re=[Me,Ee];function qe(e,t,r,u,n,s){const i=g("RouterLink");return a(),c("div",Pe,[h(i,{to:{name:"book",params:{book_slug:r.book.slug.current}},class:"preview__book"},{default:k(()=>[o("h3",Le,_(r.book.title),1),o("p",Oe,_(r.book.author.name),1),o("img",{src:r.book.cover.asset.url,alt:"book cover",class:"preview__image"},null,8,xe),o("p",Ie,_(r.book.price)+",-",1)]),_:1},8,["to"]),o("button",{class:"preview__addToCart",onClick:t[0]||(t[0]=l=>s.addToCart(r.book))},Re)])}var N=p(Ne,[["render",qe]]);const Ae={data(){return{maxPreviewBooks:4}},mixins:[b],components:{BookPreview:N},async created(){await this.sanityFetchFrontpage(Ge)},computed:{latestNews(){return this.$store.getters.getLatestNews},mostPopular(){return this.$store.getters.getMostPopular}}},He={key:0,class:"loadingPage"},Qe={key:1,class:"frontpage"},Ue={class:"frontpage__main"},Ve={class:"frontpage__books"},We=o("h2",null,"LATEST NEWS",-1),Ke={class:"frontpage__books"},je=o("h2",null,"MOST POPULAR",-1);function De(e,t,r,u,n,s){const i=g("BookPreview");return e.loading?(a(),c("div",He,"Loading all the books...")):(a(),c("div",Qe,[o("main",Ue,[o("section",Ve,[We,(a(!0),c(m,null,f(s.latestNews,(l,d)=>(a(),c("div",null,[d<n.maxPreviewBooks?(a(),v(i,{key:0,book:l},null,8,["book"])):y("",!0)]))),256))]),o("section",Ke,[je,(a(!0),c(m,null,f(s.mostPopular,(l,d)=>(a(),c("div",null,[d<n.maxPreviewBooks?(a(),v(i,{key:0,book:l},null,8,["book"])):y("",!0)]))),256))])])]))}var Je=p(Ae,[["render",De]]),ze=`
*[slug.current == $slug][0] { 
    ...,

    _id,
    
    title,

    author-> {
        name   
    },
    
    price,

    publisher-> {
        name
    },

    cover {
        asset-> {
            url
        }
    },

    yearOfPublication,

    totalSold
}
        `;const Ye={data(){return{readMoreClicked:!1}},mixins:[b],async created(){await this.sanityFetchBook(ze,{slug:this.$route.params.book_slug})},props:{book_slug:{type:String}},components:{BackToFrontpage:B},computed:{book(){return this.$store.getters.getBook},buttonText(){return this.readMoreClicked?"Read Less":"Read more"}},methods:{readMore(){return this.readMoreClicked=!this.readMoreClicked},addToCart(e){this.$store.dispatch("addToCart",e)}}},Xe={key:0,class:"book"},Ze={class:"information"},et=["src"],tt={class:"information__details"},ot={clas:"information__title"},st={class:"information__author"},rt={class:"information__price"},nt={class:"information__publisher"},at=o("p",null,"add to cart",-1),ct=o("img",{src:G,alt:"mini cart"},null,-1),it=[at,ct],lt=o("hr",{class:"book__seperator"},null,-1),_t={class:"book__description"},ut=o("h2",{class:"book__description-title"},"DESCRIPTION",-1),dt={class:"book__description-text"},gt={key:0},ht={key:1};function pt(e,t,r,u,n,s){const i=g("BackToFrontpage");return s.book?(a(),c("div",Xe,[h(i,{class:"book__backToFrontpage"}),o("div",Ze,[o("img",{src:s.book.cover.asset.url,alt:"book cover",class:"information__cover"},null,8,et),o("div",tt,[o("h1",ot,_(s.book.title),1),o("p",st,_(s.book.author.name),1),o("p",rt,_(s.book.price)+",- ",1),o("p",nt,_(s.book.publisher.name)+" "+_(s.book.yearOfPublication),1),o("button",{class:"information__addToCart",onClick:t[0]||(t[0]=l=>s.addToCart(s.book))},it)])]),lt,o("div",_t,[ut,o("div",dt,[n.readMoreClicked?(a(),c("p",ht,_(s.book.description),1)):(a(),c("p",gt,_(s.book.description.slice(0,550)),1)),o("button",{onClick:t[1]||(t[1]=(...l)=>s.readMore&&s.readMore(...l)),class:"book__description-button"},_(s.buttonText),1)])])])):y("",!0)}var mt=p(Ye,[["render",pt]]),kt=`{
    "currentGenre": *[slug.current == $slug][0],

    "genreBooks": *[_type == "book" && genre._ref in *[_type=="genre" && slug.current==$slug]._id ]{
        _id,
        
        title,

        author-> {
            name
        },

        price,

        cover {
            asset-> {
                url
            }
        },

        slug {
            current
        },

        totalSold
    }
}`;const vt={mixins:[b],async created(){await this.sanityFetchGenreBooks(kt,{slug:this.$route.params.genre_slug})},props:{genre_slug:{type:String}},components:{BookPreview:N,BackToFrontpage:B},computed:{currentGenre(){return this.$store.getters.getCurrentGenre},genreBooks(){return this.$store.getters.getGenreBooks},noBooksWarning(){return this.genreBooks===0}}},ft={key:0},yt={key:1,class:"genreBooks"},$t={class:"genreBooks__title"},bt={class:"genreBooks__books"},Bt={key:1,class:"genreBooks__books-warning"};function Ct(e,t,r,u,n,s){const i=g("BackToFrontpage"),l=g("BookPreview");return e.loading?(a(),c("div",ft,"LOADING BOOKS")):(a(),c("div",yt,[h(i,{class:"genreBooks__backToFrontpage"}),o("h1",$t,_(s.currentGenre),1),o("section",bt,[s.genreBooks.length!==0?(a(!0),c(m,{key:0},f(s.genreBooks,d=>(a(),v(l,{book:d},null,8,["book"]))),256)):(a(),c("span",Bt,"No books with til genre..."))])]))}var wt=p(vt,[["render",Ct]]),St="/icons/decrease.svg",Tt="/icons/increase.svg",Ft="/icons/remove.svg";const Gt={mixins:[b],created(){console.log("HER",this.$store.getters.getCartLength)},computed:{cart(){return this.$store.getters.getCart},totalSum(){return this.$store.getters.getTotalSum}},methods:{removeFromCart(e){this.$store.dispatch("removeFromCart",e)},increaseQuantity(e){this.$store.dispatch("increaseQuantity",e)},decreaseQuantity(e,t){this.$store.dispatch("decreaseQuantity",e,t)},updateTotalSoldSanity(){this.cart.forEach(e=>{this.updateTotalSold(e._id,e)}),this.$store.dispatch("emptyCartInLocalStorage"),console.log("empty cart?",this.cart)}},components:{BackToFrontpage:B}},Nt={class:"cart"},Pt=o("h2",{class:"cart__title"},"SHOPPINGCART",-1),Lt={key:0,class:"cart__emptyAlert"},Ot={class:"cart__products"},xt={class:"cart__product"},It=["src"],Mt={class:"quantity"},Et=["onClick"],Rt=o("img",{src:St,alt:"increase button"},null,-1),qt=[Rt],At=["onClick"],Ht=o("img",{src:Tt,alt:"increase button"},null,-1),Qt=[Ht],Ut=["onClick"],Vt=o("img",{src:Ft,alt:"trash icon"},null,-1),Wt=[Vt],Kt={key:2,class:"cart__checkout"},jt={class:"cart__checkout-sum"};function Dt(e,t,r,u,n,s){const i=g("BackToFrontpage");return a(),c("div",Nt,[h(i),Pt,s.cart.length===0?(a(),c("div",Lt,"Your cart is empty!")):(a(!0),c(m,{key:1},f(s.cart,(l,d)=>(a(),c("section",Ot,[o("div",xt,[o("img",{src:l.cover.asset.url,class:"cart__product-bookCover"},null,8,It),o("h3",null,_(l.title),1),o("span",null,_(l.price)+",-",1),o("div",Mt,[o("button",{onClick:C=>s.decreaseQuantity(d,l)},qt,8,Et),o("span",null,_(l.quantity),1),o("button",{onClick:C=>s.increaseQuantity(d)},Qt,8,At)]),o("button",{class:"cart__product-remove",onClick:C=>s.removeFromCart(l)},Wt,8,Ut)])]))),256)),s.totalSum!==0?(a(),c("section",Kt,[o("span",jt,"Total sum: "+_(s.totalSum)+" kr",1),o("button",{class:"cart__checkout-button",onClick:t[0]||(t[0]=(...l)=>s.updateTotalSoldSanity&&s.updateTotalSoldSanity(...l))},"GO TO CHECKOUT")])):y("",!0)])}var Jt=p(Gt,[["render",Dt]]),zt=[{name:"frontpage",path:"/",component:Je},{name:"book",path:"/books/:book_slug",component:mt},{name:"genre",path:"/:genre_slug",component:wt},{name:"cart",path:"/cart",component:Jt}];const Yt=R(Fe),Xt=q({routes:zt,history:A(),scrollBehavior(e,t,r){return{left:0,top:0}}});H(Be).use(Yt).use(Xt).mount("#app");
