import{a as A}from"./chunk-WSO2QVS5.js";import{$ as w,E as S,K as C,M as u,Mb as T,Q as x,V as O,X as _,_a as P,ba as i,ec as $,f as m,gc as p,i as r,kb as j,l as h,la as E,m as g,n as v,o as b,p as D,t as y,ua as k,v as l,x as s,ya as I,za as B}from"./chunk-G7STBN2K.js";var z=w;function J(e){return!!e[z]}var K=Symbol("__destroy"),U=Symbol("__decoratorApplied");function R(e){return typeof e=="string"?Symbol(`__destroy__${e}`):K}function Q(e){e.prototype[U]=!0}function N(e,t){e[t]||(e[t]=new r)}function V(e,t){e[t]&&(e[t].next(),e[t].complete(),e[t]=null)}function F(e){e instanceof m&&e.unsubscribe()}function W(e){Array.isArray(e)&&e.forEach(F)}function G(e,t){return function(){if(e&&e.call(this),V(this,R()),t.arrayName&&W(this[t.arrayName]),t.checkProperties)for(let o in this)t.blackList?.includes(o)||F(this[o])}}function X(e,t){e.prototype.ngOnDestroy=G(e.prototype.ngOnDestroy,t)}function ee(e,t){let o=e.\u0275pipe;o.onDestroy=G(o.onDestroy,t)}function Z(e={}){return t=>{J(t)?ee(t,e):X(t,e),Q(t)}}var L=7,M=Symbol("CheckerHasBeenSet");function te(e,t){e[M]||oe()||(H(()=>b(Promise.resolve()).pipe(s(()=>{let o;try{o=B(e)}catch{o=null}let n=o?.lView;if(n==null)return h;let c=n[L]||(n[L]=[]),a=new r;return c.push(function(){H(()=>{a.next(),a.complete()})}),a}),s(()=>Promise.resolve())).subscribe(()=>{(t.observed??t.observers.length>0)&&console.warn(ne(e))})),e[M]=!0)}function oe(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]"}function H(e){let t=O.Zone;return!!t&&typeof t.root?.run=="function"?t.root.run(e):e()}function ne(e){return`
  The ${e.constructor.name} still has subscriptions that haven't been unsubscribed.
  This may happen if the class extends another class decorated with @UntilDestroy().
  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().
  Let's look at the following example:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {}
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
    }
  }
  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()
  on the ConcreteComponent, but not on the BaseDirective.
  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {
    ngOnDestroy(): void {}
  }
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
      super.ngOnDestroy();
    }
  }
  `}var f=!1;function re(e,t,o){let n=e[t];if(f&&typeof n!="function")throw new Error(`${e.constructor.name} is using untilDestroyed but doesn't implement ${t}`);N(e,o),e[t]=function(){n.apply(this,arguments),V(this,o),e[t]=n}}function pe(e,t){return o=>{let n=R(t);typeof t=="string"?re(e,t,n):(f&&ie(e),N(e,n));let c=e[n];return f&&te(e,c),o.pipe(x(c))}}function ie(e){let t=Object.getPrototypeOf(e);if(!(U in t))throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator")}var q=(()=>{class e{constructor(){this.initLoadingBufferHandler()}document=i(E);http=i(A);cache={};loadingBuffer$=new r;svgLoaded$=new r;getSvgIcon(o){if(this.cache[o]){let n=this.cloneSvg(this.cache[o]);return D(n)}return this.loadingBuffer$.next(o),this.svgLoaded$.pipe(S(({iconName:n})=>n===o),l(n=>n.svg),u())}initLoadingBufferHandler(){this.loadingBuffer$.pipe(C(),s(o=>this.loadSvg(o).pipe(u(),l(n=>({svg:n,iconName:o}))))).subscribe({next:({svg:o,iconName:n})=>{this.cache[n]=this.cloneSvg(o),this.svgLoaded$.next({iconName:n,svg:this.cloneSvg(o)})}})}cloneSvg(o){return o.cloneNode(!0)}loadSvg(o){return this.http.get(`assets/icons/${o}.svg`,{responseType:"text"}).pipe(l(n=>this.composeSvgElement(n)))}composeSvgElement(o){let n=this.document.createElement("div");return n.innerHTML=o,n.querySelector("svg")}static \u0275fac=function(n){return new(n||e)};static \u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Y=class d{block=!0;ariaHidden="true";icon=p.required();fill=p("");constructor(){k(()=>{let t=this.iconResource.value();t&&(this.fill()&&t.setAttribute("fill",this.fill()),this.setSvg(t))})}iconResource=$({params:()=>({icon:this.icon()}),loader:({params:t})=>y(this.iconService.getSvgIcon(t.icon))});elementRef=i(I);iconService=i(q);setSvg(t){let o=this.elementRef.nativeElement,n=t.cloneNode(!0);o.firstChild&&o.replaceChild(n,o.firstChild),o.appendChild(n)}static \u0275fac=function(o){return new(o||d)};static \u0275cmp=P({type:d,selectors:[["ps-icon"]],hostVars:3,hostBindings:function(o,n){o&2&&(j("aria-hidden",n.ariaHidden),T("block",n.block))},inputs:{icon:[1,"icon"],fill:[1,"fill"]},decls:0,vars:0,template:function(o,n){},encapsulation:2,changeDetection:0})};Y=g([Z(),v("design:paramtypes",[])],Y);export{Z as a,pe as b,Y as c};
