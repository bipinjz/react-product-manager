(this["webpackJsonpproduct-manager-dashboard-react"]=this["webpackJsonpproduct-manager-dashboard-react"]||[]).push([[0],{163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),s=a.n(o),l=a(21),i=a(26),c=(a(91),a(92),a(93),a(94),a(95),a(7)),p=a(8),m=a(10),u=a(9),d=a(41),h=a(172),f=a(164),g=a(165),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,""!==this.props.userToken?r.a.createElement(f.a,{pullRight:!0},r.a.createElement(g.a,{eventKey:3,onClick:function(){return window.location.reload()}},"Log out")):"")}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).mobileSidebarToggle=n.mobileSidebarToggle.bind(Object(d.a)(n)),n.state={sidebarExists:!1},n}return Object(p.a)(a,[{key:"mobileSidebarToggle",value:function(e){!1===this.state.sidebarExists&&this.setState({sidebarExists:!0}),e.preventDefault(),document.documentElement.classList.toggle("nav-open");var t=document.createElement("div");t.id="bodyClick",t.onclick=function(){this.parentElement.removeChild(this),document.documentElement.classList.toggle("nav-open")},document.body.appendChild(t)}},{key:"render",value:function(){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(h.a.Header,null,r.a.createElement(h.a.Brand,null,r.a.createElement("a",{href:"#pablo"},this.props.brandText)),r.a.createElement(h.a.Toggle,{onClick:this.mobileSidebarToggle})),r.a.createElement(h.a.Collapse,null,r.a.createElement(b,{userToken:this.props.userToken})))}}]),a}(n.Component),v=a(80),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(v.a,{fluid:!0},r.a.createElement("p",{className:"copyright pull-right"},"\xa9 ",(new Date).getFullYear()," ")))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={width:window.innerWidth},n}return Object(p.a)(a,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"updateDimensions",value:function(){this.setState({width:window.innerWidth})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"sidebar",className:"sidebar","data-color":this.props.color,"data-image":this.props.image},(this.props.hasImage,null),r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"/",className:"simple-text logo-normal"},"Product Manager")),r.a.createElement("div",{className:"sidebar-wrapper"},r.a.createElement("ul",{className:"nav"},this.state.width<=991?r.a.createElement(b,{userToken:this.props.userToken}):null,this.props.routes.filter((function(e){return"Login"!==e.name&&"Edit Product"!==e.name})).map((function(t,a){return t.redirect?null:r.a.createElement("li",{className:t.upgrade?"active active-pro":e.activeRoute(t.layout+t.path),key:a},r.a.createElement(l.c,{to:t.layout+t.path,className:"nav-link",activeClassName:"active"},r.a.createElement("i",{className:t.icon}),r.a.createElement("p",null,t.name)))})))))}}]),a}(n.Component),x=a(23),w=a.n(x),j=a(28),C=a(168),O=a(170),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"+(this.props.plain?" card-plain":"")},r.a.createElement("div",{className:"header"+(this.props.hCenter?" text-center":"")},r.a.createElement("h4",{className:"title"},this.props.title),r.a.createElement("p",{className:"category"},this.props.category)),r.a.createElement("div",{className:"content"+(this.props.ctAllIcons?" all-icons":"")+(this.props.ctTableFullWidth?" table-full-width":"")+(this.props.ctTableResponsive?" table-responsive":"")+(this.props.ctTableUpgrade?" table-upgrade":"")},this.props.content))}}]),a}(n.Component),T=S,N=a(43),L=a(166),P=a(167),I=a(173);function F(e){var t=e.label,a=Object(N.a)(e,["label"]);return r.a.createElement(L.a,null,r.a.createElement(P.a,null,t),r.a.createElement(I.a,a))}var R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.ncols.length;t++)e.push(r.a.createElement("div",{key:t,className:this.props.ncols[t]},r.a.createElement(F,this.props.properties[t])));return r.a.createElement(C.a,null,e)}}]),a}(n.Component),D=a(169),A=a(5),B=a.n(A),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.fill,a=e.simple,n=e.pullRight,o=e.round,s=e.block,l=Object(N.a)(e,["fill","simple","pullRight","round","block"]),i=B()({"btn-fill":t,"btn-simple":a,"pull-right":n,"btn-block":s,"btn-round":o});return r.a.createElement(D.a,Object.assign({className:i},l))}}]),a}(n.Component),V=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1},n}return Object(p.a)(a,[{key:"login",value:function(){var e=this;fetch("https://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/jwt-auth/v1/token?username=reacteditor&password=kErwI8At5%A)YsrAkCMxi!!p",{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(){var t=Object(j.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.json();case 2:if(n=t.sent,e.props.getToken(n),a.ok){t.next=7;break}return r=n&&n.message||a.status,t.abrupt("return",Promise.reject(r));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.error("There was an error!",e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content"},r.a.createElement(v.a,{fluid:!0},r.a.createElement(C.a,null,r.a.createElement(O.a,{md:8},r.a.createElement(S,{title:"Login",content:r.a.createElement("form",null,r.a.createElement(R,{ncols:["col-md-12"],properties:[{label:"Username",type:"text",bsClass:"form-control",placeholder:"Enter Username",defaultValue:"reacteditor"}]}),r.a.createElement(R,{ncols:["col-md-6"],properties:[{label:"Password",type:"password",bsClass:"form-control",placeholder:"Enter password",defaultValue:"************"}]}),r.a.createElement(M,{bsStyle:"info",onClick:function(){return e.login()},pullRight:!0,fill:!0},"Login"),r.a.createElement("div",{className:"clearfix"}))})))))}}]),a}(n.Component),W=a(84),z=a.n(W),_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card card-stats"},r.a.createElement("div",{className:"content"},r.a.createElement(C.a,null,r.a.createElement(O.a,{xs:5},r.a.createElement("div",{className:"icon-big text-center icon-warning"},this.props.bigIcon)),r.a.createElement(O.a,{xs:7},r.a.createElement("div",{className:"numbers"},r.a.createElement("p",null,this.props.statsText),this.props.statsValue))),r.a.createElement("div",{className:"footer"},r.a.createElement("hr",null),r.a.createElement("div",{className:"stats"},this.props.statsIcon," ",this.props.statsIconText))))}}]),a}(n.Component),H=a(22),J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getProducts=function(){fetch("https://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/").then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({isLoaded:!0,productsCount:e.length,products:e})}),(function(e){n.setState({isLoaded:!0,error:e})}))},n.state={productsCount:"",products:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"createLegend",value:function(e){for(var t=[],a=0;a<e.names.length;a++){var n="fa fa-circle text-"+e.types[a];t.push(r.a.createElement("i",{className:n,key:a})),t.push(" "),t.push(e.names[a])}return t}},{key:"getProductList",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement(v.a,{fluid:!0},r.a.createElement(C.a,null,r.a.createElement(O.a,{lg:3,sm:6},r.a.createElement(_,{bigIcon:r.a.createElement("i",{className:"fa fa-list text-info"}),statsText:"Products",statsValue:this.state.productsCount,statsIcon:r.a.createElement("i",{className:"fa fa-chevron-right"}),statsIconText:r.a.createElement(l.b,{to:"/admin/productsList"},"Manage All Products")})),r.a.createElement(O.a,{lg:3,sm:6},r.a.createElement(_,{bigIcon:r.a.createElement("i",{className:"pe-7s-loop text-warning"}),statsText:"Campaigns",statsValue:"3",statsIcon:r.a.createElement("i",{className:"fa fa-chevron-right"}),statsIconText:r.a.createElement(l.b,{to:"/admin/campaignList"},"Manage All Compaigns")})),r.a.createElement(O.a,{lg:3,sm:6},r.a.createElement(_,{bigIcon:r.a.createElement("i",{className:"fa fa-check-circle text-success"}),statsText:"Completed ",statsValue:"2",statsIcon:r.a.createElement("i",{className:"fa fa-chevron-right"}),statsIconText:"Details"})),r.a.createElement(O.a,{lg:3,sm:6},r.a.createElement(_,{bigIcon:r.a.createElement("i",{className:"fa fa-calendar-check-o text-danger"}),statsText:"Scheduled",statsValue:"1",statsIcon:r.a.createElement("i",{className:"fa fa-chevron-right"}),statsIconText:"Details"}))),r.a.createElement(C.a,null,r.a.createElement(O.a,{md:4},r.a.createElement(S,{title:"Products",category:"",stats:"Updated 1 sec ago",statsIcon:"fa fa-history",content:r.a.createElement("div",{className:"table-full-width"},r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,this.state.products.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.title.rendered))})))))})),r.a.createElement(O.a,{md:8},r.a.createElement(S,{id:"chartActivity",title:"Visits",category:"",stats:"",statsIcon:"fa fa-check",content:r.a.createElement("div",{className:"ct-chart"},r.a.createElement(z.a,{data:H.dataBar,type:"Bar",options:H.optionsBar,responsiveOptions:H.responsiveBar})),legend:r.a.createElement("div",{className:"legend"},this.createLegend(H.legendBar))})))))}}]),a}(n.Component),U=a(171),X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).deleteProduct=function(e,t){if(t.preventDefault(),window.confirm("Are you sure?")){var a=n.props.userToken;fetch("http://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/"+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a}}).then((function(){n.getProducts()})).catch((function(e){console.error("There was an error!!",e),alert(e)}))}},n.editProduct=function(e,t){t.preventDefault()},n.getProducts=function(){fetch("https://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/").then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,items:e})}),(function(e){n.setState({isLoaded:!0,error:e})}))},n.state={error:null,isLoaded:!1,items:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,o=t.items;return a?r.a.createElement("div",null,"Error: ",a.message):n?r.a.createElement("div",{className:"content"},r.a.createElement(v.a,{fluid:!0},r.a.createElement(C.a,null,r.a.createElement(O.a,{md:12},r.a.createElement(T,{title:"Products",category:"",ctTableFullWidth:!0,ctTableResponsive:!0,content:r.a.createElement(U.a,{striped:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,H.thArray.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,o.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,r.a.createElement("img",{alt:"",src:t.acf.image,style:{width:"100px",height:"auto"}})),r.a.createElement("td",null,t.title.rendered),r.a.createElement("td",null,t.acf.interest_rate),r.a.createElement("td",null,t.acf.comparison_rate),r.a.createElement("td",null,r.a.createElement(l.b,{to:{pathname:"/admin/editProduct/",state:{id:t.id}}}," Edit  "),r.a.createElement("a",{href:"/",onClick:function(a){return e.deleteProduct(t.id,a)}},"Delete")))}))))}))))):r.a.createElement("div",{className:"content"},r.a.createElement(v.a,{fluid:!0},r.a.createElement(C.a,null,r.a.createElement(O.a,{md:12},r.a.createElement("div",{className:"card",style:{minHeight:"150px"}},r.a.createElement("div",{className:"header"},r.a.createElement("h4",{className:"title"},"Products"),r.a.createElement("p",{className:"category"})),r.a.createElement("div",{style:{paddingLeft:"15px",paddingTop:"5px"}},r.a.createElement("i",{className:"fa fa-spinner  fa-spin"})))))))}}]),a}(n.Component),Y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card card-user"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:this.props.bgImage,alt:"..."})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"author"},r.a.createElement("a",{href:"#pablo"},r.a.createElement("h4",{className:"title"},this.props.name,r.a.createElement("br",null),r.a.createElement("small",null,this.props.userName)))),r.a.createElement("p",{className:"description text-center"},this.props.description)),r.a.createElement("hr",null),r.a.createElement("div",{className:"text-center"},this.props.socials))}}]),a}(n.Component),G=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,title:"",intRate:"",compRate:"",image:"http://bipinbajracharya.com/portfolio/react-product-manager-admin/files/2020/11/fixed-rate-home-loan-oo.jpg",desc:"",viewLink:"",applyLink:""},n}return Object(p.a)(a,[{key:"updateForm",value:function(e,t){"title"===t&&this.setState({title:e.target.value}),"intRate"===t&&this.setState({intRate:e.target.value}),"compRate"===t&&this.setState({compRate:e.target.value}),"image"===t&&this.setState({image:e.target.value}),"desc"===t&&this.setState({desc:e.target.value}),"viewLink"===t&&this.setState({viewLink:e.target.value}),"applyLink"===t&&this.setState({applyLink:e.target.value})}},{key:"savePost",value:function(e,t,a,n,r,o){var s=this,l={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.props.userToken},body:JSON.stringify({title:e,status:"publish",fields:{comparison_rate:a,interest_rate:t,image:n,view_link:r,label_link:o}})};fetch("https://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/",l).then(function(){var e=Object(j.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(a=e.sent,t.ok){e.next=6;break}return n=a&&a.message||t.status,e.abrupt("return",Promise.reject(n));case 6:window.alert("Added!"),s.props.history.push("/admin/productsList");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error("There was an error!",e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content"},r.a.createElement(v.a,{fluid:!0},r.a.createElement(C.a,null,r.a.createElement(O.a,{md:8},r.a.createElement(S,{title:"Add Product",content:r.a.createElement("form",null,r.a.createElement(R,{ncols:["col-md-12"],properties:[{label:"Title",type:"text",bsClass:"form-control",placeholder:"Enter Product Title",defaultValue:"",onChange:function(t){return e.updateForm(t,"title")}}]}),r.a.createElement(C.a,null,r.a.createElement(O.a,{md:12},r.a.createElement(L.a,{controlId:"formControlsTextarea"},r.a.createElement(P.a,null,"Image"),r.a.createElement("select",{className:"form-control",onChange:function(t){return e.updateForm(t,"image")}},r.a.createElement("option",{value:"http://bipinbajracharya.com/portfolio/react-product-manager-admin/files/2020/11/fixed-rate-home-loan-oo.jpg"},"Image 1"),r.a.createElement("option",{value:"http://bipinbajracharya.com/portfolio/react-product-manager-admin/files/2020/11/media-2046-personal-loan-summary-page.jpg"},"Image 2"),r.a.createElement("option",{value:"http://bipinbajracharya.com/portfolio/react-product-manager-admin/files/2020/10/loan.jpg"},"Image 3"))))),r.a.createElement(R,{ncols:["col-md-6"],properties:[{label:"Interest Rate",type:"text",bsClass:"form-control",placeholder:"Enter Interest Rate",defaultValue:"",onChange:function(t){return e.updateForm(t,"intRate")}}]}),r.a.createElement(R,{ncols:["col-md-6"],properties:[{label:"Comparison Rate",type:"text",bsClass:"form-control",placeholder:"Enter Comparison Rate",defaultValue:"",onChange:function(t){return e.updateForm(t,"compRate")}}]}),r.a.createElement(C.a,null,r.a.createElement(O.a,{md:12},r.a.createElement(L.a,{controlId:"formControlsTextarea"},r.a.createElement(P.a,null,"Description"),r.a.createElement(I.a,{rows:"5",componentClass:"textarea",bsClass:"form-control",placeholder:"Enter Description",defaultValue:"",onChange:function(t){return e.updateForm(t,"desc")}})))),r.a.createElement(R,{ncols:["col-md-6"],properties:[{label:"Apply Link",type:"text",bsClass:"form-control",placeholder:"Enter Apply Link",defaultValue:"",onChange:function(t){return e.updateForm(t,"applyLink")}}]}),r.a.createElement(R,{ncols:["col-md-6"],properties:[{label:"Learn More Link",type:"text",bsClass:"form-control",placeholder:"Enter Learn More",defaultValue:"",onChange:function(t){return e.updateForm(t,"viewLink")}}]}),r.a.createElement(M,{bsStyle:"info",onClick:function(){return e.savePost(e.state.title,e.state.intRate,e.state.compRate,e.state.image,e.state.viewLink,e.state.applyLink)},pullRight:!0,fill:!0},"Add Product"),r.a.createElement("div",{className:"clearfix"}))})),r.a.createElement(O.a,{md:4},r.a.createElement(Y,{bgImage:this.state.image,avatar:"",name:this.state.title,userName:"",description:r.a.createElement("span",null,r.a.createElement("span",null,"Int Rate: ",this.state.intRate," % p.a ",r.a.createElement("br",null)),r.a.createElement("span",null,"Comp Rate: ",this.state.compRate," % p.a ",r.a.createElement("br",null)),r.a.createElement("span",null,this.state.desc)),socials:r.a.createElement("div",null,r.a.createElement(M,{simple:!0},"View Details"),r.a.createElement(M,{simple:!0},"Apply"))})))))}}]),a}(n.Component),q=a(85),K=a(86),Q=a.n(K),Z=[{path:"/dashboard",name:"Dashboard",icon:"fa fa-pie-chart",component:J,layout:"/admin"},{path:"/productsList",name:"Products",icon:"fa fa-list",component:X,layout:"/admin"},{path:"/addProduct",name:"Add Product",icon:"pe-7s-portfolio",component:G,layout:"/admin"},{path:"/editProduct",name:"Edit Product",icon:"fa fa-pencil-square-o",component:function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getProducts=function(){var e=n.props.location.state.id;fetch("https://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/"+e).then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,title:e.title.rendered,desc:e.content.rendered,intRate:e.acf.interest_rate,compRate:e.acf.comparison_rate,image:e.acf.image,viewLink:e.acf.view_link,applyLink:e.acf.label_link})}),(function(e){n.setState({isLoaded:!0,error:e})}))},n.state={error:null,isLoaded:!1,title:"",intRate:"",compRate:"",image:"",desc:"",viewLink:"",applyLink:""},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"updateForm",value:function(e,t){console.log(t),""!==t&&this.setState(Object(q.a)({},t,e.target.value))}},{key:"savePost",value:function(e,t,a,n,r,o){var s=this,l=this.props.location.state.id,i={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.props.userToken},body:JSON.stringify({title:e,status:"publish",fields:{comparison_rate:a,interest_rate:t,image:n,view_link:r,label_link:o}})};fetch("https://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/"+l,i).then(function(){var e=Object(j.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(a=e.sent,t.ok){e.next=6;break}return n=a&&a.message||t.status,e.abrupt("return",Promise.reject(n));case 6:window.alert("Updated!"),s.props.history.push("/admin/productsList");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error("There was an error!",e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content"},r.a.createElement(v.a,{fluid:!0},r.a.createElement(C.a,null,r.a.createElement(O.a,{md:8},r.a.createElement(S,{title:"Edit Product",content:r.a.createElement("form",null,r.a.createElement(R,{ncols:["col-md-12"],properties:[{label:"Title",type:"text",bsClass:"form-control",placeholder:"",defaultValue:this.state.title,onChange:function(t){return e.updateForm(t,"title")}}]}),r.a.createElement(C.a,null,r.a.createElement(O.a,{md:12},r.a.createElement(L.a,{controlId:"formControlsTextarea"},r.a.createElement(P.a,null,"Image"),r.a.createElement("select",{className:"form-control",onChange:function(t){return e.updateForm(t,"image")}},r.a.createElement("option",{value:"http://bipinbajracharya.com/portfolio/react-product-manager-admin/files/2020/11/fixed-rate-home-loan-oo.jpg"},"Image 1"),r.a.createElement("option",{value:"http://bipinbajracharya.com/portfolio/react-product-manager-admin/files/2020/11/media-2046-personal-loan-summary-page.jpg"},"Image 2"),r.a.createElement("option",{value:"http://bipinbajracharya.com/portfolio/react-product-manager-admin/files/2020/10/loan.jpg"},"Image 3"))))),r.a.createElement(R,{ncols:["col-md-6"],properties:[{label:"Interest Rate",type:"text",bsClass:"form-control",placeholder:"",defaultValue:this.state.intRate,onChange:function(t){return e.updateForm(t,"intRate")}}]}),r.a.createElement(R,{ncols:["col-md-6"],properties:[{label:"Comparison Rate",type:"text",bsClass:"form-control",placeholder:"",defaultValue:this.state.compRate,onChange:function(t){return e.updateForm(t,"compRate")}}]}),r.a.createElement(C.a,null,r.a.createElement(O.a,{md:12},r.a.createElement(L.a,{controlId:"formControlsTextarea"},r.a.createElement(P.a,null,"Description"),r.a.createElement("textarea",{id:"noter-text-area",className:"form-control",rows:"5",name:"textarea",onChange:function(t){return e.updateForm(t,"desc")},value:this.state.desc})))),r.a.createElement(R,{ncols:["col-md-12"],properties:[{label:"Apply Link",type:"text",bsClass:"form-control",placeholder:"",defaultValue:this.state.applyLink,onChange:function(t){return e.updateForm(t,"applyLink")}}]}),r.a.createElement(R,{ncols:["col-md-12"],properties:[{label:"View Link",type:"text",bsClass:"form-control",placeholder:"",defaultValue:this.state.viewLink,onChange:function(t){return e.updateForm(t,"viewLink")}}]}),r.a.createElement(M,{bsStyle:"info",onClick:function(){return e.savePost(e.state.title,e.state.intRate,e.state.compRate,e.state.image,e.state.viewLink,e.state.applyLink)},pullRight:!0,fill:!0},"Save Product"),r.a.createElement("div",{className:"clearfix"}))})),r.a.createElement(O.a,{md:4},r.a.createElement(Y,{bgImage:this.state.image,avatar:"",name:this.state.title,userName:"",description:r.a.createElement("span",null,Q()(this.state.desc),r.a.createElement("br",null),"Int: ",this.state.intRate," ",r.a.createElement("br",null),"Comp: ",this.state.compRate," ",r.a.createElement("br",null)),socials:r.a.createElement("div",null,r.a.createElement("a",{href:this.state.viewLink,target:"_blank",rel:"noopener noreferrer"},"View Details")," \xa0 \xa0",r.a.createElement("a",{href:this.state.applyLink,target:"_blank",rel:"noopener noreferrer"},"Apply"))})))))}}]),a}(n.Component),layout:"/admin"},{path:"/campaignList",name:"Campaign",icon:"pe-7s-loop",component:function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).deleteProduct=function(e,t){if(t.preventDefault(),window.confirm("Are you sure?")){var a=n.props.userToken;fetch("http://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/"+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a}}).then((function(){n.getProducts()})).catch((function(e){console.error("There was an error!",e),alert(e)}))}},n.editProduct=function(e,t){t.preventDefault()},n.getProducts=function(){fetch("https://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/").then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,items:e})}),(function(e){n.setState({isLoaded:!0,error:e})}))},n.state={error:null,isLoaded:!1,items:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{className:"content"},r.a.createElement(v.a,{fluid:!0},r.a.createElement(C.a,null,r.a.createElement(O.a,{md:12},r.a.createElement(T,{title:"Campaigns",category:"",ctTableFullWidth:!0,ctTableResponsive:!0,content:r.a.createElement(U.a,{striped:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,H.cthArray.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,H.ctdArray.map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,t){return r.a.createElement("td",{key:t},e)})))}))))}))))):r.a.createElement("div",{className:"content"},r.a.createElement(v.a,{fluid:!0},r.a.createElement(C.a,null,r.a.createElement(O.a,{md:12},r.a.createElement("div",{className:"card",style:{minHeight:"150px"}},r.a.createElement("div",{className:"header"},r.a.createElement("h4",{className:"title"},"Products"),r.a.createElement("p",{className:"category"})),r.a.createElement("div",{style:{paddingLeft:"15px",paddingTop:"5px"}},r.a.createElement("i",{className:"fa fa-spinner fa-spin"})))))))}}]),a}(n.Component),layout:"/admin"},{path:"/login",name:"Login",icon:"fa fa-sign-in",component:V,layout:"/admin"}],$=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleNotificationClick=function(e){},n.getRoutes=function(e){return e.map((function(e,t){return"/admin"===e.layout?r.a.createElement(i.b,{path:e.layout+e.path,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{handleClick:n.handleNotificationClick,userToken:n.state.userToken}))},key:t}):null}))},n.getBrandText=function(e){for(var t=0;t<Z.length;t++)if(-1!==n.props.location.pathname.indexOf(Z[t].layout+Z[t].path))return Z[t].name;return"Brand"},n.handleImageClick=function(e){n.setState({image:e})},n.handleColorClick=function(e){n.setState({color:e})},n.handleHasImage=function(e){n.setState({hasImage:e})},n.handleFixedClick=function(){"dropdown"===n.state.fixedClasses?n.setState({fixedClasses:"dropdown show-dropdown open"}):n.setState({fixedClasses:"dropdown"})},n.getToken=function(e){n.setState({userToken:e.token}),n.setState({userName:e.user_display_name})},n.state={_notificationSystem:null,image:"",color:"black",hasImage:!0,fixedClasses:"dropdown show-dropdown open",userToken:"",userName:""},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.setState({_notificationSystem:this.refs.notificationSystem})}},{key:"componentDidUpdate",value:function(e){window.innerWidth<993&&e.history.location.pathname!==e.location.pathname&&-1!==document.documentElement.className.indexOf("nav-open")&&document.documentElement.classList.toggle("nav-open"),"PUSH"===e.history.action&&(document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0)}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(k,Object.assign({},this.props,{userToken:this.state.userToken,routes:Z,image:this.state.image,color:this.state.color,hasImage:this.state.hasImage})),r.a.createElement("div",{id:"main-panel",className:"main-panel",ref:"mainPanel"},r.a.createElement(E,Object.assign({},this.props,{brandText:this.getBrandText(this.props.location.pathname),userToken:this.state.userToken})),r.a.createElement(i.d,null,this.getRoutes(Z)),r.a.createElement(y,null)))}}]),a}(n.Component);s.a.render(r.a.createElement(l.a,{basename:"/",forceRefresh:"true"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/admin",render:function(e){return r.a.createElement($,e)}}),r.a.createElement(i.a,{from:"/",to:"/admin/dashboard"}))),document.getElementById("root"))},22:function(e,t){var a=window.screen.width>768?1*window.screen.width/3:window.screen.width,n={Wrapper:{},Containers:{DefaultStyle:{position:"fixed",width:a,padding:"10px 10px 10px 20px",zIndex:9998,WebkitBoxSizing:"",MozBoxSizing:"",boxSizing:"",height:"auto",display:"inline-block",border:"0",fontSize:"14px",WebkitFontSmoothing:"antialiased",fontFamily:'"Roboto","Helvetica Neue",Arial,sans-serif',fontWeight:"400",color:"#FFFFFF"},tl:{top:"0px",bottom:"auto",left:"0px",right:"auto"},tr:{top:"0px",bottom:"auto",left:"auto",right:"0px"},tc:{top:"0px",bottom:"auto",margin:"0 auto",left:"50%",marginLeft:-a/2},bl:{top:"auto",bottom:"0px",left:"0px",right:"auto"},br:{top:"auto",bottom:"0px",left:"auto",right:"0px"},bc:{top:"auto",bottom:"0px",margin:"0 auto",left:"50%",marginLeft:-a/2}},NotificationItem:{DefaultStyle:{position:"relative",width:"100%",cursor:"pointer",borderRadius:"4px",fontSize:"14px",margin:"10px 0 0",padding:"10px",display:"block",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",opacity:0,transition:"all 0.5s ease-in-out",WebkitTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)",willChange:"transform, opacity",isHidden:{opacity:0},isVisible:{opacity:1}},success:{borderTop:0,backgroundColor:"#a1e82c",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#fc727a",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffbc67",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,backgroundColor:"#63d8f1",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{fontSize:"30px",margin:"0",padding:0,fontWeight:"bold",color:"#FFFFFF",display:"block",left:"15px",position:"absolute",top:"50%",marginTop:"-15px"}},MessageWrapper:{DefaultStyle:{marginLeft:"55px",marginRight:"30px",padding:"0 12px 0 0",color:"#FFFFFF",maxWidthwidth:"89%"}},Dismiss:{DefaultStyle:{fontFamily:"inherit",fontSize:"21px",color:"#000",float:"right",position:"absolute",right:"10px",top:"50%",marginTop:"-13px",backgroundColor:"#FFFFFF",display:"block",borderRadius:"50%",opacity:".4",lineHeight:"11px",width:"25px",height:"25px",outline:"0 !important",textAlign:"center",padding:"6px 3px 3px 3px",fontWeight:"300",marginLeft:"65px"},success:{},error:{},warning:{},info:{}},Action:{DefaultStyle:{background:"#ffffff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#a1e82c",color:"#ffffff"},error:{backgroundColor:"#fc727a",color:"#ffffff"},warning:{backgroundColor:"#ffbc67",color:"#ffffff"},info:{backgroundColor:"#63d8f1",color:"#ffffff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}};e.exports={style:n,thArray:["ID","Image","Title","Interest Rate","Comparison Rate","Edit/Delete"],tdArray:[["1","Standard Home Loan","3.50% p.a","3.60% p.a",""],["2","Standard Variable Home Loan","3.50% p.a","3.60% p.a",""],["3","Fixed Rate Home Loan","3.50% p.a","3.60% p.a",""],["4","First Home Buyer Loan","3.50% p.a","3.60% p.a",""],["5","Inverster Loan","3.50% p.a","3.60% p.a",""]],cthArray:["ID","Title","Start Date","End Date","Status"],ctdArray:[["443","Plan Yourself Free","Jan 2021","--","Scheduled"],["304","What Would You Like The Power To Do?","Jan 2020","March 2020","Completed"],["295","Better Money Habits","Sep 2019","Dec 2019","Completed"]],iconsArray:["pe-7s-album","pe-7s-arc","pe-7s-back-2","pe-7s-bandaid","pe-7s-car","pe-7s-diamond","pe-7s-door-lock","pe-7s-eyedropper","pe-7s-female","pe-7s-gym","pe-7s-hammer","pe-7s-headphones","pe-7s-helm","pe-7s-hourglass","pe-7s-leaf","pe-7s-magic-wand","pe-7s-male","pe-7s-map-2","pe-7s-next-2","pe-7s-paint-bucket","pe-7s-pendrive","pe-7s-photo","pe-7s-piggy","pe-7s-plugin","pe-7s-refresh-2","pe-7s-rocket","pe-7s-settings","pe-7s-shield","pe-7s-smile","pe-7s-usb","pe-7s-vector","pe-7s-wine","pe-7s-cloud-upload","pe-7s-cash","pe-7s-close","pe-7s-bluetooth","pe-7s-cloud-download","pe-7s-way","pe-7s-close-circle","pe-7s-id","pe-7s-angle-up","pe-7s-wristwatch","pe-7s-angle-up-circle","pe-7s-world","pe-7s-angle-right","pe-7s-volume","pe-7s-angle-right-circle","pe-7s-users","pe-7s-angle-left","pe-7s-user-female","pe-7s-angle-left-circle","pe-7s-up-arrow","pe-7s-angle-down","pe-7s-switch","pe-7s-angle-down-circle","pe-7s-scissors","pe-7s-wallet","pe-7s-safe","pe-7s-volume2","pe-7s-volume1","pe-7s-voicemail","pe-7s-video","pe-7s-user","pe-7s-upload","pe-7s-unlock","pe-7s-umbrella","pe-7s-trash","pe-7s-tools","pe-7s-timer","pe-7s-ticket","pe-7s-target","pe-7s-sun","pe-7s-study","pe-7s-stopwatch","pe-7s-star","pe-7s-speaker","pe-7s-signal","pe-7s-shuffle","pe-7s-shopbag","pe-7s-share","pe-7s-server","pe-7s-search","pe-7s-film","pe-7s-science","pe-7s-disk","pe-7s-ribbon","pe-7s-repeat","pe-7s-refresh","pe-7s-add-user","pe-7s-refresh-cloud","pe-7s-paperclip","pe-7s-radio","pe-7s-note2","pe-7s-print","pe-7s-network","pe-7s-prev","pe-7s-mute","pe-7s-power","pe-7s-medal","pe-7s-portfolio","pe-7s-like2","pe-7s-plus","pe-7s-left-arrow","pe-7s-play","pe-7s-key","pe-7s-plane","pe-7s-joy","pe-7s-photo-gallery","pe-7s-pin","pe-7s-phone","pe-7s-plug","pe-7s-pen","pe-7s-right-arrow","pe-7s-paper-plane","pe-7s-delete-user","pe-7s-paint","pe-7s-bottom-arrow","pe-7s-notebook","pe-7s-note","pe-7s-next","pe-7s-news-paper","pe-7s-musiclist","pe-7s-music","pe-7s-mouse","pe-7s-more","pe-7s-moon","pe-7s-monitor","pe-7s-micro","pe-7s-menu","pe-7s-map","pe-7s-map-marker","pe-7s-mail","pe-7s-mail-open","pe-7s-mail-open-file","pe-7s-magnet","pe-7s-loop","pe-7s-look","pe-7s-lock","pe-7s-lintern","pe-7s-link","pe-7s-like","pe-7s-light","pe-7s-less","pe-7s-keypad","pe-7s-junk","pe-7s-info","pe-7s-home","pe-7s-help2","pe-7s-help1","pe-7s-graph3","pe-7s-graph2","pe-7s-graph1","pe-7s-graph","pe-7s-global","pe-7s-gleam","pe-7s-glasses","pe-7s-gift","pe-7s-folder","pe-7s-flag","pe-7s-filter","pe-7s-file","pe-7s-expand1","pe-7s-exapnd2","pe-7s-edit","pe-7s-drop","pe-7s-drawer","pe-7s-download","pe-7s-display2","pe-7s-display1","pe-7s-diskette","pe-7s-date","pe-7s-cup","pe-7s-culture","pe-7s-crop","pe-7s-credit","pe-7s-copy-file","pe-7s-config","pe-7s-compass","pe-7s-comment","pe-7s-coffee","pe-7s-cloud","pe-7s-clock","pe-7s-check","pe-7s-chat","pe-7s-cart","pe-7s-camera","pe-7s-call","pe-7s-calculator","pe-7s-browser","pe-7s-box2","pe-7s-box1","pe-7s-bookmarks","pe-7s-bicycle","pe-7s-bell","pe-7s-battery","pe-7s-ball","pe-7s-back","pe-7s-attention","pe-7s-anchor","pe-7s-albums","pe-7s-alarm","pe-7s-airplay"],dataPie:{labels:["40%","20%","40%"],series:[40,20,40]},legendPie:{names:["Open","Bounce","Unsubscribe"],types:["info","danger","warning"]},dataSales:{labels:["9:00AM","12:00AM","3:00PM","6:00PM","9:00PM","12:00PM","3:00AM","6:00AM"],series:[[287,385,490,492,554,586,698,695],[67,152,143,240,287,335,435,437],[23,113,67,108,190,239,307,308]]},optionsSales:{low:0,high:800,showArea:!1,height:"245px",axisX:{showGrid:!1},lineSmooth:!0,showLine:!0,showPoint:!0,fullWidth:!0,chartPadding:{right:50}},responsiveSales:[["screen and (max-width: 640px)",{axisX:{labelInterpolationFnc:function(e){return e[0]}}}]],legendSales:{names:["Open","Click","Click Second Time"],types:["info","danger","warning"]},dataBar:{labels:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[542,443,320,780,553,453,326,434,568,610,756,895]]},optionsBar:{seriesBarDistance:10,axisX:{showGrid:!1},height:"245px"},responsiveBar:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(e){return e[0]}}}]],legendBar:{names:["Visitors"],types:["info","danger"]}}},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[163,1,2]]]);
//# sourceMappingURL=main.bd97b94f.chunk.js.map