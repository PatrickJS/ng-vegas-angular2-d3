/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/d3/d3.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {Component, Directive, View, onChange, Attribute} from 'angular2/annotations';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {For} from 'angular2/directives';
import {json} from 'd3';

@Directive({
  selector: 'd3',
  lifecycle: [onChange]
})
class D3 {
  el;
  elementRef: ElementRef
  constructor(elementRef: ElementRef) {
    this.el = elementRef.domElement;
  }
  onChange() {
    this.render();
  }
  render() {
    console.log(json);
    // d3 code
  }
}

@Component({
  selector: 'app'
})
@View({
  template: `
  <h1>Not todo</h1>
  <ul *for="var todo of todos">
    <li>
      {{ todo }}
    </li>
  </ul>
  <form (submit)="addTodo($event, textbox.value)">
    <input type="text" #textbox autofocus>
    <button>Add</button>
  </form>
  `,
  directives: [ For ]
})
class App {
  todos: string[];

  constructor() {
    this.todos = ["hello"];
  }

  addTodo(event: Event, newTodo: string) {
    event.preventDefault();
    console.log(json);
    debugger;

    this.todos.push(newTodo);
  }
}

bootstrap(App);
