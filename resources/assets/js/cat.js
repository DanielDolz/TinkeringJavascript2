/**
 * Created by danidaniel on 14/10/16.
 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});


//This is how you "inherit" from it: SYNTAX SUGAR
var Cat = function() {
    Animal.apply(this, arguments);
    // Cat initialization using Animal constructor
};
// Definim
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
// Implementem
Cat.prototype.say = function() {
    console.log('meow');
}

