"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[116],{6839:function(e,a,t){t.d(a,{Z:function(){return s}});t(2791);var r=t(184),s=function(e){var a=e.url,t=e.titleButton,s=e.borderColor;return(0,r.jsx)(r.Fragment,{children:a?(0,r.jsx)("button",{className:"button-general rounded-5 px-4 py-2",style:{borderColor:s},children:(0,r.jsx)("a",{href:a,className:"text-white text-decoration-none z-1",children:t})}):(0,r.jsx)("button",{className:"button-general rounded-5 px-4 py-2",style:{borderColor:s},children:(0,r.jsx)("span",{className:"text-white text-decoration-none z-1",children:t})})})}},7973:function(e,a,t){t.d(a,{Z:function(){return m}});t(2791);var r=t(6839),s=t(1394),o=t(184),n=function(e){var a=e.imageUrl,t=e.borderColor,n=e.url;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.LG,{children:(0,o.jsxs)("article",{className:"d-block text-decoration-none text-center w-auto mx-0 z-1",children:[(0,o.jsx)("img",{className:"d-block mw-100 mx-auto w-auto",src:"https://respiraconhalls.com/peru"+a,alt:"fluye en la u"}),(0,o.jsx)(r.Z,{url:n,titleButton:"Leer m\xe1s",borderColor:t})]})})})},l=t(1116),i=t(8394),c=t(7022),d=t(9743),m=function(){var e="https://respiraconhalls.com/peru",a=(0,l.Z)().otherCategory;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("section",{className:"other-categories ff-gotham-medium",style:{background:a.firstColor},children:[(0,o.jsxs)("div",{className:"other-categories--title position-relative",style:{height:"200px",background:a.secondColor},children:[(0,o.jsx)(i.Z,{className:"text-center position-absolute top-50 start-50",children:(0,o.jsx)("img",{src:e+a.headerCategory,alt:"Otras categorias",className:"mw-100"})}),(0,o.jsx)("div",{style:{width:"100vw",height:"200px",clipPath:"polygon(0% 100%, 100% 0%, 100% 100%)",background:"linear-gradient(to right, ".concat(a.firstColor," 0%,  ").concat(a.firstColor," 100%)")}})]}),(0,o.jsx)(c.Z,{className:"pb-5",children:(0,o.jsxs)(d.Z,{className:"position-relative d-flex flex-column flex-lg-row justify-content-center gap-lg-5 mb-4",children:[(0,o.jsx)("div",{className:"overlay",children:(0,o.jsx)("img",{src:e+a.overlay,alt:"Pepitas flotantes",className:"floating-image mw-100 w-100 z-0 position-relative"})}),a.list?a.list.map((function(e){return(0,o.jsx)(n,{borderColor:a.borderColor,imageUrl:e.urlImage,url:e.url},e.url)})):null]})})]})})}},234:function(e,a,t){t.d(a,{Z:function(){return g}});var r=t(2791),s=t(5316),o=t(4165),n=t(5861),l=t(885),i=t(1116),c=t(1243).Z.create({baseURL:"https://respiraconhalls.com/proyecto/public/"}),d={register:function(){var e=(0,n.Z)((0,o.Z)().mark((function e(a){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.post("/api/store",a);case 3:return t=e.sent,localStorage.setItem("SIGN_STAR",!0),e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error fetching data from the JSON file");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}()},m=d,u=t(2041),p=function(){var e=(0,i.Z)().modal,a=(0,r.useState)(""),t=(0,l.Z)(a,2),s=t[0],c=t[1],d=(0,r.useState)(""),p=(0,l.Z)(d,2),h=p[0],g=p[1],f=(0,u.B)().handleClose,x=(0,r.useState)(null),v=(0,l.Z)(x,2),y=v[0],j=v[1],b=function(){var e=(0,n.Z)((0,o.Z)().mark((function e(a){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,m.register({email:s,name:h});case 4:f(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),j("Error en los datos, por favor completa todos los campos");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a){return e.apply(this,arguments)}}();return{handleSubmit:b,modal:e,email:s,name:h,setEmail:c,setName:g,error:y}},h=(t(9701),t(184)),g=function(){var e="https://respiraconhalls.com/peru",a=p(),t=a.handleSubmit,r=a.modal,o=a.email,n=a.name,l=a.setEmail,i=a.setName,c=a.error,d=(0,u.B)(),m=d.showModal,g=d.handleClose;return(0,h.jsx)("div",{children:(0,h.jsx)(s.Z,{show:m,className:"modal",style:{backgroundColor:r.primaryColor},onHide:function(){return g},contentClassName:"modal-content bg-transparent border-0 mb-5",dialogClassName:"modal-dialog modal-dialog-centered  modal-xl","aria-labelledby":"example-custom-modal-styling-title",children:(0,h.jsxs)("div",{tabIndex:"-1","aria-labelledby":"amor-astros-modalLabel","aria-hidden":"true",children:[(0,h.jsxs)("div",{className:"modal-header flex-row justify-content-center border-0 my-4 ",children:[(0,h.jsx)("div",{className:"modal-header-banner align-self-center",children:(0,h.jsx)("div",{className:"row justify-content-md-center",children:(0,h.jsxs)("div",{className:"col-sm-12 col-md-12 col-lg-12 col-xl-12",children:[(0,h.jsx)("img",{className:"d-block mw-100 mx-auto",src:e+r.headerImage,alt:"Respira y toma un impulso"}),(0,h.jsx)("p",{className:"my-4 ff-gotham-bold text-white",children:r.description})]})})}),(0,h.jsx)("img",{src:e+"/images/icons/close.svg",alt:"close button",onClick:g,className:"d-block align-self-baseline"})]}),(0,h.jsx)("form",{onSubmit:t,children:(0,h.jsxs)("div",{className:"modal-body bg-white p-4 rounded-4 mb-5",children:[(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-sm-12 col-md-6 col-lg-6 col-lg-x",children:[(0,h.jsx)("label",{htmlFor:"inputEmail4",className:"ms-2 text-start d-block form-label fs-6 fc-gray-soft",children:"Nombre:"}),(0,h.jsx)("input",{type:"text",style:{backgroundColor:r.inputColor},className:"form-control rounded-4",value:n,onChange:function(e){return i(e.target.value)},"aria-label":"First name"})]}),(0,h.jsxs)("div",{className:"col-sm-12 col-md-6 col-lg-6 col-lg-x",children:[(0,h.jsx)("label",{htmlFor:"inputEmail4",className:"ms-2 text-start d-block form-label fs-6 fc-gray-soft",children:"Email:"}),(0,h.jsx)("input",{type:"email",style:{backgroundColor:r.inputColor},className:"form-control rounded-4",value:o,onChange:function(e){return l(e.target.value)},"aria-label":"Email"})]})]}),(0,h.jsx)("div",{className:"row",children:(0,h.jsxs)("div",{className:"form-check d-flex justify-content-center gap-1 my-4",children:[(0,h.jsx)("input",{className:"form-check-input",type:"checkbox",id:"defaultCheck1"}),(0,h.jsx)("label",{className:"form-check-label fc-gray-soft",htmlFor:"defaultCheck1",v:!0,children:"Acepta t\xe9rminos y condiciones"})]})}),c&&(0,h.jsx)("div",{className:"row text-center",children:(0,h.jsx)("p",{className:"ff-gotham-bold",style:{color:"red",fontSize:"12px"},children:c})}),(0,h.jsx)("div",{className:"border-0 d-flex flex-row justify-content-center my-2 bg-transparent",children:(0,h.jsx)("button",{type:"submit",style:{backgroundColor:r.buttonColor},className:"d-block text-center text-white px-5 py-2 border-0 rounded-4",children:"Enviar"})})]})}),(0,h.jsx)("div",{className:"row halls-text text-start mt-5",children:(0,h.jsx)("a",{className:"navbar-brand",href:"/",children:(0,h.jsx)("img",{className:"w-auto mb-3 ",src:e+"/images/logos/halls-white.svg",alt:"Halls Logo"})})})]})})})}},4305:function(e,a,t){t.d(a,{Z:function(){return m}});var r=t(885),s=t(2791),o=t(4097),n=t.n(o),l=t(542),i=t(1394),c=t(184),d=function(e){var a=e.url;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.LG,{children:(0,c.jsxs)("picture",{className:"emoji",children:[(0,c.jsx)("source",{srcset:a,type:"image/webp"}),(0,c.jsx)("img",{src:"https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.gif",alt:"\ud83d\ude06"}),(0,c.jsx)("p",{className:"text-white fs-5 mt-5",children:"\xa1Pronto volveremos con m\xe1s consejos!"})]})})})},m=function(e){var a=e.conversations,t="https://respiraconhalls.com/peru",o=(0,l.TH)(),i=(0,s.useState)(!1),m=(0,r.Z)(i,2),u=m[0],p=m[1],h="/peru/fluye-en-la-u"===o.pathname?t+"/images/pages/purple/purple-x.svg":t+"/images/pages/red/pink-x.svg",g="/peru/fluye-en-la-u"===o.pathname?t+"/images/icons/person.png":t+"/images/icons/diamond.png";return(0,s.useEffect)((function(){var e=document.querySelector(".tinder"),a=document.querySelectorAll(".tinder--card"),t=document.getElementById("nope"),r=document.getElementById("love");function s(t,r){document.querySelectorAll(".tinder--card:not(.removed)").forEach((function(e,t){e.style.zIndex=a.length-t,e.style.transform="scale("+(20-t)/20+") translateY(-"+30*t+"px)",e.style.opacity=(10-t)/10})),e.classList.add("loaded")}function o(e){return function(a){var t=document.querySelectorAll(".tinder--card:not(.removed)"),r=1.5*document.body.clientWidth;if(!t.length||1===t.length)return document.querySelector(".tinder--cards").remove(),document.querySelector(".tinder--buttons").remove(),p(!0),!1;var o=t[0];o.classList.add("removed"),o.style.transform=e?"translate("+r+"px, -100px) rotate(-30deg)":"translate(-"+r+"px, -100px) rotate(30deg)",s(),a.preventDefault()}}a.forEach((function(a){var t=new(n())(a);t.on("pan",(function(e){a.classList.add("moving")})),t.on("pan",(function(a){if(0!==a.deltaX&&(0!==a.center.x||0!==a.center.y)){e.classList.toggle("tinder_love",a.deltaX>0),e.classList.toggle("tinder_nope",a.deltaX<0);var t=.03*a.deltaX*(a.deltaY/80);a.target.style.transform="translate("+a.deltaX+"px, "+a.deltaY+"px) rotate("+t+"deg)"}})),t.on("panend",(function(t){a.classList.remove("moving"),e.classList.remove("tinder_love"),e.classList.remove("tinder_nope");var r=document.body.clientWidth,o=Math.abs(t.deltaX)<80||Math.abs(t.velocityX)<.5;if(t.target.classList.toggle("removed",!o),o)t.target.style.transform="";else{var n=Math.max(Math.abs(t.velocityX)*r,r),l=t.deltaX>0?n:-n,i=Math.abs(t.velocityY)*r,c=t.deltaY>0?i:-i,d=.03*t.deltaX*(t.deltaY/80);t.target.style.transform="translate("+l+"px, "+(c+t.deltaY)+"px) rotate("+d+"deg)",s()}}))}));var l=o(!1),i=o(!0);return t.addEventListener("click",l),r.addEventListener("click",i),s(),function(){t.removeEventListener("click",l),r.removeEventListener("click",i)}}),[]),(0,c.jsxs)("div",{className:"tinder",children:[(0,c.jsxs)("div",{className:"tinder--status",children:[(0,c.jsx)("i",{className:"fa fa-remove"}),(0,c.jsx)("i",{className:"fa fa-heart"})]}),(0,c.jsx)("div",{className:"tinder--cards",children:Array.isArray(a)&&a&&a.map((function(e,a){return(0,c.jsxs)("div",{className:"tinder--card p-4 rounded-5",style:{zIndex:10-a,transform:"scale("+(20-a)/20+") translateY(-"+30*a+"px)",opacity:(10-a)/10},children:[(0,c.jsx)("img",{className:"mx-auto",src:g,alt:"Logo",style:{maxWidth:"4rem"}}),(0,c.jsx)("p",{className:"text-center ff-gotham-bold fs-5",children:e.question}),(0,c.jsxs)("p",{className:"text-center ff-gotham-book p-2 rounded-4 fs-5 bg-gray-light-h fc-gray-light ",children:[" ",e.repply]})]},a)}))}),(0,c.jsxs)("div",{className:"tinder--buttons",children:[(0,c.jsx)("img",{id:"nope",className:"mx-3 position-relative z-1",style:{cursorPointer:!0},src:h,alt:"X"}),(0,c.jsx)("img",{id:"love",className:"position-relative z-1",src:t+"/images/pages/red/heart.svg",alt:"heart"})]}),u&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d,{url:"https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.webp"})})]})}},2116:function(e,a,t){t.r(a),t.d(a,{default:function(){return Z}});var r=t(2791),s=(t(1864),t(7022)),o=t(9743),n=t(2677),l=t(3855),i=t(184),c=function(e){var a=e.name,t=e.hours,r=e.address;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{className:"my-4",children:(0,i.jsxs)(n.Z,{xs:12,md:12,lg:12,xl:12,children:[(0,i.jsx)("h3",{className:"text-start text-white text-bold ff-gotham-bold",children:a}),(0,i.jsx)("p",{className:"text-start text-white ff-gotham-book",children:t}),(0,i.jsx)("p",{className:"text-start text-white ff-gotham-book",children:r})]})}),(0,i.jsx)("hr",{className:"d-block text-white",style:{height:"20px"}})]})},d=t(3456),m=t(885),u=function(e){var a=[{id:1,name:"Colombia",position:{lat:4.473972471817378,lng:-73.51971196863701}}],t=(0,d.Db)({googleMapsApiKey:"AIzaSyDWhb3NnSahO0oYXuIF2_nAY2gORFURCN0"}).isLoaded,s=(0,r.useState)(a),o=(0,m.Z)(s,2),n=o[0],l=o[1],i=(0,r.useState)(null),c=(0,m.Z)(i,2),u=c[0],p=c[1],h=(0,r.useState)(a[0].position),g=(0,m.Z)(h,2),f=g[0],x=g[1];(0,r.useEffect)((function(){e.markers&&(l(e.markers),x(v(e.markers)))}),[e.markers]);var v=function(e){if(0===e.length)return f;var a=0,t=0;return e.forEach((function(e){e.position&&e.position.lat&&e.position.lng&&(a+=e.position.lat,t+=e.position.lng)})),{lat:a/e.length,lng:t/e.length}};return{markers:n,center:f,isLoaded:t,activeMarker:u,handleActiveMarker:function(e){e!==u&&p(e)},setActiveMarker:p}};var p=function(e){var a=u(e),t=a.markers,s=a.center,o=a.isLoaded,n=a.activeMarker,l=a.handleActiveMarker,c=a.setActiveMarker;return(0,i.jsx)(r.Fragment,{children:(0,i.jsx)("div",{children:o?(0,i.jsx)(d.b6,{center:s,zoom:12,onClick:function(){return c(null)},mapContainerStyle:{width:"100%",height:"600px",borderRadius:"25px"},children:t.map((function(e){var a=e.id,t=e.name,r=e.position;return(0,i.jsx)(d.jC,{position:r,onClick:function(){return l(a)},children:n===a?(0,i.jsx)(d.kp,{onCloseClick:function(){return c(null)},children:(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:t})})}):null},a)}))}):null})})},h=t(4165),g=t(5861),f=JSON.parse('{"z":[{"name":"Barranco \u26a1\ufe0f","hours":"La cultura diversa en lo m\xe1s TOP, ven con tus amix y descubre lo mejor del arte, la comida y la cultura.","address":"Barranco","zip":"","phone":"","lat":-12.141666666667,"long":-77.016666666667,"geocode":[{"results":[{"address_components":[{"long_name":"Barranco","short_name":"Barranco","types":["street_number"]}],"formatted_address":"Barranco","geometry":{"bounds":{"northeast":{"lat":-12.141666666667,"lng":-77.016666666667},"southwest":{"lat":-12.141666666667,"lng":-77.016666666667}},"location":{"lat":-12.141666666667,"lng":-77.016666666667},"location_type":"RANGE_INTERPOLATED","viewport":{"northeast":{"lat":-12.141666666667,"lng":-77.016666666667},"southwest":{"lat":-12.141666666667,"lng":-77.016666666667}}},"partial_match":true,"place_id":"SnbMaJH28ZaQeqHm7","types":["street_address"]}],"status":"OK"}],"test":196,"city":"Lima","category":"Compartir"},{"name":"Refugio Gastron\xf3mico \u26a1\ufe0f","hours":"El mejor lugar para comer con tus patas y conectar con tus sentidos Av. Javier Prado Este 4492","address":"Av. Javier Prado Este 4492","zip":"","phone":"","lat":-12.084166293034308,"long":-76.97357464740163,"geocode":[{"results":[{"address_components":[{"long_name":"Av. Javier Prado Este 4492","short_name":"Av. Javier Prado Este 4492","types":["street_number"]}],"formatted_address":"Av. Javier Prado Este 4492","geometry":{"bounds":{"northeast":{"lat":-12.084166293034308,"lng":-76.97357464740163},"southwest":{"lat":-12.084166293034308,"lng":-76.97357464740163}},"location":{"lat":-12.084166293034308,"lng":-76.97357464740163},"location_type":"RANGE_INTERPOLATED","viewport":{"northeast":{"lat":-12.084166293034308,"lng":-76.97357464740163},"southwest":{"lat":-12.084166293034308,"lng":-76.97357464740163}}},"partial_match":true,"place_id":"SnbMaJH28ZaQeqHm7","types":["street_address"]}],"status":"OK"}],"test":196,"city":"Lima","category":"Socializar"},{"name":"Rinc\xf3n cervecero \u26a1\ufe0f","hours":"Respira con tu grupo de amix y\u2026 \xa1Atrapa la chela que te lanzan por la barra! Jr. de la Uni\xf3n 1045, Centro hist\xf3rico de Lima","address":"Jr. de la Uni\xf3n 1045, Centro hist\xf3rico de Lima","zip":"","phone":"","lat":-12.050833347837418,"long":-77.03506177438635,"geocode":[{"results":[{"address_components":[{"long_name":"Jr. de la Uni\xf3n 1045, Centro hist\xf3rico de Lima","short_name":"Jr. de la Uni\xf3n 1045, Centro hist\xf3rico de Lima","types":["street_number"]}],"formatted_address":"Jr. de la Uni\xf3n 1045, Centro hist\xf3rico de Lima","geometry":{"bounds":{"northeast":{"lat":-12.050833347837418,"lng":-77.03506177438635},"southwest":{"lat":-12.050833347837418,"lng":-77.03506177438635}},"location":{"lat":-12.050833347837418,"lng":-77.03506177438635},"location_type":"RANGE_INTERPOLATED","viewport":{"northeast":{"lat":-12.050833347837418,"lng":-77.03506177438635},"southwest":{"lat":-12.050833347837418,"lng":-77.03506177438635}}},"partial_match":true,"place_id":"SnbMaJH28ZaQeqHm7","types":["street_address"]}],"status":"OK"}],"test":196,"city":"Lima","category":"Socializar"},{"name":"Larcomar \u2728","hours":"Cuando quieres salir con tus amix pero es fin de mes, el CC Larcomar es la vieja confiable. Mal. de la Reserva 610, Miraflores 15074","address":"Mal. de la Reserva 610, Miraflores 15074","zip":"15074","phone":"","lat":-12.131683668255452,"long":-77.0305119032214,"geocode":[{"results":[{"address_components":[{"long_name":"Mal. de la Reserva 610, Miraflores 15074","short_name":"Mal. de la Reserva 610, Miraflores 15074","types":["street_number"]}],"formatted_address":"Mal. de la Reserva 610, Miraflores 15074","geometry":{"bounds":{"northeast":{"lat":-12.131683668255452,"lng":-77.0305119032214},"southwest":{"lat":-12.131683668255452,"lng":-77.0305119032214}},"location":{"lat":-12.131683668255452,"lng":-77.0305119032214},"location_type":"RANGE_INTERPOLATED","viewport":{"northeast":{"lat":-12.131683668255452,"lng":-77.0305119032214},"southwest":{"lat":-12.131683668255452,"lng":-77.0305119032214}}},"partial_match":true,"place_id":"SnbMaJH28ZaQeqHm7","types":["street_address"]}],"status":"OK"}],"test":196,"city":"Lima","category":"Compartir"},{"name":"Puente de los Suspiros \ud83d\udd25","hours":"\xa1Hora de conquistar a tu crush! Respira profundo antes de atravesarlo: si aguantasla respiraci\xf3n mientras cruzas, se te cumplir\xe1 el deseo que pidas. Paseo Chabuca Granda, Distrito Barranco","address":"Paseo Chabuca Granda, Distrito Barranco","zip":"","phone":"","lat":-12.148493439686193,"long":-77.02298538972906,"geocode":[{"results":[{"address_components":[{"long_name":"Paseo Chabuca Granda, Distrito Barranco","short_name":"Paseo Chabuca Granda, Distrito Barranco","types":["street_number"]}],"formatted_address":"Paseo Chabuca Granda, Distrito Barranco","geometry":{"bounds":{"northeast":{"lat":-12.148493439686193,"lng":-77.02298538972906},"southwest":{"lat":-12.148493439686193,"lng":-77.02298538972906}},"location":{"lat":-12.148493439686193,"lng":-77.02298538972906},"location_type":"RANGE_INTERPOLATED","viewport":{"northeast":{"lat":-12.148493439686193,"lng":-77.02298538972906},"southwest":{"lat":-12.148493439686193,"lng":-77.02298538972906}}},"partial_match":true,"place_id":"SnbMaJH28ZaQeqHm7","types":["street_address"]}],"status":"OK"}],"test":196,"city":"Lima","category":"Experimentar"},{"name":"Museo de arte de Lima (MALI) \ud83d\udd25","hours":"Los espacios llenos de arte te inspirar\xe1n para dar el \xfaltimo respiro en la U. Paseo Colon 125 Parque de la Exposici\xf3n, Lima 15046","address":"Paseo Colon 125 Parque de la Exposici\xf3n, Lima 15046","zip":"15046","phone":"","lat":-12.062825741526085,"long":-77.03591917623791,"geocode":[{"results":[{"address_components":[{"long_name":"Paseo Colon 125 Parque de la Exposici\xf3n, Lima 15046","short_name":"Paseo Colon 125 Parque de la Exposici\xf3n, Lima 15046","types":["street_number"]}],"formatted_address":"Paseo Colon 125 Parque de la Exposici\xf3n, Lima 15046","geometry":{"bounds":{"northeast":{"lat":-12.062825741526085,"lng":-77.03591917623791},"southwest":{"lat":-12.062825741526085,"lng":-77.03591917623791}},"location":{"lat":-12.062825741526085,"lng":-77.03591917623791},"location_type":"RANGE_INTERPOLATED","viewport":{"northeast":{"lat":-12.062825741526085,"lng":-77.03591917623791},"southwest":{"lat":-12.062825741526085,"lng":-77.03591917623791}}},"partial_match":true,"place_id":"SnbMaJH28ZaQeqHm7","types":["street_address"]}],"status":"OK"}],"test":196,"city":"Lima","category":"Socializar"},{"name":"The Bunker \ud83d\udd25 ","hours":"Sencillo y perfecto para tu primera juerga con los amix de la U. Calle Bol\xedvar 164, Miraflores","address":"Calle Bol\xedvar 164, Miraflores","zip":"","phone":"","lat":-12.125475998703322,"long":-77.02851864554941,"geocode":[{"results":[{"address_components":[{"long_name":"Calle Bol\xedvar 164, Miraflores","short_name":"Calle Bol\xedvar 164, Miraflores","types":["street_number"]}],"formatted_address":"Calle Bol\xedvar 164, Miraflores","geometry":{"bounds":{"northeast":{"lat":-12.125475998703322,"lng":-77.02851864554941},"southwest":{"lat":-12.125475998703322,"lng":-77.02851864554941}},"location":{"lat":-12.125475998703322,"lng":-77.02851864554941},"location_type":"RANGE_INTERPOLATED","viewport":{"northeast":{"lat":-12.125475998703322,"lng":-77.02851864554941},"southwest":{"lat":-12.125475998703322,"lng":-77.02851864554941}}},"partial_match":true,"place_id":"SnbMaJH28ZaQeqHm7","types":["street_address"]}],"status":"OK"}],"test":196,"city":"Lima","category":"Socializar"},{"name":"Huaca Pucllana \u26a1\ufe0f","hours":"Un viaje pre-hist\xf3rico perfecto para la tarde de un mi\xe9rcoles. Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","address":"Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","zip":"","phone":"","lat":-12.114883149919102,"long":-77.03345498787776,"geocode":[{"results":[{"address_components":[{"long_name":"Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","short_name":"Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","types":["street_number"]}],"formatted_address":"Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","geometry":{"bounds":{"northeast":{"lat":-12.114883149919102,"lng":-77.03345498787776},"southwest":{"lat":-12.114883149919102,"lng":-77.03345498787776}},"location":{"lat":-12.114883149919102,"lng":-77.03345498787776},"location_type":"RANGE_INTERPOLATED","viewport":{"northeast":{"lat":-12.114883149919102,"lng":-77.03345498787776},"southwest":{"lat":-12.114883149919102,"lng":-77.03345498787776}}},"partial_match":true,"place_id":"SnbMaJH28ZaQeqHm7","types":["street_address"]}],"status":"OK"}],"test":196,"city":"Lima","category":"Experimentar"},{"name":"Huaca Pucllana \u26a1\ufe0f","hours":"Un viaje pre-hist\xf3rico perfecto para la tarde de un mi\xe9rcoles. Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","address":"Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","zip":"","phone":"","lat":-12.114883149919102,"long":-77.03345498787776,"geocode":[{"results":[{"address_components":[{"long_name":"Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","short_name":"Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","types":["street_number"]}],"formatted_address":"Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","geometry":{"bounds":{"northeast":{"lat":-12.114883149919102,"lng":-77.03345498787776},"southwest":{"lat":-12.114883149919102,"lng":-77.03345498787776}},"location":{"lat":-12.114883149919102,"lng":-77.03345498787776},"location_type":"RANGE_INTERPOLATED","viewport":{"northeast":{"lat":-12.114883149919102,"lng":-77.03345498787776},"southwest":{"lat":-12.114883149919102,"lng":-77.03345498787776}}},"partial_match":true,"place_id":"SnbMaJH28ZaQeqHm7","types":["street_address"]}],"status":"OK"}],"test":196,"city":"Lima","category":"Experimentar"},{"name":"Circuito m\xe1gico de agua \ud83e\udd29","hours":"\xa1Alucina con un show nocturno de fuentes de agua y luces","address":"Jir\xf3n Madre de Dios S/N, Lima 15046, Per\xfa","zip":"","phone":"","lat":-12.070100443719602,"long":-77.03493240323208,"geocode":[{"results":[{"address_components":[{"long_name":"Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","short_name":"Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","types":["street_number"]}],"formatted_address":"Calle General Borgo\xf1o sin n\xfamero, cuadra 8, Miraflores","geometry":{"bounds":{"northeast":{"lat":-12.070100443719602,"lng":-77.03493240323208},"southwest":{"lat":-12.070100443719602,"lng":-77.03493240323208}},"location":{"lat":-12.070100443719602,"lng":-77.03493240323208},"location_type":"RANGE_INTERPOLATED","viewport":{"northeast":{"lat":-12.070100443719602,"lng":-77.03493240323208},"southwest":{"lat":-12.070100443719602,"lng":-77.03493240323208}}},"partial_match":true,"place_id":"SnbMaJH28ZaQeqHm7","types":["street_address"]}],"status":"OK"}],"test":196,"city":"Lima","category":"Experimentar"}]}'),x={filterByCityAndCategory:function(){var e=(0,g.Z)((0,h.Z)().mark((function e(a){var t,r,s,o;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.city,r=a.category,s=[],o=[],s=t&&r?f.z.filter((function(e){return e.city===t&&e.category===r})).map((function(e){var a,t,r;return o.push({id:e.name,name:e.name,position:(null===(a=e.geocode[0])||void 0===a||null===(t=a.results[0])||void 0===t||null===(r=t.geometry)||void 0===r?void 0:r.location)||null}),{name:e.name,hours:e.hours,address:e.address}})):t?f.z.filter((function(e){return e.city===t})).map((function(e){var a,t,r;return o.push({id:e.name,name:e.name,position:(null===(a=e.geocode[0])||void 0===a||null===(t=a.results[0])||void 0===t||null===(r=t.geometry)||void 0===r?void 0:r.location)||null}),{name:e.name,hours:e.hours,address:e.address}})):f.z.map((function(e){var a,t,r;return o.push({id:e.name,name:e.name,position:(null===(a=e.geocode[0])||void 0===a||null===(t=a.results[0])||void 0===t||null===(r=t.geometry)||void 0===r?void 0:r.location)||null}),{name:e.name,hours:e.hours,address:e.address}})),e.abrupt("return",{info:s,locations:o});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},v=x,y=function(){var e=(0,r.useState)(""),a=(0,m.Z)(e,2),t=a[0],s=a[1],o=(0,r.useState)(""),n=(0,m.Z)(o,2),l=n[0],i=n[1],c=(0,r.useState)({}),d=(0,m.Z)(c,2),u=d[0],p=d[1];(0,r.useEffect)((function(){f()}),[t,l]);var f=function(){var e=(0,g.Z)((0,h.Z)().mark((function e(){var a;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.filterByCityAndCategory({city:t,category:l});case 3:a=e.sent,p(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching data:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return{setCategory:i,setCity:s,data:u}},j=t(234),b=t(2041),N=function(){var e=y(),a=e.setCategory,t=e.setCity,r=e.data,d=(0,b.B)(),m=d.setAction,u=d.action,h=d.showModal;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.Z,{className:"container-map rounded-4 p-5",children:[(0,i.jsxs)(o.Z,{children:[(0,i.jsxs)(n.Z,{xs:12,md:12,lg:4,xl:4,children:[(0,i.jsx)("img",{className:"container-map--spot",src:"https://respiraconhalls.com/peru/images/pages/purple/spot-parchaditos.png",alt:"Spot parchaditos"}),(0,i.jsxs)(o.Z,{className:"justify-content-center gy-3",children:[(0,i.jsx)(n.Z,{xs:12,md:12,lg:6,xl:6,className:"my-md-0",children:(0,i.jsxs)(l.Z.Select,{onChange:function(e){if(m(u+1),!h)return t(e.target.value)},className:"form-control rounded-5 py-2 fc-gray-soft ff-gotham-book",style:{fontSize:"14px"},children:[(0,i.jsx)("option",{value:"all",className:"text-center",children:"Buscar Ciudad"}),(0,i.jsx)("option",{value:"Lima",children:"Lima"})]})}),(0,i.jsx)(n.Z,{xs:12,md:12,lg:6,xl:6,className:"my-md-0",children:(0,i.jsxs)(l.Z.Select,{onChange:function(e){if(m(u+1),!h)return a(e.target.value)},className:"form-control rounded-5 py-2 fc-gray-soft ff-gotham-book",style:{fontSize:"14px"},children:[(0,i.jsx)("option",{value:"all",className:"text-center",children:"Buscar Categor\xeda"}),(0,i.jsx)("option",{value:"Experimentar",children:"Experimentar"}),(0,i.jsx)("option",{value:"Socializar",children:"Fiesteo"}),(0,i.jsx)("option",{value:"Compartir",children:"Compartir"})]})})]}),(0,i.jsx)(o.Z,{className:"container-map--sites justify-content-center mt-4",children:r.info&&r.info.map((function(e,a){return(0,i.jsx)(c,{name:e.name,hours:e.hours,address:e.address},a)}))})]}),(0,i.jsx)(n.Z,{xs:12,md:12,lg:8,xl:8,children:(0,i.jsx)(p,{markers:r.locations})})]}),(0,i.jsx)("div",{className:"mt-0 p-0",children:(0,i.jsx)(j.Z,{})})]})})},_=t(7973),C=t(1394),w=t(4305),E=t(1116),Z=function(){var e="https://respiraconhalls.com/peru",a=(0,E.Z)().conversations;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"container-fluid overlay",children:(0,i.jsx)("img",{src:e+"/images/pages/purple/bg-pepitas.png",alt:"Floating Images",className:"pepitas floating-image mw-100 w-100"})}),(0,i.jsxs)("section",{className:"fluye text-center ff-gotham-medium",children:[(0,i.jsx)(s.Z,{className:"py-5",children:(0,i.jsx)(o.Z,{children:(0,i.jsx)(C.LG,{children:(0,i.jsx)("figure",{className:"mb-5",children:(0,i.jsx)("img",{className:"mw-100",src:e+"/images/pages/purple/fluye-barra.svg",alt:"Barra purple"})})})})}),(0,i.jsx)(C.LG,{children:(0,i.jsx)(N,{})}),(0,i.jsx)(o.Z,{className:"text-center",style:{marginBottom:"3rem"},children:(0,i.jsxs)("p",{className:"text-white fs-5 mt-5",children:["\xbfNuevo en la zona? Dile no a los sitios m\xe1s b\xe1sicos del lugar. #RespiraYTomaUnImpulsoReal ",(0,i.jsx)("br",{}),"con Halls y s\xe9 el anfitri\xf3n m\xe1s cool entre tus amigos."]})}),(0,i.jsxs)(o.Z,{className:"justify-content-center align-items-center position-relative",children:[(0,i.jsx)("div",{className:"container-fluid overlay",children:(0,i.jsx)("img",{src:e+"/images/pages/purple/pepitas-caja.png",alt:"Floating Images",className:"pepitas floating-image mw-100 w-100"})}),(0,i.jsx)(n.Z,{xs:12,md:12,lg:6,xl:6,style:{height:"100%",maxWidth:"40rem"},children:(0,i.jsxs)("article",{children:[(0,i.jsx)("figure",{className:"text-center mw-100",children:(0,i.jsx)("img",{className:"mw-100 position-relative z-1",id:"consejos-ultimo",src:e+"/images/pages/purple/consejos.png",alt:"Consejos de \xfaltimo semestre"})}),(0,i.jsxs)("p",{className:"text-white position-relative z-1",children:["\xbfListo para dejar de ser ese \u201cnovato\u201d ",(0,i.jsx)("br",{}),"que no pasa desapercibido?"]})]})}),(0,i.jsx)(n.Z,{xs:12,md:12,lg:6,xl:6,style:{height:"100%",maxWidth:"40rem",alignSelf:"center"},id:"containerCardsSlide",children:(0,i.jsx)(w.Z,{conversations:a})})]}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(_.Z,{})})]})]})}},9701:function(){},1864:function(){}}]);
//# sourceMappingURL=116.38c8eef8.chunk.js.map