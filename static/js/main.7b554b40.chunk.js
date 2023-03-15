(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},49:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(21),s=c.n(a),i=(c(43),c(23)),o=(c(44),c(5)),l=c(3),d=(c(45),c(4)),j=(c(49),c(0)),u=function(e){var t=e.imageUrl,c=e.name,r=e.price,n=e.description,a=e.productId;return console.log("Product: ",c," ",r),Object(j.jsxs)("div",{className:"product",children:[Object(j.jsx)("img",{src:t,alt:c}),Object(j.jsxs)("div",{className:"product__info",children:[Object(j.jsx)("p",{className:"info__name",children:c}),Object(j.jsxs)("p",{className:" info__description",children:[n.substring(0,100),"..."]}),Object(j.jsxs)("p",{className:"info__price",children:["$",r]}),Object(j.jsx)(o.b,{to:"/product/".concat(a),className:"info__button",children:" View "})]})]})},p=c(12),b=c(18),O="GET_PRODUCTS_REQUEST",h="GET_PRODUCTS_SUCCESS",m="GET_PRODUCTS_FAIL",x="GET_PRODUCT_DETAILS_REQUEST",f="GET_PRODUCT_DETAILS_SUCCESS",_="GET_PRODUCT_DETAILS_FAIL",g="GET_PRODUCT_DETAILS_RESET",v=c(19),y=c.n(v),N=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.getProducts})),c=t.products,n=t.loading,a=t.error;return Object(r.useEffect)((function(){e(function(){var e=Object(b.a)(Object(p.a)().mark((function e(t){var c,r;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:O}),e.next=4,y.a.get("/api/products");case 4:c=e.sent,r=c.data,t({type:h,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:m,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(j.jsxs)("div",{className:"homescreen",children:[Object(j.jsx)("h2",{className:"homescreen__title",children:" Latest Products"}),Object(j.jsx)("div",{className:"homescreen__products",children:n?Object(j.jsx)("h2",{children:"Loading..."}):a?Object(j.jsx)("h2",{children:a}):c.map((function(e){return Object(j.jsx)(u,{productId:e._id,name:e.name,price:e.price,description:e.description,imageUrl:e.imageUrl},e._id)}))})]})},S=c(14),I=(c(76),"ADD_TO_CART"),k="REMOVE_FROM_CART",C=function(e,t){return function(){var c=Object(b.a)(Object(p.a)().mark((function c(r,n){var a,s;return Object(p.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,y.a.get("/api/products/".concat(e));case 2:a=c.sent,s=a.data,r({type:I,paylad:{product:s._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(n().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},T=function(e){var t=e.match,c=e.history;console.log("test");var n=Object(r.useState)(1),a=Object(i.a)(n,2),s=a[0],o=a[1],l=Object(d.b)(),u=Object(d.c)((function(e){return e.getProductDetails})),O=u.loading,h=u.error,m=u.product;console.log("product: ",m),console.log("product details: ",u),Object(r.useEffect)((function(){var e;m&&t.params.id!==m._id&&l((e=t.params.id,function(){var t=Object(b.a)(Object(p.a)().mark((function t(c){var r,n;return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:x}),t.next=4,y.a.get("/api/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:f,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:_,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[l,m,t]);return Object(j.jsx)("div",{className:"productscreen",children:O?Object(j.jsx)("h2",{children:"Loading..."}):h?Object(j.jsx)("h2",{children:h}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"productscreen__left",children:[Object(j.jsx)("div",{className:"left__image",children:Object(j.jsx)("img",{src:m.imageUrl,alt:"product name"})}),Object(j.jsxs)("div",{className:"left__info",children:[Object(j.jsx)("p",{className:"left__name",children:m.name}),Object(j.jsxs)("p",{children:["Price: $",m.price]}),Object(j.jsxs)("p",{children:["Description: $",m.description]})]})]}),Object(j.jsx)("div",{className:"productscreen__right",children:Object(j.jsxs)("div",{className:"right__info",children:[Object(j.jsxs)("p",{children:["Price: ",Object(j.jsxs)("span",{children:["$",m.price]})]}),Object(j.jsxs)("p",{children:["Status: ",Object(j.jsx)("span",{children:m.conuntInStock>0?"In Stock":"Out of Stock"})]}),Object(j.jsxs)("p",{children:["Qty",Object(j.jsxs)("select",{value:s,onChange:function(e){return o(e.target.value)},children:[Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"4",children:"4"}),Object(S.a)(Array(m.conuntInStock).keys()).map((function(e){return Object(j.jsx)("option",{value:e+1,children:e+1},e+1)}))]})]}),Object(j.jsx)("p",{children:Object(j.jsx)("button",{type:"button",onClick:function(){l(C(m._id,s)),c.push("/cart")},children:"Add to Cart"})})]})})]})})},E=(c(77),c(78),function(e){var t=e.item,c=e.qtyChangeHandler,r=e.removeHandler;return Object(j.jsxs)("div",{className:"cartitem",children:[Object(j.jsx)("div",{className:"cartitem__image",children:Object(j.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(j.jsx)(o.b,{to:"product/".concat(t.product),className:"cartitem__name",children:Object(j.jsx)("p",{children:t.name})}),Object(j.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(j.jsx)("select",{className:"cartitem__select",value:t.qty,onChange:function(e){return c(t.product,e.target.value)},children:Object(S.a)(Array(t.countInStock).keys()).map((function(e){return Object(j.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(j.jsx)("button",{className:"cartitem__deleteBtn",onClick:function(){return r(t.product)},children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}),w=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.cart})).cartItems,c=function(t,c){e(C(t,c))},r=function(t){e(function(e){return function(t,c){t({type:k,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(t))};return Object(j.jsxs)("div",{className:"cartscreen",children:[Object(j.jsxs)("div",{className:"cartscreen__left",children:[Object(j.jsx)("h2",{children:"Shopping cart"}),0===t.length?Object(j.jsxs)("div",{children:["Your cart is empty ",Object(j.jsx)(o.b,{to:"/",children:" Go Back"})]}):t.map((function(e){return Object(j.jsx)(E,{item:e,qtyChangeHandler:c,removeHandler:r},e.product)}))]}),Object(j.jsxs)("div",{className:"cartscreen__right",children:[Object(j.jsxs)("div",{className:"cartscreen__info",children:[Object(j.jsxs)("p",{children:["Subtotal (",t.reduce((function(e,t){return Number(t.qty),0})),") items"]}),Object(j.jsxs)("p",{children:["$",t.reduce((function(e,t){return t.price,t.qty,0})).toFixed(2)]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Proceed to Checkout"})})]})]})},D=(c(79),function(e){var t=e.click;Object(d.c)((function(e){return e.cart})).cartItems;return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("div",{className:"navbar__logo",children:Object(j.jsx)("h2",{children:" Juice Bar Shopping Cart"})}),Object(j.jsxs)("ul",{className:"navbar__links",children:[Object(j.jsx)("li",{children:Object(j.jsxs)(o.b,{to:"/cart",className:"cart__link",children:[Object(j.jsx)("i",{className:"fas fa-shopping-cart",children:"  "}),Object(j.jsxs)("span",{children:["Cart",Object(j.jsx)("span",{className:"cartlogo_badge",children:"0"})]})]})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Shop"})})]}),Object(j.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})]})}),P=(c(80),function(e){var t=e.show,c=e.click;return t&&Object(j.jsx)("div",{className:"backdrop",onClick:c})}),U=(c(81),function(e){var t=e.show,c=e.click,r=["sidedrawer"];t&&r.push("show");Object(d.c)((function(e){return e.cart})).cartItems;return Object(j.jsx)("div",{className:r.join(" "),children:Object(j.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(j.jsx)("li",{children:Object(j.jsxs)(o.b,{to:"/cart",children:[Object(j.jsx)("i",{className:"fas fa-shopping-cart"}),Object(j.jsxs)("span",{children:["Cart",Object(j.jsx)("span",{className:"sidedrawer__cartbadge",children:"0"})]})]})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Shop"})})]})})});var R=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(j.jsxs)(o.a,{children:[Object(j.jsx)(D,{click:function(){return n(!0)}}),Object(j.jsx)(U,{show:c,click:function(){return n(!1)}}),Object(j.jsx)(P,{show:c,click:function(){return n(!1)}}),Object(j.jsx)("main",{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(j.jsx)(l.a,{exact:!0,path:"/product/:id",component:T}),Object(j.jsx)(l.a,{exact:!0,path:"/cart",component:w})]})})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},L=c(20),F=c(38),G=c(37),q=c(11),J={cartItems:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(q.a)(Object(q.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(q.a)(Object(q.a)({},e),{},{cartItems:[].concat(Object(S.a)(e.cartItems),[c])});case k:return Object(q.a)(Object(q.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loading:!0,products:[]};case h:return{loading:!1,products:t.payload};case m:return{loading:!1,error:t.payload};default:return e}},H=Object(L.combineReducers)({cart:$,getProducts:B,getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0};case f:return{loading:!1,product:t.payload};case _:return{loading:!1,error:t.payload};case g:return{product:[]};default:return e}}}),M=[F.a],Q={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},V=Object(L.createStore)(H,Q,Object(G.composeWithDevTools)(L.applyMiddleware.apply(void 0,M)));s.a.render(Object(j.jsx)(d.a,{store:V,children:Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(R,{})})}),document.getElementById("root")),A()}},[[82,1,2]]]);
//# sourceMappingURL=main.7b554b40.chunk.js.map