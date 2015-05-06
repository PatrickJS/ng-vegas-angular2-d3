/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/d3/d3.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {Component, Directive, View, onChange} from 'angular2/annotations';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {Inject} from 'angular2/di';
import * as d3 from 'd3';

@Directive({
  selector: 'bar-graph',
  lifecycle: [onChange],
  properties: {
    data: 'data'
  }
})
class BarGraph {
  elementRef: ElementRef;
  data: Array<number>;
  divs: any;
  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    var el:any    = elementRef.domElement;
    var graph:any = d3.select(el);

    this.divs = graph.
      append('div').
      attr('class', 'chart').
      selectAll('div');
  }

  render(newValue = this.data) {
    this.divs.data(newValue).enter().append('div')
      .transition().ease("elastic")
        .style('width', function(d) { return d + '%'; })
        .text(function(d) { return d + '%'; });
  }

  onChange(oldValue, newValue) {
    this.render(newValue);
  }
}


@Component({
  selector: 'app'
})
@View({
  template: `
  <h1 class="title">Angular 2 + d3</h1>

  <bar-graph
    bind-data="graphData"
    width="900"
    height="1000"
  >
  </bar-graph>

  `,
  directives: [ BarGraph ]
})
class App {
  graphData: Array<number>;
  constructor() {
    this.graphData = [10,20,30,40,60];
  }

}

bootstrap(App);
