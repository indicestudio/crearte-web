"use strict";function dinamicText(){menuBtn01.hasClass("active")?($(".img > img").attr("src",imgServiceUrl[0]),$(".services-txt > .title").text(servicesTitle[0]),$(".services-txt > .text").text(servicesText[0])):menuBtn02.hasClass("active")?($(".img > img").attr("src",imgServiceUrl[1]),$(".services-txt > .title").text(servicesTitle[1]),$(".services-txt > .text").text(servicesText[1])):menuBtn03.hasClass("active")?($(".img > img").attr("src",imgServiceUrl[2]),$(".services-txt > .title").text(servicesTitle[2]),$(".services-txt > .text").text(servicesText[2])):menuBtn04.hasClass("active")&&($(".img > img").attr("src",imgServiceUrl[3]),$(".services-txt > .title").text(servicesTitle[3]),$(".services-txt > .text").text(servicesText[3]))}var header=$("#header"),bg=$(".bg"),mainMenu=$(".main-menu"),innerItems=$(".inner-item"),overlay=$(".overlay"),svgPatterns=$(".svg-chess-pattern"),mainLogo=$(".main-logo"),logo=$(".logo"),svgLogo=$(".logo>svg"),calloutText=$(".callout-text");TweenMax.set(bg,{autoAlpha:0}),TweenMax.set(innerItems,{autoAlpha:0,y:50}),TweenMax.set(svgPatterns,{autoAlpha:0}),TweenMax.set(calloutText,{autoAlpha:0}),TweenMax.set(overlay,{autoAlpha:0}),TweenMax.to(bg,1,{autoAlpha:1,ease:Power1.easeIn}),TweenMax.to(overlay,1.2,{autoAlpha:1,y:0,ease:Power1.easeIn,delay:1.5}),TweenMax.staggerTo(svgPatterns,1.2,{autoAlpha:.6,ease:Power1.easeIn,delay:1.5},.5),TweenMax.staggerTo(innerItems,.4,{autoAlpha:1,y:0,ease:Power1.easeIn,delay:2},.2),TweenMax.staggerTo(calloutText,.4,{autoAlpha:1,y:0,ease:Power1.easeIn,delay:2},.2),new Vivus("header-logo",{duration:400});var imgPlace=$(".img"),menuBtn01=$("#menu-01"),menuBtn02=$("#menu-02"),menuBtn03=$("#menu-03"),menuBtn04=$("#menu-04"),imgServiceUrl=["/images/offset.jpg","/images/letreros.jpg","/images/vinyl.jpg","/images/carta-presentacion.jpg"],servicesTitle=["Impresión Offset","Letreros","Corte en Vinilo","Tarjetería"],servicesText=["Nuestra especialidad es la impresión a bajo costo de flyers, tarjetas, libros, reglamentos, etc. Lo que necesita para su negocio o empresa.","Realizamos trabajos de diseño y fabricación de letreros retroiluminados, con la materialidad y durabilidad óptimas para todo tipo de negocios.","Poleras estampadas, diseños a 3 colores, decoración de interiores, todo esto hecho con vinilo de alta calidad y duración, para interiores y exteriores.","Diseño e impresión de tarjetas de visitas. Con distintos gramajes de papel para el proyecto y la imagen que usted desea mostrar, confíe en los mejores."];$(".left > ul > li").each(function(){$(this).click(function(){$("li").removeClass("active"),$(this).not("active")&&$(this).addClass("active"),dinamicText()})}),dinamicText();var brandingTxt=$("#branding h1");$("#branding").hover(function(){TweenMax.staggerTo(brandingTxt,.4,{x:"-80%"},.2)},function(){TweenMax.staggerTo(brandingTxt,.4,{x:"0%"},.2)});var adTxt=$("#adwords h1, #adwords p");$("#adwords").hover(function(){TweenMax.staggerTo(adTxt,.4,{x:"40%"},.1)},function(){TweenMax.to(adTxt,.4,{x:"0%"})});var photoTxt=$("#photo h1, #photo p");$("#photo").hover(function(){TweenMax.staggerTo(photoTxt,.4,{x:"-40%"},.1)},function(){TweenMax.to(photoTxt,.4,{x:"0%"})});