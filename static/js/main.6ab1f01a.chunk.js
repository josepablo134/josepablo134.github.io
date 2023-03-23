(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var i=c(9),n=c(3),a=c(1),s=c(0),o=Object(a.createContext)(),r=function(e){var t=e.children,c=Object(a.useState)("light"),i=Object(n.a)(c,2),r=i[0],l=i[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(o.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="https://josepablo134.github.io/",j="~",d="Josepablo C",m="Computer Engineer",b="\u201cIf I have seen further it is by standing on the shoulders of giants\u201d",h={linkedin:"https://www.linkedin.com/in/josepablo-cruz-a897a1132/",github:"https://github.com/josepablo134/"},u=[{name:"microMiddlewares",description:"Containing a graphics library, a LTI DSP driver, common communication drivers: SPI, I2C; external device drivers: MCP2515 SPI-CAN bridge, ILI9341 color display driver, SSD1306 OLED display driver, and more. This project is a set of reusable platform independent middlewares and drivers. The middleware design is based on the Linux Kernel Device Drivers. The project is exported as a CMake package.",stack:["CMake","arm-none-eabi-gcc","Doxygen"],sourceCode:"https://github.com/josepablo134/microMiddlewares",livePreview:"https://github.com/josepablo134/microMiddlewares"},{name:"microANN",description:"Micro Artificial Neural Network is a minimalist ANN library to deploy AI on microcontrollers. This allows the creation of multi-layer ANNs in an environment without dynamic memory.",stack:["C","ANN","IA"],sourceCode:"https://github.com/josepablo134/microANN",livePreview:"https://github.com/josepablo134/microANN"},{name:"uRTOS",description:"A minimalist RTOS made from scratch based on FreeRTOS interfaces. The purpose of this RTOS is experimenting with OS subjects. Mainly created for PIC18F4550 but later ported to Tiva C ARM-M microcontroller.",stack:["C","RTOS"],sourceCode:"https://gitlab.com/josepablo134/urtos",livePreview:"https://gitlab.com/josepablo134/urtos"},{name:"TivaCTemplate",description:"A template for projects based on TivaC microcontrollers and FreeRTOS made with CMake/Ninja. Provides a general and common structure for projects development, allowing integration of external software packages like my software package microMiddlewares. This template is the base of most of my personal projects.",stack:["CMake","Ninja","arm-none-eabi-gcc","GDB","OpenOCD"],sourceCode:"https://github.com/josepablo134/TivaCTemplate",livePreview:"https://github.com/josepablo134/TivaCTemplate"},{name:"PIC18F4550CTemplate",description:"A template for projects based on PIC18F4550 microcontroller. Provides a general and common structure for projects development. This project is based on MPLAB X and already contains several drivers ready to use like: UART, ADC, PWM, DIO, SPI, I2C, Timer 1 and Program Flash. PIC18F4550 was the very first microcontroller I learned detailed so I developed a dev. board to continue working on this platform. This project is the base of most of my personal projects based on this microcontroller.",stack:["MPLAB X","PIC18F4550"],sourceCode:"https://github.com/josepablo134/PIC18F4550Ctemplate",livePreview:"https://github.com/josepablo134/PIC18F4550Ctemplate"},{name:"HDMI-CEC to Serial Bridge",description:"One of my very first ambitions projects. I hacked the HDMI-CEC communication protocol existing on the HDMI specification so I can control HDMI devices. Since there is no microcontroller supporting this communication protocol I developed a bit banging project on the PIC16F628A, a very cheap and minimalist microcontroller.",stack:["MPLAB X","PIC16F628A","Bit banging","HDMI-CEC"],sourceCode:"https://github.com/josepablo134/cec_bridge",livePreview:"https://github.com/josepablo134/cec_bridge"}],p=["C/C++","Make/CMake/Ninja","Linux User Space/Device Drivers","Embedded Linux: Buildroot/Yocto","RTOS: FreeRTOS, Ti-RTOS, CMSIS-RTOS, OSEK-RTOS","Compiler and Linker: Memory Management/Allocation/Memory Architecture Design","Automotive: AUTOSAR, ASPICE, Vector DaVinci, Elektrobit Tresos"],O="jcruzbaas@gmail.com",f=c(16),v=c.n(f),x=c(14),g=c.n(x),k=c(18),C=c.n(k),N=c(17),_=c.n(N),w=(c(28),function(){var e=Object(a.useContext)(o),t=Object(n.a)(e,1)[0],c=t.themeName,i=t.toggleTheme,r=Object(a.useState)(!1),l=Object(n.a)(r,2),j=l[0],d=l[1],m=function(){return d(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[u.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(s.jsx)(g.a,{}):Object(s.jsx)(v.a,{})}),Object(s.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(_.a,{}):Object(s.jsx)(C.a,{})})]})}),I=(c(32),function(){var e=l,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(w,{})]})}),T=c(11),S=c.n(T),P=c(19),y=c.n(P),M=(c(33),function(){var e=d,t=m,c=b,i=h;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:c&&c}),Object(s.jsx)("div",{className:"about__contact center",children:i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(S.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(y.a,{})})]})})]})}),A=c(7),D=c.n(A),E=c(20),R=c.n(E),F=(c(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},D()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(S.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(R.a,{})})]})}),L=(c(36),function(){return u.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:u.map((function(e){return Object(s.jsx)(F,{project:e},D()())}))})]}):null}),B=(c(37),function(){return p.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},D()())}))})]}):null}),H=c(21),z=c.n(H),J=(c(38),function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(z.a,{fontSize:"large"})})}):null}),U=(c(39),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),X=(c(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),K=(c(41),function(){var e=Object(a.useContext)(o),t=Object(n.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(I,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(M,{}),Object(s.jsx)(L,{}),Object(s.jsx)(B,{}),Object(s.jsx)(U,{})]}),Object(s.jsx)(J,{}),Object(s.jsx)(X,{})]})});c(42);Object(i.render)(Object(s.jsx)(r,{children:Object(s.jsx)(K,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6ab1f01a.chunk.js.map