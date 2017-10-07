// ---------- Header Animations ------------//
let header = $('#header')
let bg = $('.bg')
let mainMenu = $('.main-menu')
let innerItems = $('.inner-item')
let overlay = $('.overlay')
let svgPatterns = $('.svg-chess-pattern')
let mainLogo = $('.main-logo')
let logo = $('.logo')
let svgLogo = $('.logo>svg')
let calloutText = $('.callout-text')


TweenMax.set(bg, {autoAlpha: 0})
TweenMax.set(innerItems, {autoAlpha: 0, y: 50})
TweenMax.set(svgPatterns, {autoAlpha: 0})
TweenMax.set(calloutText, {autoAlpha: 0})
TweenMax.set(overlay, {autoAlpha: 0})


TweenMax.to(bg, 1, {autoAlpha: 1, ease: Power1.easeIn})
TweenMax.to(overlay, 1.2, {autoAlpha: 1, y: 0, ease: Power1.easeIn, delay: 1.5})
TweenMax.staggerTo(svgPatterns, 1.2, {autoAlpha: 0.6, ease: Power1.easeIn, delay: 1.5}, 0.5)
TweenMax.staggerTo(innerItems, 0.4, {autoAlpha: 1, y: 0, ease: Power1.easeIn, delay: 1.5}, 0.2)


new Vivus('header-logo', {duration: 400});






