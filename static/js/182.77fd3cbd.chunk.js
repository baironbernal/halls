"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[182],{6839:function(e,a,s){s.d(a,{Z:function(){return l}});s(2791);var t=s(542),r=s(184),l=function(e){var a=e.url,s=e.titleButton,l=e.borderColor;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{className:"button-general rounded-5 px-4 py-2",style:{borderColor:l},children:(0,r.jsx)(t.rU,{to:a,className:"text-white text-decoration-none z-1",children:s})})})}},7973:function(e,a,s){s.d(a,{Z:function(){return m}});s(2791);var t=s(6839),r=s(1394),l=s(184),i=function(e){var a=e.imageUrl,s=e.borderColor;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.LG,{children:(0,l.jsxs)("article",{className:"d-block text-decoration-none text-center w-auto mx-0 z-1",children:[(0,l.jsx)("img",{className:"d-block mw-100 mx-auto w-auto",src:"https://baironbernal.github.io/halls"+a,alt:"fluye en la u"}),(0,l.jsx)(t.Z,{url:"/",titleButton:"Leer m\xe1s",borderColor:s})]})})})},n=s(1116),o=s(8394),c=s(7022),d=s(9743),m=function(){var e="https://baironbernal.github.io/halls",a=(0,n.Z)().otherCategory;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("section",{className:"other-categories ff-gotham-medium",style:{background:a.firstColor},children:[(0,l.jsxs)("div",{className:"other-categories--title position-relative",style:{height:"200px",background:a.secondColor},children:[(0,l.jsx)(o.Z,{className:"text-center position-absolute top-50 start-50",children:(0,l.jsx)("img",{src:e+a.headerCategory,alt:"Otras categorias",className:"mw-100"})}),(0,l.jsx)("div",{style:{width:"100vw",height:"200px",clipPath:"polygon(0% 100%, 100% 0%, 100% 100%)",background:"linear-gradient(to right, ".concat(a.firstColor," 0%,  ").concat(a.firstColor," 100%)")}})]}),(0,l.jsx)(c.Z,{className:"pb-5",children:(0,l.jsxs)(d.Z,{className:"position-relative d-flex flex-column flex-lg-row justify-content-center gap-lg-5 mb-4",children:[(0,l.jsx)("div",{className:"overlay",children:(0,l.jsx)("img",{src:e+"/images/pages/green/bg-pepitas-3.png",alt:"Pepitas flotantes",className:"floating-image mw-100 w-100 z-0 position-relative"})}),a.list?a.list.map((function(e){return(0,l.jsx)(i,{borderColor:a.borderColor,imageUrl:e.urlImage},e.url)})):null]})})]})})}},8680:function(e,a,s){s.d(a,{Z:function(){return o}});var t=s(2791),r=s(885),l=function(){var e=(0,t.useState)(0),a=(0,r.Z)(e,2),s=a[0],l=a[1],i=(0,t.useState)("red"),n=(0,r.Z)(i,2),o=n[0],c=n[1];(0,t.useEffect)((function(){var e=["red","green"],a=0,s=setInterval((function(){c(e[a]),a=(a+1)%e.length,l((function(e){return e+1}))}),1e3);return function(){return clearInterval(s)}}),[]);var d=Math.floor(s/3600);return{seconds:s%60,minutes:Math.floor(s%3600/60),hours:d,currentColor:o}},i=s(6839),n=s(184),o=function(e){var a=e.isText,s="https://baironbernal.github.io/halls",t=l(),r=t.seconds,o=t.minutes,c=t.hours,d=t.currentColor;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"video-work",children:[(0,n.jsxs)("div",{className:"recuadro-video",children:[(0,n.jsx)("div",{className:"image-modo-cine",children:(0,n.jsx)("img",{src:s+"/images/home/cuadro-cine.png",alt:"Cine cuadro"})}),(0,n.jsxs)("div",{className:"recgrabacion",children:[(0,n.jsx)("div",{className:"signal",id:"signals",style:{backgroundColor:d}}),(0,n.jsx)("img",{src:s+"/images/home/rec.svg",alt:"Rec"})]}),(0,n.jsxs)("div",{id:"contador",children:["00:",c<10?"0":"",c,":",o<10?"0":"",o,":",r<10?"0":"",r]}),a&&(0,n.jsxs)("div",{className:"txt-videos-work",children:[(0,n.jsx)("p",{children:"Basta de apps y cursos de ingl\xe9s. Mejor c\xf3mete un Halls y practica lipsync con estos videos que de aburridos no tienen nada. #RespiraYTomaUnImpulsoReal haz tu mejor performance en tu entrevista y sigue facturando."}),(0,n.jsx)("div",{className:"btn-section",children:(0,n.jsx)("a",{href:"/",children:"Leer m\xe1s"})})]})]}),a&&(0,n.jsxs)("div",{className:"txt-videos-work-mobile",children:[(0,n.jsx)("p",{className:"mt-3 text-white text-center fs-5",children:"Basta de apps y cursos de ingl\xe9s.Mejor c\xf3mete un Halls y practica lipsync con estos videos que de aburridos no tienen nada. #RespiraYTomaUnImpulsoReal haz tu mejor performance en tu entrevista y sigue facturando."}),(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)(i.Z,{url:"/manifestando-aumentos",borderColor:"#00F98C",titleButton:"Leer m\xe1s"})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})]})})}},5212:function(e,a,s){s(2791);var t=s(5316),r=s(6130),l=s(184);a.Z=function(){var e="https://baironbernal.github.io/halls",a=(0,r.Z)(),s=a.handleSubmit,i=a.handleClose,n=a.show,o=a.modal,c=a.email,d=a.name,m=a.setEmail,u=a.setName,p=a.setShow;return(0,l.jsx)("div",{children:(0,l.jsx)(t.Z,{show:n,className:"modal",style:{backgroundColor:o.primaryColor},onHide:function(){return p(n)},contentClassName:"modal-content bg-transparent border-0 mb-5",dialogClassName:"modal-dialog modal-dialog-centered  modal-xl","aria-labelledby":"example-custom-modal-styling-title",children:(0,l.jsxs)("div",{tabIndex:"-1","aria-labelledby":"amor-astros-modalLabel","aria-hidden":"true",children:[(0,l.jsxs)("div",{className:"modal-header flex-row justify-content-center border-0 my-4 ",children:[(0,l.jsx)("div",{className:"modal-header-banner align-self-center",children:(0,l.jsx)("div",{className:"row justify-content-md-center",children:(0,l.jsxs)("div",{className:"col-sm-12 col-md-12 col-lg-12 col-xl-12",children:[(0,l.jsx)("img",{className:"d-block mw-100",src:e+o.headerImage,alt:"Respira y toma un impulso"}),(0,l.jsxs)("p",{className:"my-4 ff-gotham-bold text-white",children:["#RespiraYTomaUnImpulsoReal con Halls, suscr\xedbete y no repitas ",(0,l.jsx)("br",{}),"la misma historia que viviste con tu ex por falta de compatibilidad."]})]})})}),(0,l.jsx)("img",{src:e+"/images/icons/close.svg",alt:"close button",onClick:i,className:"d-block align-self-baseline"})]}),(0,l.jsx)("form",{onSubmit:s,children:(0,l.jsxs)("div",{className:"modal-body bg-white p-4 rounded-4 mb-5",children:[(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-sm-12 col-md-6 col-lg-6 col-lg-x",children:[(0,l.jsx)("label",{htmlFor:"inputEmail4",className:"ms-2 text-start d-block form-label fs-6 fc-gray-soft",children:"Nombre:"}),(0,l.jsx)("input",{type:"text",style:{backgroundColor:o.inputColor},className:"form-control rounded-4",value:d,onChange:function(e){return u(e.target.value)},"aria-label":"First name"})]}),(0,l.jsxs)("div",{className:"col-sm-12 col-md-6 col-lg-6 col-lg-x",children:[(0,l.jsx)("label",{htmlFor:"inputEmail4",className:"ms-2 text-start d-block form-label fs-6 fc-gray-soft",children:"Email:"}),(0,l.jsx)("input",{type:"email",style:{backgroundColor:o.inputColor},className:"form-control rounded-4",value:c,onChange:function(e){return m(e.target.value)},"aria-label":"Email"})]})]}),(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"form-check d-flex justify-content-center gap-1 my-4",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"defaultCheck1"}),(0,l.jsx)("label",{className:"form-check-label fc-gray-soft",htmlFor:"defaultCheck1",v:!0,children:"Acepta t\xe9rminos y condiciones"})]})}),(0,l.jsx)("div",{className:"border-0 d-flex flex-row justify-content-center my-2 bg-transparent",children:(0,l.jsx)("button",{type:"submit",style:{backgroundColor:o.buttonColor},className:"d-block text-center text-white px-5 py-2 border-0 rounded-4",children:"Enviar"})})]})}),(0,l.jsxs)("div",{className:"row halls-text text-start mt-5",children:[(0,l.jsx)("a",{className:"navbar-brand",href:"/",children:(0,l.jsx)("img",{className:"w-auto mb-3 ",src:e+"/images/logos/halls-white.svg",alt:"Halls Logo"})}),(0,l.jsx)("p",{className:"ff-gotham-medium fs-6 text-white",children:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xe1ndar de las industrias desde el a\xf1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xf3 una galer\xeda de textos y los mezcl\xf3 de tal manera que logr\xf3 hacer un libro de"})]})]})})})}},4790:function(e,a,s){var t=s(885),r=s(2791);a.Z=function(){var e=(0,r.useState)(!1),a=(0,t.Z)(e,2),s=a[0],l=a[1],i=(0,r.useState)(!1),n=(0,t.Z)(i,2),o=n[0],c=n[1];(0,r.useEffect)((function(){localStorage.getItem("SIGN_STAR")?(c(!0),l(!1)):(c(!1),l(!0))}),[]);return{showModal:s,handleClose:function(){l(!1)},cookieExists:o}}},6130:function(e,a,s){s.d(a,{Z:function(){return u}});var t=s(4165),r=s(5861),l=s(885),i=s(2791),n=s(4790),o=s(1116),c=s(1243).Z.create({baseURL:"http://app-lubowitz.o63ysw09ej-gok67yemr652.p.temp-site.link"}),d={register:function(){var e=(0,r.Z)((0,t.Z)().mark((function e(a){var s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.post("/api/store",a);case 3:return s=e.sent,localStorage.setItem("SIGN_STAR",!0),e.abrupt("return",s.data);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error fetching data from the JSON file");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}()},m=d,u=function(){var e=(0,i.useState)(!1),a=(0,l.Z)(e,2),s=a[0],c=a[1],d=(0,n.Z)(),u=d.handleClose,p=d.showModal,g=(0,o.Z)().modal,h=(0,i.useState)(""),x=(0,l.Z)(h,2),f=x[0],b=x[1],v=(0,i.useState)(""),j=(0,l.Z)(v,2),w=j[0],N=j[1];(0,i.useEffect)((function(){c(p)}),[p]);var y=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(a){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,m.register({email:f,name:w});case 4:alert("Data has been successfully stored!"),c(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Error storing data.");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return{handleSubmit:y,handleClose:u,show:s,modal:g,email:f,name:w,setEmail:b,setName:N,setShow:c}}},5083:function(e,a,s){s.r(a),s.d(a,{default:function(){return k}});var t=s(2791),r=(s(1864),s(8680)),l=s(7973),i=s(4165),n=s(5861),o=s(885),c=s(9705),d=(s(6497),s(553),s(4277),s(5986)),m=s(9743),u=s(5316),p=s(8394),g=s(6130),h=s(184),x=function(e){var a=e.show,s=(e.urlFile,e.imageModal,(0,g.Z)().modal);return(0,h.jsx)("div",{children:(0,h.jsx)(u.Z,{show:a,className:"modal",style:{backgroundColor:s.primaryColor},onHide:function(){return a},contentClassName:"modal-content bg-transparent border-0 mb-5",dialogClassName:"modal-dialog modal-dialog-centered  modal-xl","aria-labelledby":"example-custom-modal-styling-title",children:(0,h.jsx)("div",{tabIndex:"-1","aria-labelledby":"amor-astros-modalLabel","aria-hidden":"true",children:(0,h.jsxs)("div",{className:"modal-body p-4 rounded-4 mb-5",children:[(0,h.jsx)(m.Z,{children:(0,h.jsx)(p.Z,{className:"text-center",children:(0,h.jsx)("img",{className:"mw-100",src:"https://baironbernal.github.io/halls/images/pages/green/modal/previews/preview-test.png",alt:"Preview "})})}),(0,h.jsx)("div",{className:"border-0 d-flex flex-row justify-content-center my-2 bg-transparent",children:(0,h.jsx)("button",{type:"submit",style:{borderColor:s.buttonColor,background:"transparent"},className:"button-general rounded-5 px-4 py-2",children:"Descargar"})})]})})})})},f=s(6839);function b(){var e=(0,t.useState)(!1),a=(0,o.Z)(e,2),s=a[0],r=a[1],l=(0,t.useState)(""),u=(0,o.Z)(l,2),p=(u[0],u[1],(0,t.useState)("")),g=(0,o.Z)(p,2),b=(g[0],g[1],(0,t.useState)(0)),v=(0,o.Z)(b,2),j=(v[0],v[1]),w=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){var a,s,t,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"files/previews/test.pdf",e.prev=1,e.next=4,fetch("files/previews/test.pdf");case 4:if((a=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch the PDF file");case 7:return e.next=9,a.blob();case 9:s=e.sent,t=URL.createObjectURL(s),(r=document.createElement("a")).href=t,r.download="test.pdf",r.click(),URL.revokeObjectURL(t),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.error("Error downloading PDF:",e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{show:s}),(0,h.jsx)(c.tq,{id:"swiper-work",className:"swiper p-0 my-4 w-75 h-100",effect:"coverflow",centeredSlides:!0,initialSlide:1,centeredSlidesBounds:!1,onSlideChange:function(e){console.log(),j(e.activeIndex)},slidesPerView:1,loop:!0,navigation:!0,coverflowEffect:{rotate:0,stretch:70,depth:200,modifier:1,slideShadows:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:0}},pagination:{clickable:!0},modules:[d.lI,d.tl,d.W_],children:[{id:0,title:"Pedir aumento imagen",urlImage:"/images/pages/green/pedir-aumento.png",urlFile:"files/previews/pedir-aumento.pdf",imageModal:"/images/pages/green/modal/previews/preview-test.png"},{id:1,title:"Pedir vacaciones imagen",urlImage:"/images/pages/green/pedir-vacaciones.png",urlFile:"files/previews/pedir-vacaciones.pdf",imageModal:"/images/pages/green/modal/previews/preview-test.png"},{id:2,title:"Home Office imagen",urlImage:"/images/pages/green/home-office.png",urlFile:"files/previews/home-office.pdf",imageModal:"/images/pages/green/modal/previews/preview-test.png"},{id:3,title:"Salir viernes temprano",urlImage:"/images/pages/green/work-slide-1.png",urlFile:"files/previews/salir-viernes-temprano.pdf",imageModal:"/images/pages/green/modal/previews/preview-test.png"}].map((function(e){var a=e.id,s=e.urlImage,t=e.title;return(0,h.jsx)(c.o5,{className:"swiper-slide",children:(0,h.jsx)("img",{className:"rounded-4",src:"https://baironbernal.github.io/halls"+s,alt:t})},a)}))}),(0,h.jsx)(m.Z,{className:"mt-3",children:(0,h.jsx)("p",{className:"text-white ff-gotham-bold fs-5",children:"\xbfCon cu\xe1l te atreves?"})}),(0,h.jsx)(m.Z,{children:(0,h.jsxs)("div",{className:"d-flex justify-content-center gap-3",children:[(0,h.jsx)("div",{onClick:function(){console.log("Click",s),r(!0)},children:(0,h.jsx)(f.Z,{titleButton:"Previsualizar",borderColor:"#00F98C"})}),(0,h.jsx)("div",{onClick:w,children:(0,h.jsx)(f.Z,{titleButton:"Descargar",borderColor:"#00F98C"})})]})})]})}var v=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(c.tq,{id:"swiper-tiktoks",className:"swiper p-0 my-4 w-75",effect:"coverflow",grabCursor:!0,centeredSlides:!0,initialSlide:3,loop:!0,centeredSlidesBounds:!0,slidesPerView:1,coverflowEffect:{rotate:0,stretch:60,depth:300,modifier:1,slideShadows:!1,prev:{translate:[-56,0,0]},next:{translate:[-56,0,0]}},breakpoints:{768:{slidesPerView:2,spaceBetween:90}},navigation:!0,pagination:{clickable:!0},modules:[d.lI,d.tl,d.W_],children:[{id:1,title:"Pedir aumento imagen",location:"/video/tiktok1.mp4"},{id:2,title:"Pedir vacaciones imagen",location:"/video/tiktok1.mp4"},{id:3,title:"Home Office imagen",location:"/video/tiktok1.mp4"},{id:4,title:"Work slide 1",location:"/video/tiktok1.mp4"},{id:5,title:"Work slide 1",location:"/video/tiktok1.mp4"}].map((function(e,a){return(0,h.jsx)(c.o5,{className:"h-100",children:(0,h.jsx)("video",{className:"rounded-5",controls:"controls",muted:"muted",loop:"loop",autoPlay:"autoplay",children:(0,h.jsx)("source",{src:"https://baironbernal.github.io/halls"+e.location,type:"video/mp4"})})},a)}))})})},j=s(7022),w=s(2677),N=s(1394),y=s(5212),k=function(){var e="https://baironbernal.github.io/halls";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"container-fluid overlay",children:(0,h.jsx)("img",{src:e+"/images/pages/green/bg-pepitas.png",alt:"Floating Images",className:"pepitas floating-image mw-100 w-100"})}),(0,h.jsx)("section",{className:"manifestando-aumentos text-center ff-gotham-medium",children:(0,h.jsxs)(j.Z,{className:"py-5",children:[(0,h.jsx)(m.Z,{className:!0,children:(0,h.jsx)(N.bu,{right:!0,children:(0,h.jsx)("figure",{children:(0,h.jsx)("img",{className:"mw-100",src:e+"/images/pages/green/manifestando-barra.svg",alt:"Barra verde"})})})}),(0,h.jsxs)(m.Z,{className:"align-items-center my-5 gx-5 ",children:[(0,h.jsx)(w.Z,{lg:6,children:(0,h.jsx)(N.sm,{left:!0,children:(0,h.jsxs)("article",{children:[(0,h.jsx)("img",{className:"mw-100 mb-5",src:e+"/images/pages/green/workimpulsos.svg",alt:"Work impulsos"}),(0,h.jsx)("p",{className:"mt-3 text-white fs-5",children:"#RespiraYTomaUnImpulsoReal y haz eso que te apasiona con los workimpulsos. Pedir vacaciones, un aumento o salir temprano los viernes ahora con Halls es posible \xa1Descarga el tuyo!"})]})})}),(0,h.jsx)(w.Z,{lg:6,children:(0,h.jsx)(N.sm,{right:!0,children:(0,h.jsx)(b,{})})})]}),(0,h.jsx)(N.pT,{top:!0,children:(0,h.jsxs)(m.Z,{className:"my-5 position-relative",children:[(0,h.jsx)("div",{className:"overlay",children:(0,h.jsx)("img",{src:e+"images/pages/green/bg-pepitas-2.png",alt:"Floating Image2",className:"floating-image mw-100 w-100"})}),(0,h.jsx)(r.Z,{}),(0,h.jsxs)("p",{className:"mt-3 text-white fs-5",children:["#RespiraYTomaUnImpulsoReal para hablar sin trabarte y al\xe9grate porque ",(0,h.jsx)("br",{}),"el ingl\xe9s ya no ser\xe1 un problema si lo que quieres es facturar."]})]})}),(0,h.jsx)(N.LG,{children:(0,h.jsxs)(m.Z,{className:"d-flex justify-content-center align-items-center gap-1 mb-4 my-5",children:[(0,h.jsx)("a",{href:"/",className:"d-block text-decoration-none text-center w-auto",children:(0,h.jsx)("img",{src:e+"/images/pages/green/instagram-icon.svg",alt:"Icon Instagram"})}),(0,h.jsx)("span",{className:"d-block text-center text-white w-auto fs-3",children:" @typesetting "})]})}),(0,h.jsx)(N.LG,{children:(0,h.jsx)(m.Z,{className:"m-5 position-relative",children:(0,h.jsx)(v,{})})}),(0,h.jsx)("div",{className:"mt-0 p-0",children:(0,h.jsx)(y.Z,{})})]})}),(0,h.jsx)(l.Z,{titleImageUrl:"/images/pages/green/otras-categorias.svg"})]})}},1864:function(){}}]);
//# sourceMappingURL=182.77fd3cbd.chunk.js.map