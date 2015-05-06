interface List<T> extends Array<T> {
}
interface Type {}
interface ElementRef {
  domElement()
}

declare module "angular2/visibility" {
  function Parent();
  function Ancestor();
}
declare module "angular2/angular2" {
  function bootstrap(appComponentType: any): void;
  function Component({
    selector,
    properties,
    hostListeners,
    injectables,
    lifecycle,
    changeDetection
    }:{
      selector:string,
      properties?:Object,
      hostListeners?:Object,
      injectables?:List<any>,
      lifecycle?:List<any>,
      changeDetection?:string
    });
  function Directive({
    selector,
    properties,
    hostListeners,
    injectables,
    lifecycle,
    changeDetection
    }:{
      selector:string,
      properties?:Object,
      hostListeners?:Object,
      injectables?:List<any>,
      lifecycle?:List<any>,
      changeDetection?:string
    });

  function View({
      templateUrl,
      template,
      directives,
      formatters,
      source,
      locale,
      device
    }: {
      templateUrl?: string,
      template?: string,
      directives?: List<Type>,
      formatters?: List<Type>,
      source?: List<any>,
      locale?: string,
      device?: string
    });
  function For();
  function If();
}

declare module "angular2/directives" {
  function For();
  function If();
}


declare module "angular2/annotations" {
  var onChange: string;
  var onDestroy: string;
  var onAllChangesDone: string;
  function Attribute(attributeName: string);
  function Parent();

  function Component({
  selector,
  properties,
  hostListeners,
  injectables,
  lifecycle,
  changeDetection
  }:{
    selector:string,
    properties?:Object,
    hostListeners?:Object,
    injectables?:List<any>,
    lifecycle?:List<any>,
    changeDetection?:string
  });

  function Directive({
    selector,
    properties,
    hostListeners,
    injectables,
    lifecycle,
    changeDetection
    }:{
      selector:string,
      properties?:Object,
      hostListeners?:Object,
      injectables?:List<any>,
      lifecycle?:List<any>,
      changeDetection?:string
    });

  function View({
      templateUrl,
      template,
      directives,
      formatters,
      source,
      locale,
      device
    }: {
      templateUrl?: string,
      template?: string,
      directives?: List<Type>,
      formatters?: List<Type>,
      source?: List<any>,
      locale?: string,
      device?: string
    });
}

declare module "angular2/src/core/compiler/element_ref" {

  function ElementRef();
}

declare module "angular2/di" {

  function Inject(any);
  function bind(any);
}
