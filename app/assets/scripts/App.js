import $ from 'jQuery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
var featureItemsOnScroll = new RevealOnScroll($(".feature-item"), "85%");
var testimonialsOnScroll = new RevealOnScroll($(".testimonial"), "70%");
