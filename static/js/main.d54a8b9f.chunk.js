(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{43:function(t,e,c){},44:function(t,e,c){},45:function(t,e,c){},49:function(t,e,c){},76:function(t,e,c){},77:function(t,e,c){},78:function(t,e,c){},79:function(t,e,c){},80:function(t,e,c){},81:function(t,e,c){},82:function(t,e,c){"use strict";c.r(e);var a=c(1),s=c.n(a),n=c(20),i=c.n(n),r=(c(43),c(23)),o=(c(44),c(5)),l=c(3),d=(c(45),c(4)),u=(c(49),c(0)),p=function(t){var e=t.imageUrl,c=t.name,a=t.price,s=t.description,n=t.productId;return console.log("Product: ",c," ",a),Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("img",{src:e,alt:c}),Object(u.jsxs)("div",{className:"product__info",children:[Object(u.jsx)("p",{className:"info__name",children:c}),Object(u.jsxs)("p",{className:" info__description",children:[s.substring(0,100),"..."]}),Object(u.jsxs)("p",{className:"info__price",children:["$",a]}),Object(u.jsx)(o.b,{to:"/product/".concat(n),className:"info__button",children:" View "})]})]})},m=c(12),j=c(18),b="GET_PRODUCTS_REQUEST",f="GET_PRODUCTS_SUCCESS",h="GET_PRODUCTS_FAIL",x="GET_PRODUCT_DETAILS_REQUEST",g="GET_PRODUCT_DETAILS_SUCCESS",O="GET_PRODUCT_DETAILS_FAIL",v="GET_PRODUCT_DETAILS_RESET",_=c(22),w=c.n(_),y=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t.getProducts})),c=e.products,s=e.loading,n=e.error;return console.log("Home Screen products ",c),Object(a.useEffect)((function(){t(function(){var t=Object(j.a)(Object(m.a)().mark((function t(e){var c,a;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:b}),t.next=4,w.a.get("/api/products");case 4:c=t.sent,a=c.data,e({type:f,payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e({type:h,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(u.jsxs)("div",{className:"homescreen",children:[Object(u.jsx)("h2",{className:"homescreen__title",children:" Latest Products"}),Object(u.jsx)("div",{className:"homescreen__products",children:s?Object(u.jsx)("h2",{children:"Loading..."}):n?Object(u.jsx)("h2",{children:n}):c.map((function(t){return Object(u.jsx)(p,{productId:t._id,name:t.name,price:t.price,description:t.description,imageUrl:t.imageUrl},t._id)}))})]})},k=c(14),S=(c(76),"ADD_TO_CART"),I="REMOVE_FROM_CART",D={name:"Amazon Alexa #Static",description:"It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",price:50,countInStock:25,id:1,imageUrl:"https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"},N=[{name:"Amazon Alexa #Static",description:"It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",price:50,countInStock:25,id:1,imageUrl:"https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"},{name:"Audio Technica Headphones #Static",description:"It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",price:233,countInStock:4,id:2,imageUrl:"https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Cannon EOS-1D #Static",description:"It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",price:1300,countInStock:5,id:3,imageUrl:"https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Iphone 12 #Static",description:"It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",price:1099,countInStock:10,id:4,imageUrl:"https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"},{name:"JBL FLIP 4 #Static",description:"It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",price:140,countInStock:10,id:5,imageUrl:"https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"},{name:"PlayStation 5 #Static",description:"It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",price:499,countInStock:15,id:1,imageUrl:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"}],A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return{loading:!0,products:[]};case f:return{loading:!1,products:e.payload};case h:return{loading:!1,products:N};default:return t}},C=function(t,e){return function(){var t=Object(j.a)(Object(m.a)().mark((function t(c,a){var s;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:S,payload:{product:(s=D)._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:e}}),localStorage.setItem("cart",JSON.stringify(a().cart.cartItems));case 3:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()},H=function(t){t.match;var e=t.history;console.log("test");var c=Object(a.useState)(1),s=Object(r.a)(c,2),n=s[0],i=s[1],o=Object(d.b)(),l=Object(d.c)((function(t){return t.getProductDetails})),p=l.loading,m=l.error,j=l.product;console.log("product: ",j),console.log("product details: ",l);return Object(u.jsx)("div",{className:"productscreen",children:p?Object(u.jsx)("h2",{children:"Loading..."}):m?Object(u.jsx)("h2",{children:m}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"productscreen__left",children:[Object(u.jsx)("div",{className:"left__image",children:Object(u.jsx)("img",{src:j.imageUrl,alt:"product name"})}),Object(u.jsxs)("div",{className:"left__info",children:[Object(u.jsx)("p",{className:"left__name",children:j.name}),Object(u.jsxs)("p",{children:["Price: $",j.price]}),Object(u.jsxs)("p",{children:["Description: $",j.description]})]})]}),Object(u.jsx)("div",{className:"productscreen__right",children:Object(u.jsxs)("div",{className:"right__info",children:[Object(u.jsxs)("p",{children:["Price: ",Object(u.jsxs)("span",{children:["$",j.price]})]}),Object(u.jsxs)("p",{children:["Status: ",Object(u.jsx)("span",{children:j.countInStock>0?"In Stock":"Out of Stock"})]}),Object(u.jsxs)("p",{children:["Qty",Object(u.jsx)("select",{value:n,onChange:function(t){return i(t.target.value)},children:Object(k.a)(Array(j.countInStock).keys()).map((function(t){return Object(u.jsx)("option",{value:t+1,children:t+1},t+1)}))})]}),Object(u.jsx)("p",{children:Object(u.jsx)("button",{type:"button",onClick:function(){console.log("product id",j._id),console.log("qty ",n),o(C(j._id,n)),e.push("/cart")},children:"Add to Cart"})})]})})]})})},M=(c(77),c(78),function(t){var e=t.item,c=t.qtyChangeHandler,a=t.removeHandler;return Object(u.jsxs)("div",{className:"cartitem",children:[Object(u.jsx)("div",{className:"cartitem__image",children:Object(u.jsx)("img",{src:e.imageUrl,alt:e.name})}),Object(u.jsx)(o.b,{to:"product/".concat(e.product),className:"cartitem__name",children:Object(u.jsx)("p",{children:e.name})}),Object(u.jsxs)("p",{className:"cartitem__price",children:["$",e.price]}),Object(u.jsx)("select",{className:"cartitem__select",value:e.qty,onChange:function(t){return c(e.product,t.target.value)},children:Object(k.a)(Array(e.countInStock).keys()).map((function(t){return Object(u.jsx)("option",{value:t+1,children:t+1},t+1)}))}),Object(u.jsx)("button",{className:"cartitem__deleteBtn",onClick:function(){return a(e.product)},children:Object(u.jsx)("i",{className:"fas fa-trash"})})]})}),T=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t.cart})).cartItems,c=function(e,c){t(C(0,c))},a=function(e){t(function(t){return function(e,c){e({type:I,payload:t}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(e))};return Object(u.jsxs)("div",{className:"cartscreen",children:[Object(u.jsxs)("div",{className:"cartscreen__left",children:[Object(u.jsx)("h2",{children:"Shopping cart"}),0===e.length?Object(u.jsxs)("div",{children:["Your cart is empty ",Object(u.jsx)(o.b,{to:"/",children:" Go Back"})]}):e.map((function(t){return Object(u.jsx)(M,{item:t,qtyChangeHandler:c,removeHandler:a},t.product)}))]}),Object(u.jsxs)("div",{className:"cartscreen__right",children:[Object(u.jsxs)("div",{className:"cartscreen__info",children:[Object(u.jsxs)("p",{children:["Subtotal (",e.reduce((function(t,e){return Number(e.qty)+t}),0),") items"]}),Object(u.jsxs)("p",{children:["$",e.reduce((function(t,e){return e.price*e.qty+t}),0).toFixed(2)]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{children:"Proceed to Checkout"})})]})]})},U=(c(79),function(t){var e=t.click;Object(d.c)((function(t){return t.cart})).cartItems;return Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)("div",{className:"navbar__logo",children:Object(u.jsx)("h2",{children:" Juice Bar Shopping Cart"})}),Object(u.jsxs)("ul",{className:"navbar__links",children:[Object(u.jsx)("li",{children:Object(u.jsxs)(o.b,{to:"/cart",className:"cart__link",children:[Object(u.jsx)("i",{className:"fas fa-shopping-cart",children:"  "}),Object(u.jsxs)("span",{children:["Cart",Object(u.jsx)("span",{className:"cartlogo_badge",children:"0"})]})]})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/",children:"Shop"})})]}),Object(u.jsxs)("div",{className:"hamburger__menu",onClick:e,children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})]})}),E=(c(80),function(t){var e=t.show,c=t.click;return e&&Object(u.jsx)("div",{className:"backdrop",onClick:c})}),G=(c(81),function(t){var e=t.show,c=t.click,a=["sidedrawer"];e&&a.push("show");Object(d.c)((function(t){return t.cart})).cartItems;return Object(u.jsx)("div",{className:a.join(" "),children:Object(u.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(u.jsx)("li",{children:Object(u.jsxs)(o.b,{to:"/cart",children:[Object(u.jsx)("i",{className:"fas fa-shopping-cart"}),Object(u.jsxs)("span",{children:["Cart",Object(u.jsx)("span",{className:"sidedrawer__cartbadge",children:"0"})]})]})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/",children:"Shop"})})]})})});var B=function(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),c=e[0],s=e[1];return Object(u.jsxs)(o.a,{basename:"/juiceshop-frontend",children:[Object(u.jsx)(U,{click:function(){return s(!0)}}),Object(u.jsx)(G,{show:c,click:function(){return s(!1)}}),Object(u.jsx)(E,{show:c,click:function(){return s(!1)}}),Object(u.jsx)("main",{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(u.jsx)(l.a,{exact:!0,path:"/product/:id",component:H}),Object(u.jsx)(l.a,{exact:!0,path:"/cart",component:T})]})})]})},P=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(e){var c=e.getCLS,a=e.getFID,s=e.getFCP,n=e.getLCP,i=e.getTTFB;c(t),a(t),s(t),n(t),i(t)}))},q=c(19),R=c(38),L=c(37),F=c(11),V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:var c=e.payload,a=t.cartItems.find((function(t){return t.product===c.product}));return a?Object(F.a)(Object(F.a)({},t),{},{cartItems:t.cartItems.map((function(t){return t.product===a.product?c:t}))}):Object(F.a)(Object(F.a)({},t),{},{cartItems:[].concat(Object(k.a)(t.cartItems),[c])});case I:return Object(F.a)(Object(F.a)({},t),{},{cartItems:t.cartItems.filter((function(t){return t.product!==e.payload}))});default:return t}},W=Object(q.combineReducers)({cart:V,getProducts:A,getProductDetails:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:D},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return{loading:!0,product:{}};case g:return{loading:!1,product:e.payload};case O:return{loading:!1,product:{name:"Amazon Alexa #Failed",description:"It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",price:50,countInStock:25,id:1,imageUrl:"https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"}};case v:return{product:[]};default:return t}}}),Y=[R.a],X=(localStorage.getItem("cart")&&JSON.parse(localStorage.getItem("cart")),Object(q.createStore)(W,{cart:{cartItems:[]}},Object(L.composeWithDevTools)(q.applyMiddleware.apply(void 0,Y))));i.a.render(Object(u.jsx)(d.a,{store:X,children:Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(B,{})})}),document.getElementById("root")),P()}},[[82,1,2]]]);
//# sourceMappingURL=main.d54a8b9f.chunk.js.map