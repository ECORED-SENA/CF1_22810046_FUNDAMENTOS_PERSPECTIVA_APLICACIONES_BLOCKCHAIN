(function(e){function n(n){for(var o,i,c=n[0],l=n[1],s=n[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(n);while(u.length)u.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,i=1;i<a.length;i++){var c=a[i];0!==t[c]&&(o=!1)}o&&(r.splice(n--,1),e=l(l.s=a[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"32f73873","chunk-0206bfa0":"63edbb8b","chunk-0c047e41":"6ae46cb0","chunk-13a6037e":"bffc544f","chunk-18f95272":"15f9193d","chunk-25b302c8":"05b64921","chunk-26fc7596":"481badb8","chunk-2c06842c":"0ea23e1c","chunk-2d0e96ec":"ff56e617","chunk-2d208d90":"a591131d","chunk-2d21d0e2":"f2f9e093","chunk-2d22c123":"f293f44c","chunk-2d2747e2":"e9a7ef31","chunk-2e80bb9a":"60c00e21","chunk-319206de":"110e6389","chunk-32334cb6":"dfa46ddb","chunk-3c57cd7b":"083637d4","chunk-3d6834f6":"1ca514f7","chunk-4cdd78c0":"dcfafe97","chunk-4f2d402a":"d397b259","chunk-4fde0a08":"615bfcda","chunk-515a8379":"a7bba2ce","chunk-53ccb27e":"3a39e380","chunk-55d286b8":"89bcedea","chunk-59974754":"f37b084b","chunk-6e1e538a":"1b23b347","chunk-766a929b":"5e6e31f7","chunk-c796899c":"5e8573e4","chunk-e8a7823a":"3dc85ba8","chunk-f2df7d2c":"08c3bb76","chunk-fde47172":"e3650f92",comple:"aa8867a2",creditos:"fd3705af",glosario:"e894e2da",intro:"c8a8690c",referencias:"0b05cbf4",sintesis:"ae9c195b",tema1:"bd5c7e35",tema2:"cf89d25a",tema3:"2ec55508",tema4:"d67bb1b0"}[e]+".js"}function l(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var n=[],a={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"fef54ca8","chunk-515a8379":"2c3c16c5","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"57387d2d","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"5722484f","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"f1695c39",creditos:"117c5d1d",glosario:"0d0de2c0",intro:"31d6cfe0",referencias:"3aa10479",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",t=l.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===t))return n()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],d=s.getAttribute("data-href");if(d===o||d===t)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var o=n&&n.target&&n.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),a(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e);var u=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(m);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}t[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},l.m=e,l.c=o,l.d=function(e,n,a){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(a,o,function(n){return e[n]}.bind(null,o));return a},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var m=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,l=a("2877"),s=Object(l["a"])(c,i,t,!1,null,null,null),d=s.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),m=a("8c4f"),f=a("ae58"),p=a("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema4").then(a.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Fundamentos de <em>Blockchain</em>",descripcionCurso:"Mediante el presente componente, se identifican los conceptos básicos del <em>blockchain</em>, tecnologías y herramientas necesarias para su comprensión y uso en los diferentes ámbitos.",imagenBannerPrincipal:a("74b5"),fondoBannerPrincipal:a("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("71f8")},{clases:["banner-principal-decorativo-2"],imagen:a("8f04")},{clases:["banner-principal-decorativo-3"],imagen:a("7d72")},{clases:["banner-principal-decorativo-4"],imagen:a("f53d")},{clases:["banner-principal-decorativo-5"],imagen:a("b400")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Conceptos de <em>blockchain</em>",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Cadena de bloques ",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Origen de la tecnología",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Ciclo de vida del <em>blockchain</em>",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Criptoeconomía y Criptodivisas",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Definición y origen de las criptomonedas",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Tipos de monedas digitales",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Regulación legal",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Sistemas de pagos electrónicos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Tipos de <em>blockchain</em>",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Herramientas de comercio electrónico asociadas a <em>blockchain</em>",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Minería de bloques",hash:"t_3_3"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"<em>NTF Token no Fungible o Activo no Fungile</em>",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Conceptos",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Casos de estudio",hash:"t_4_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Conceptos de <em>Blockchain</em>",referencia:"Ministerio de Tecnologías de la Información y las Comunicaciones. (2020). Guía de referencia de <em>Blockchain</em> para la adopción e implementación de proyectos en el Estado colombiano. ",tipo:"PDF",link:"https://gobiernodigital.mintic.gov.co/692/articles-161810_Ley_2052_2020.pdf"},{tema:"CriptoEconomía y Criptodivisas",referencia:"Domingo, C. (2018). Todo lo que querías saber sobre <em>Bitcoin</em>, criptomonedas y <em>Blockchain</em>, y no te atrevías a preguntar.",tipo:"PDF",link:"https://pladlibroscl0.cdnstatics.com/libros_contenido_extra/38/37925_Bitcoin_Criptomonedas_Y_Blockchain.pdf"},{tema:"<em>Bitcoin</em>",referencia:"<em>CoinMarketCap. (s.f.). Top Stablecoin Tokens by Market Capitalization</em>. ",tipo:"Página web",link:"https://coinmarketcap.com/view/stablecoin/"}],glosario:[{termino:"<em>Fiat</em>",significado:"Es dinero de curso legal cuyo valor no deriva del hecho de ser un bien físico o mercancía, sino por ser emitido por un gobierno."},{termino:"<em>Rig</em>",significado:"Sistema basado principalmente en tarjetas gráficas que trabajan para obtener el <em>hash</em> de un bloque y obtener así una recompensa."},{termino:"<em>Satoshi</em>",significado:"Es la unidad mínima de medida que se puede utilizar en el sistema <em>Bitcoin</em>."},{termino:"<em>Scam</em>",significado:"Hace referencia a los productos digitales falsos o que no tienen el respaldo propuesto."},{termino:"<em>Spot</em>",significado:"El mercado spot es aquel en el que el valor del activo financiero se paga al contado (precio spot) en el momento de la entrega"}],referencias:[{referencia:"Arroyo Guardeño, D. Díaz Vico, J. & Hernández Encinas, L. (2019). <em>Blockchain</em>. Editorial CSIC Consejo Superior de Investigaciones Científicas.",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111431"},{referencia:"García-Morales, E. (2018). Luces y sombras sobre el impacto del blockchain en la gestión de documentos. Anuario ThinkEPI, 12, 345-351.",link:"https://doi.org/10.3145/thinkepi.2018.58"},{referencia:"Herrera, J. (2021). Propuesta de un mecanismo de gestión de pagos públicos mediante cadena de bloques (<em>Blockchain</em>). Revista de derecho de la Hacienda Pública, ISSN-e 2215-3624, Nº. 17, 2021, págs. 22-39.",link:"https://dialnet.unirioja.es/servlet/articulo?codigo=8072557 "},{referencia:"MINTIC. (2022) Guía de referencia de <em>Blockchain</em> para la adopción e implementación de proyectos en el estado colombiano.",link:"https://gobiernodigital.mintic.gov.co/692/articles-161810_Ley_2052_2020.pdf"},{referencia:"Mougayar, W. (2016). <em>The business blockchain: promise, practice, and application of the next Internet technology. John Wiley & Sons</em>.",link:""},{referencia:"Tapscott, D., & Tapscott, A. (2017). La revolución <em>blockchain</em>. Descubre cómo esta nueva tecnología transformará la economía global. ediciones deusco. séptima edición.",link:"https://static0planetadelibroscommx.cdnstatics.com/libros_contenido_extra/35/34781_La_revolucion_blockchain.pdf "}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable equipo desarrollo curricular",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Hernando José Peña Hidalgo",cargo:"Experto temático",centro:"Centro de Teleinformática y Producción Industrial - Regional Cauca"},{nombre:"María Inés Machado López",cargo:"Diseñadora instruccional",centro:"Centro de la industria, la Empresa y los Servicios - Regional Norte de Santander "},{nombre:"Gloria Alexandra Orejarena Barrios",cargo:"Diseñadora instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital "},{nombre:"Ana Catalina Córdoba ",cargo:"Asesora metodológica",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Corrector de estilo ",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Antonio Vecino Valero",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Revisión de guion audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"María Carolina Tamayo López",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Miguel Guerrero Gutiérrez ",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Validación ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Mary Jeans Palacio Camacho",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carmen Alicia Martínez Torres",cargo:"Validación audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Validación audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Sandra Milena Triana Pinto",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"71f8":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.2da3bfeb.svg"},"74b5":function(e,n,a){e.exports=a.p+"img/banner-princiapal.b345d559.png"},"7d72":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-3.44ddcddd.svg"},"8f04":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.2766b6af.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,a){},b400:function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-5.96bd8430.svg"},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.c9ab3d65.png"},f53d:function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-4.5112b96d.svg"}});
//# sourceMappingURL=app.c421b51d.js.map