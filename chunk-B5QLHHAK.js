import{a as mt}from"./chunk-K66EXUFO.js";import{e as pt}from"./chunk-HS34P2VP.js";import"./chunk-HMKHSG36.js";import{a as dt,d as ht,i as ft,m as yt}from"./chunk-2L7GPSYA.js";import{b as ut,c as lt}from"./chunk-3LM2PHH3.js";import{g as ct,h as $}from"./chunk-Q2JNIJVH.js";import{$b as st,Ab as X,Db as F,Jb as N,Kb as Z,La as p,Mb as tt,Pb as C,Qb as et,Rb as L,Sb as nt,Tb as ot,Ub as it,Vb as rt,ab as k,bc as at,ga as E,kc as Y,la as d,lc as j,ma as h,mb as K,nb as B,qb as Q,rb as G,sb as J,tb as D,ua as g,ub as x,vb as H,wb as O,xb as P,yb as q}from"./chunk-YYXXHZ7Z.js";var jt=Math.pow(10,8)*24*60*60*1e3,Gt=-jt;var gt=864e5,Dt=6e4,xt=36e5;var $t=3600;var St=$t*24,Jt=St*7,Rt=St*365.2425,Vt=Rt/12,qt=Vt*3,R=Symbol.for("constructDateFrom");function l(o,i){return typeof o=="function"?o(i):o&&typeof o=="object"&&R in o?o[R](i):o instanceof Date?new o.constructor(i):new Date(i)}function c(o,i){return l(i||o,o)}function Tt(o,i,t){let e=c(o,t?.in);return isNaN(i)?l(t?.in||o,NaN):(i&&e.setDate(e.getDate()+i),e)}function _t(o,i,t){let e=c(o,t?.in);if(isNaN(i))return l(t?.in||o,NaN);if(!i)return e;let n=e.getDate(),r=l(t?.in||o,e.getTime());r.setMonth(e.getMonth()+i+1,0);let s=r.getDate();return n>=s?r:(e.setFullYear(r.getFullYear(),r.getMonth(),n),e)}function S(o,i,t){let{years:e=0,months:n=0,weeks:r=0,days:s=0,hours:a=0,minutes:u=0,seconds:f=0}=i,_=c(o,t?.in),M=n||e?_t(_,n+e*12):_,w=s||r?Tt(M,s+r*7):M,I=u+a*60,b=(f+I*60)*1e3;return l(t?.in||o,+w+b)}function V(o){let i=c(o),t=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));return t.setUTCFullYear(i.getFullYear()),+o-+t}function m(o,...i){let t=l.bind(null,o||i.find(e=>typeof e=="object"));return i.map(t)}function W(o,i){let t=c(o,i?.in);return t.setHours(0,0,0,0),t}function Mt(o,i,t){let[e,n]=m(t?.in,o,i),r=W(e),s=W(n),a=+r-V(r),u=+s-V(s);return Math.round((a-u)/gt)}function y(o,i){let t=+c(o)-+c(i);return t<0?-1:t>0?1:t}function Ct(o,i,t){let[e,n]=m(t?.in,o,i),r=e.getFullYear()-n.getFullYear(),s=e.getMonth()-n.getMonth();return r*12+s}function wt(o,i,t){let[e,n]=m(t?.in,o,i);return e.getFullYear()-n.getFullYear()}function bt(o,i,t){let[e,n]=m(t?.in,o,i),r=It(e,n),s=Math.abs(Mt(e,n));e.setDate(e.getDate()-r*s);let a=+(It(e,n)===-r),u=r*(s-a);return u===0?0:u}function It(o,i){let t=o.getFullYear()-i.getFullYear()||o.getMonth()-i.getMonth()||o.getDate()-i.getDate()||o.getHours()-i.getHours()||o.getMinutes()-i.getMinutes()||o.getSeconds()-i.getSeconds()||o.getMilliseconds()-i.getMilliseconds();return t<0?-1:t>0?1:t}function T(o){return i=>{let e=(o?Math[o]:Math.trunc)(i);return e===0?0:e}}function kt(o,i,t){let[e,n]=m(t?.in,o,i),r=(+e-+n)/xt;return T(t?.roundingMethod)(r)}function v(o,i){return+c(o)-+c(i)}function Ot(o,i,t){let e=v(o,i)/Dt;return T(t?.roundingMethod)(e)}function vt(o,i){let t=c(o,i?.in);return t.setHours(23,59,59,999),t}function At(o,i){let t=c(o,i?.in),e=t.getMonth();return t.setFullYear(t.getFullYear(),e+1,0),t.setHours(23,59,59,999),t}function Et(o,i){let t=c(o,i?.in);return+vt(t,i)==+At(t,i)}function Ht(o,i,t){let[e,n,r]=m(t?.in,o,o,i),s=y(n,r),a=Math.abs(Ct(n,r));if(a<1)return 0;n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-s*a);let u=y(n,r)===-s;Et(e)&&a===1&&y(e,r)===1&&(u=!1);let f=s*(a-+u);return f===0?0:f}function Pt(o,i,t){let e=v(o,i)/1e3;return T(t?.roundingMethod)(e)}function Ft(o,i,t){let[e,n]=m(t?.in,o,i),r=y(e,n),s=Math.abs(wt(e,n));e.setFullYear(1584),n.setFullYear(1584);let a=y(e,n)===-r,u=r*(s-+a);return u===0?0:u}function Nt(o,i){let[t,e]=m(o,i.start,i.end);return{start:t,end:e}}function Lt(o,i){let{start:t,end:e}=Nt(i?.in,o),n={},r=Ft(e,t);r&&(n.years=r);let s=S(t,{years:n.years}),a=Ht(e,s);a&&(n.months=a);let u=S(s,{months:n.months}),f=bt(e,u);f&&(n.days=f);let _=S(u,{days:n.days}),M=kt(e,_);M&&(n.hours=M);let w=S(_,{hours:n.hours}),I=Ot(e,w);I&&(n.minutes=I);let U=S(w,{minutes:n.minutes}),b=Pt(e,U);return b&&(n.seconds=b),n}var Yt=(()=>{class o{path=Y.required();date=Y.required();static \u0275fac=function(e){return new(e||o)};static \u0275cmp=k({type:o,selectors:[["ps-terminal-app-status-bar"]],inputs:{path:[1,"path"],date:[1,"date"]},decls:9,vars:5,consts:[[1,"ps-terminal-app-status-bar","relative"],[1,"line"],["data-testid","bar",1,"flex","justify-between","pr-2"],[1,"flex","flex-col"],["data-testid","path"],["data-testid","date"]],template:function(e,n){e&1&&(O(0,"div",0),q(1,"div",1),O(2,"div",2)(3,"div",3)(4,"span",4),C(5),P()(),O(6,"span",5),C(7),st(8,"date"),P()()()),e&2&&(p(5),L(" ",n.path()," "),p(2),L(" at ",at(8,2,n.date(),"HH:mm:ss")," "))},dependencies:[ct],encapsulation:2,changeDetection:0})}return o})();var z=[{command:"clear",shortHelpDescription:"Clears the entire console"},{command:"auth",shortHelpDescription:"Authentication related commands",commandArguments:[{name:"status"},{name:"login"},{name:"logout"}]},{command:"ls",shortHelpDescription:"Lists the contents of the current directory"},{command:"hello",shortHelpDescription:"Say hello"},{command:"whoami",shortHelpDescription:"Prints the name of the current user"},{command:"uptime",shortHelpDescription:"Prints the time since the system has been live"},{command:"cowsay",shortHelpDescription:"Make the cow say something"},{command:"pwd",shortHelpDescription:"Print current working directory"},{command:"cd",shortHelpDescription:"Change directory"},{command:"cat",shortHelpDescription:"Display file contents"},{command:"echo",shortHelpDescription:"Display a line of text"},{command:"date",shortHelpDescription:"Display current date and time"},{command:"env",shortHelpDescription:"Display environment information"},{command:"history",shortHelpDescription:"Display command history"},{command:"about",shortHelpDescription:"About this portfolio"},{command:"skills",shortHelpDescription:"Display technical skills"},{command:"projects",shortHelpDescription:"List notable projects"},{command:"contact",shortHelpDescription:"Get contact information"},{command:"help",shortHelpDescription:"Print all available commands"}];var A=class{path;id;createdAt;get stdOut(){return this._stdOut}constructor(i){this.path=i,this.id=mt(),this.createdAt=new Date().toISOString()}_stdOut="";pushToStdOut(i){this._stdOut+=`${i}`}};var zt=["input"],Ut=["container"],Kt=(o,i)=>i.id;function Bt(o,i){o&1&&(D(0,"pre",9),C(1),x()),o&2&&(p(),et(i))}function Qt(o,i){if(o&1&&(D(0,"div"),H(1,"ps-terminal-app-status-bar",8),K(2,Bt,2,1,"pre",9),x()),o&2){let t,e=i.$implicit;p(),J("path",e.path)("date",e.createdAt),p(),B((t=e.stdOut)?2:-1,t)}}var Wn=(()=>{class o{currentPath=g("~/Desktop");terminalEvents=g([]);command=g("");cursorPos=g(0);isLoginFlow=g(!1);_input=j("input");_container=j("container");availableCommands=z.map(({command:t})=>t);commandHistory=[];historyIndex=-1;tempCommand="";get input(){return this._input()?.nativeElement}decimalPipe=E($);authStore=E(pt);ngOnInit(){this.pushEmptyExecution()}ngAfterViewInit(){this.onFocusInput()}async onExecCommand(){let t=this.command().trim();if(!t){this.pushEmptyExecution();return}t&&t!==this.commandHistory[this.commandHistory.length-1]&&this.commandHistory.push(t),this.historyIndex=-1,this.tempCommand="";let{baseCommand:e,args:n}=this.parseCommand(t);this.printToStdOut(`$ ${t}`);let r=lt(z,({command:s})=>s===e);if(!r)this.printToStdOut(`
command not found: ${e}`);else switch(r.command){case"clear":this.onClear();break;case"ls":this.onList();break;case"hello":this.printToStdOut("Hi there, friend. \u{1F427}");break;case"whoami":this.onWhoAmI();break;case"uptime":this.onUptime();break;case"cowsay":this.onCowSay(n);break;case"help":this.onHelp();break;case"auth":await this.onAuth(r,n);break;case"pwd":this.onPwd();break;case"cd":this.onCd(n);break;case"cat":this.onCat(n);break;case"echo":this.onEcho(n);break;case"date":this.onDate();break;case"env":this.onEnv();break;case"history":this.onHistory();break;case"about":this.onAbout();break;case"skills":this.onSkills();break;case"projects":this.onProjects();break;case"contact":this.onContact();break;default:ut();break}this.pushEmptyExecution(),this.cursorPos.set(0),this.command.set(""),setTimeout(()=>this.scrollToBottom(),10)}scrollToBottom(){let t=this._container()?.nativeElement;t&&(t.scrollTop=t.scrollHeight)}onUpdateCursorPosition(){this.cursorPos.set(this.input.selectionStart??0)}onFocusInput(){this.input.focus()}onKeyDown(t){if(this.isMacOS?t.metaKey&&t.key==="c":t.ctrlKey&&t.key==="c"){t.preventDefault(),this.command.set(""),this.cursorPos.set(0),this.command()&&(this.printToStdOut(`$ ${this.command()}^C`),this.pushEmptyExecution());return}if(this.isMacOS?t.metaKey&&t.key==="l":t.ctrlKey&&t.key==="l"){t.preventDefault(),this.onClear(),this.command.set(""),this.cursorPos.set(0);return}if(t.ctrlKey&&t.key==="u"){t.preventDefault(),this.command.set(""),this.cursorPos.set(0),this.input.value="";return}if(t.ctrlKey&&t.key==="a"){t.preventDefault(),this.input.selectionStart=0,this.input.selectionEnd=0,this.cursorPos.set(0);return}if(t.ctrlKey&&t.key==="e"){t.preventDefault();let r=this.command().length;this.input.selectionStart=r,this.input.selectionEnd=r,this.cursorPos.set(r);return}if(t.key==="ArrowUp"){if(t.preventDefault(),this.commandHistory.length===0)return;this.historyIndex===-1?(this.tempCommand=this.command(),this.historyIndex=this.commandHistory.length-1):this.historyIndex>0&&this.historyIndex--,this.command.set(this.commandHistory[this.historyIndex]),this.input.value=this.commandHistory[this.historyIndex],setTimeout(()=>{this.input.selectionStart=this.input.value.length,this.input.selectionEnd=this.input.value.length,this.cursorPos.set(this.input.value.length)});return}if(t.key==="ArrowDown"){if(t.preventDefault(),this.historyIndex===-1)return;this.historyIndex<this.commandHistory.length-1?(this.historyIndex++,this.command.set(this.commandHistory[this.historyIndex]),this.input.value=this.commandHistory[this.historyIndex]):(this.historyIndex=-1,this.command.set(this.tempCommand),this.input.value=this.tempCommand),setTimeout(()=>{this.input.selectionStart=this.input.value.length,this.input.selectionEnd=this.input.value.length,this.cursorPos.set(this.input.value.length)});return}if(t.key==="Tab"){t.preventDefault();let r=this.command().toLowerCase();if(!r)return;let s=this.availableCommands.filter(a=>a.startsWith(r));s.length===1?(this.command.set(s[0]),this.input.value=s[0],setTimeout(()=>{this.input.selectionStart=s[0].length,this.input.selectionEnd=s[0].length,this.cursorPos.set(s[0].length)})):s.length>1&&(this.printToStdOut(`
${s.join("  ")}`),this.pushEmptyExecution());return}}onHelp(){this.printToStdOut(`
Available commands:

${this.availableCommands.join(`
`)}`)}onCowSay(t){let e=t.join(" ")||"Hello!";this.printToStdOut(`
 ________
< ${e} >
 --------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`)}async onAuth(t,e){if(!e.length){this.printToStdOut("Invalid number of arguments");return}let n=e[0];if(n==="status"){this.printToStdOut(`
Authentication status: ${this.authStore.isAuthenticated()?"authenticated":"unauthenticated"}`);return}if(n==="login"){if(e.length<3){this.printToStdOut("Usage: auth login <email> <password>");return}let r=e[1],s=e[2];try{this.printToStdOut(`
Authenticating...`),await this.authStore.login({email:r,password:s}),this.authStore.isAuthenticated()?this.printToStdOut(`
Authentication successful`):this.printToStdOut(`
Authentication failed`)}catch(a){this.printToStdOut(`
Authentication error: ${a instanceof Error?a.message:"Unknown error"}`)}return}this.printToStdOut(`
Unknown argument: ${n}`)}onUptime(){let e=Lt({start:new Date(-864e13),end:new Date}),n=[],r=s=>this.decimalPipe.transform(s);e.years&&n.push(e.years>1?`${r(e.years)} years`:"1 year"),e.months&&n.push(e.months>1?`${r(e.months)} months`:"1 month"),e.days&&n.push(e.days>1?`${r(e.days)} days`:"1 day"),e.minutes&&n.push(e.minutes>1?`${r(e.minutes)} minutes`:"1 minute"),e.seconds&&n.push(e.seconds>1?`${r(e.seconds)} seconds`:"1 second"),this.printToStdOut(`
`+n.join(", "))}onClear(){this.terminalEvents.set([]),this.pushEmptyExecution()}onList(){this.printToStdOut(`
Projects/`)}pushEmptyExecution(){this.terminalEvents.update(t=>[...t,new A(this.currentPath())])}onWhoAmI(){this.authStore.isAuthenticated()?this.printToStdOut(`
`+this.authStore.email()):this.printToStdOut(`
guest`)}printToStdOut(t){this.terminalEvents.update(e=>{let n=[...e];return n[n.length-1].pushToStdOut(t),n})}get isMacOS(){return/macintosh|mac os x/i.test(navigator.userAgent)}onPwd(){this.printToStdOut(`
`+this.currentPath())}onCd(t){if(!t.length||t[0]==="~")this.currentPath.set("~/Desktop"),this.printToStdOut("");else if(t[0]===".."){let e=this.currentPath().split("/");e.length>2&&(e.pop(),this.currentPath.set(e.join("/"))),this.printToStdOut("")}else this.currentPath.set(`${this.currentPath()}/${t[0]}`),this.printToStdOut("")}onCat(t){if(!t.length){this.printToStdOut(`
cat: missing file operand`);return}let e=t[0],n={"README.md":`# Welcome to my Portfolio Terminal

This is an interactive terminal portfolio.
Try these commands:
  - about
  - skills
  - projects
  - contact`,"skills.txt":"TypeScript, Angular, React, Node.js, Python, Docker, AWS","contact.txt":`Email: your.email@example.com
GitHub: @yourusername`};n[e]?this.printToStdOut(`
`+n[e]):this.printToStdOut(`
cat: ${e}: No such file or directory`)}onEcho(t){this.printToStdOut(`
`+t.join(" "))}onDate(){let t=new Date;this.printToStdOut(`
`+t.toLocaleString())}onEnv(){let t=[`USER=${this.authStore.isAuthenticated()?this.authStore.email():"guest"}`,`PATH=${this.currentPath()}`,"SHELL=/bin/zsh","TERM=xterm-256color","HOME=~/Desktop"];this.printToStdOut(`
`+t.join(`
`))}onHistory(){if(this.commandHistory.length===0){this.printToStdOut(`
No commands in history`);return}let t=this.commandHistory.map((e,n)=>`  ${n+1}  ${e}`).join(`
`);this.printToStdOut(`
`+t)}onAbout(){this.printToStdOut(`
\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551      PORTFOLIO TERMINAL v1.0          \u2551
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

Welcome to my interactive terminal portfolio!

This is a fully functional terminal emulator built with:
  \u2022 Angular 20+ with Signals
  \u2022 TypeScript
  \u2022 Nx Monorepo
  \u2022 Tailwind CSS

Type 'help' to see all available commands.`)}onSkills(){this.printToStdOut(`
\u{1F680} Technical Skills

Frontend:
  \u2022 Angular, React, Vue.js
  \u2022 TypeScript, JavaScript (ES6+)
  \u2022 RxJS, NgRx, Redux
  \u2022 HTML5, CSS3, SCSS, Tailwind

Backend:
  \u2022 Node.js, Express
  \u2022 Python, FastAPI
  \u2022 RESTful APIs, GraphQL

Tools & Others:
  \u2022 Git, Docker, Kubernetes
  \u2022 AWS, Azure
  \u2022 CI/CD, Jest, Cypress
  \u2022 Nx, Monorepo Architecture`)}onProjects(){this.printToStdOut(`
\u{1F4C1} Notable Projects

1. Terminal Portfolio (this!)
   A fully interactive terminal-based portfolio
   Tech: Angular, TypeScript, Nx

2. Window Manager System
   macOS-like window management in the browser
   Tech: Angular, CDK, Signals

3. Authentication System
   JWT-based auth with secure token handling
   Tech: Angular, RxJS, SignalStore

Type 'cat README.md' for more info.`)}onContact(){this.printToStdOut(`
\u{1F4EB} Get in Touch

Email:    your.email@example.com
GitHub:   github.com/yourusername
LinkedIn: linkedin.com/in/yourprofile
Website:  yourwebsite.com

Feel free to reach out for opportunities or collaborations!`)}parseCommand=t=>{let n=t.split(" ");return{baseCommand:n[0].trim().toLowerCase(),args:[...n.slice(1)]}};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=k({type:o,selectors:[["ps-terminal-app"]],viewQuery:function(e,n){e&1&&(N(n._input,zt,5),N(n._container,Ut,5)),e&2&&Z(2)},features:[rt([$])],decls:10,vars:3,consts:[["container",""],["input",""],[1,"ps-terminal-app","flex","h-full","w-full","flex-1","flex-col","overflow-y-auto","scroll-smooth","p-2",3,"click"],[1,"flex","flex-col","gap-2"],["cdkTrapFocus","",1,"mt-2"],[1,"relative","w-full"],["autocomplete","off","autocorrect","off","autocapitalize","off","spellcheck","false","type","text",1,"w-full","cursor-default","bg-transparent","font-mono","text-sm","caret-transparent","outline-none",3,"ngModelChange","input","click","keyup","keydown","keydown.enter","ngModel"],[1,"animate-blink","pointer-events-none","absolute","left-0","top-0","h-[1.4em]","w-[0.6ch]","bg-black"],[1,"pointer-events-none","select-none",3,"path","date"],[1,"whitespace-pre-wrap","break-words","font-mono","text-sm","leading-relaxed"]],template:function(e,n){if(e&1){let r=X();D(0,"div",2,0),F("click",function(){return d(r),h(n.onFocusInput())}),D(2,"div",3),Q(3,Qt,3,3,"div",null,Kt),x(),D(5,"div",4)(6,"div",5)(7,"input",6,1),it("ngModelChange",function(a){return d(r),ot(n.command,a)||(n.command=a),h(a)}),F("input",function(){return d(r),h(n.onUpdateCursorPosition())})("click",function(){return d(r),h(n.onUpdateCursorPosition())})("keyup",function(){return d(r),h(n.onUpdateCursorPosition())})("keydown",function(a){return d(r),h(n.onKeyDown(a))})("keydown.enter",function(){return d(r),h(n.onExecCommand())}),x(),H(9,"div",7),x()()()}e&2&&(p(3),G(n.terminalEvents()),p(4),nt("ngModel",n.command),p(2),tt("left",n.cursorPos()*.6+"ch"))},dependencies:[Yt,yt,dt,ht,ft],styles:[".ps-terminal-app[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace}.ps-terminal-app[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;padding:.25rem 0;font-family:inherit}.ps-terminal-app[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:inherit}"],changeDetection:0})}return o})();export{Wn as TerminalAppComponent};
