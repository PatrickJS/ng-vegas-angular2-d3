/// <reference path="typings/tsd.d.ts" />
import * as angular from 'angular2/angular2';
import {Component, Directive, View, Attribute, onChange, ElementRef} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import * as d3 from 'd3';

@Directive({
  selector:   'bar-graph',
  lifecycle:  [ onChange ],
  properties: [ 'data' ]
})
class BarGraph {
  data: Array<number>;
  divs: any;
  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    @Attribute('width') width: string,
    @Attribute('height') height: string) {

    var el:any    = elementRef.domElement;
    var graph:any = d3.select(el);

    this.divs = graph.
      append('div').
      attr({
        'class': 'chart'
      }).
      style({
        'width':  width  + 'px',
        'height': height + 'px',
      }).
      selectAll('div');
  }

  render(newValue) {
    if (!newValue) return;

    this.divs.data(newValue).enter().append('div')
      .transition().ease('elastic')
      .style('width', d => d + '%')
      .text(d => d + '%');

  }

  onChange() {
    this.render(this.data);
  }
}


@Component({
  selector: 'app'
})
@View({
  directives: [ BarGraph ],
  template: `
  <h1 class="title">Angular 2 + d3</h1>

  <bar-graph
    bind-data="graphData"
    width="500"
    height="130"
  >
  </bar-graph>

  `
})
class App {
  graphData: Array<number>;
  constructor() {
    this.graphData = [10,20,30,40,60];
  }

}

angular.bootstrap(App, [/* AppInjector */]);
