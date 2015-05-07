/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/d3/d3.d.ts" />
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
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};System.register(['angular2/angular2', 'angular2/annotations', 'angular2/src/core/compiler/element_ref', 'angular2/di', 'd3'], function(exports_1) {
    var angular2_1, annotations_1, element_ref_1, di_1, d3;
    var BarGraph, App;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_annotations_1) {
                annotations_1 = _annotations_1;
            },
            function (_element_ref_1) {
                element_ref_1 = _element_ref_1;
            },
            function (_di_1) {
                di_1 = _di_1;
            },
            function (_d3) {
                d3 = _d3;
            }],
        execute: function() {
            BarGraph = (function () {
                function BarGraph(elementRef) {
                    var el = elementRef.domElement;
                    var graph = d3.select(el);
                    this.divs = graph.
                        append('div').
                        attr('class', 'chart').
                        selectAll('div');
                }
                BarGraph.prototype.render = function (newValue) {
                    if (!newValue)
                        return;
                    this.divs.data(newValue).enter().append('div')
                        .transition().ease('elastic')
                        .style('width', function (d) { return d + '%'; })
                        .text(function (d) { return d + '%'; });
                };
                BarGraph.prototype.onChange = function () {
                    this.render(this.data);
                };
                BarGraph = __decorate([
                    annotations_1.Directive({
                        selector: 'bar-graph',
                        lifecycle: [annotations_1.onChange],
                        properties: {
                            data: 'data'
                        }
                    }),
                    __param(0, di_1.Inject(element_ref_1.ElementRef)), 
                    __metadata('design:paramtypes', [Object])
                ], BarGraph);
                return BarGraph;
            })();
            App = (function () {
                function App() {
                    this.graphData = [10, 20, 30, 40, 60];
                }
                App = __decorate([
                    annotations_1.Component({
                        selector: 'app'
                    }),
                    annotations_1.View({
                        template: "\n  <h1 class=\"title\">Angular 2 + d3</h1>\n\n  <bar-graph\n    bind-data=\"graphData\"\n    width=\"900\"\n    height=\"1000\"\n  >\n  </bar-graph>\n\n  ",
                        directives: [BarGraph]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=app.js.map