/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/d3/d3.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var annotations_1 = require('angular2/annotations');
var directives_1 = require('angular2/directives');
var d3_1 = require('d3');
var D3 = (function () {
    function D3(elementRef) {
        this.el = elementRef.domElement;
    }
    D3.prototype.onChange = function () {
        this.render();
    };
    D3.prototype.render = function () {
        console.log(d3_1.json);
    };
    D3 = __decorate([
        annotations_1.Directive({
            selector: 'd3',
            lifecycle: [annotations_1.onChange]
        }), 
        __metadata('design:paramtypes', [Object])
    ], D3);
    return D3;
})();
var App = (function () {
    function App() {
        this.todos = ["hello"];
    }
    App.prototype.addTodo = function (event, newTodo) {
        event.preventDefault();
        this.todos.push(newTodo);
    };
    App = __decorate([
        annotations_1.Component({
            selector: 'app'
        }),
        annotations_1.View({
            template: "\n  <h1>Not todo</h1>\n  <ul *for=\"var todo of todos\">\n    <li>\n      {{ todo }}\n    </li>\n  </ul>\n  <form (submit)=\"addTodo($event, textbox.value)\">\n    <input type=\"text\" #textbox autofocus>\n    <button>Add</button>\n  </form>\n  ",
            directives: [directives_1.For]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);
