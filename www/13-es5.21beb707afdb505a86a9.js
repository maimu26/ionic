(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{L6id:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),r=u("oBZk"),i=u("ZZ/e"),b=u("Ip0R"),s=u("mrSG"),c=u("tMdj"),a=function(){function l(l,n,u){this.modalController=l,this.http=n,this.alertController=u,this.getStudents()}return l.prototype.openModal=function(){return s.b(this,void 0,void 0,(function(){var l,n=this;return s.d(this,(function(u){switch(u.label){case 0:return[4,this.modalController.create({component:c.a,componentProps:{userID:this.userID}})];case 1:return(l=u.sent()).onDidDismiss().then((function(){n.getStudents(),n.userID=null})),[4,l.present()];case 2:return[2,u.sent()]}}))}))},l.prototype.getStudents=function(){var l=this;this.http.get("https://click-on-kaduna.herokuapp.com/api/student").subscribe((function(n){l.students=n.data}))},l.prototype.edit=function(l){this.userID=l,this.openModal()},l.prototype.presentAlert=function(l){return s.b(this,void 0,void 0,(function(){return s.d(this,(function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Alert",message:l,buttons:["OK"]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},l}(),p=u("t/Na"),h=t.qb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Ib(0,[(l()(),t.sb(0,0,null,null,15,"ion-item",[],null,null,null,r.p,r.f)),t.rb(1,49152,null,0,i.F,[t.h,t.k,t.z],null,null),(l()(),t.sb(2,0,null,0,2,"ion-label",[],null,null,null,r.q,r.g)),t.rb(3,49152,null,0,i.L,[t.h,t.k,t.z],null,null),(l()(),t.Hb(4,0,["",""])),(l()(),t.sb(5,0,null,0,2,"ion-label",[],null,null,null,r.q,r.g)),t.rb(6,49152,null,0,i.L,[t.h,t.k,t.z],null,null),(l()(),t.Hb(7,0,["",""])),(l()(),t.sb(8,0,null,0,2,"ion-label",[],null,null,null,r.q,r.g)),t.rb(9,49152,null,0,i.L,[t.h,t.k,t.z],null,null),(l()(),t.Hb(10,0,["",""])),(l()(),t.sb(11,0,null,0,4,"ion-label",[],null,null,null,r.q,r.g)),t.rb(12,49152,null,0,i.L,[t.h,t.k,t.z],null,null),(l()(),t.sb(13,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.edit(l.context.$implicit.id)&&t),t}),r.l,r.b)),t.rb(14,49152,null,0,i.i,[t.h,t.k,t.z],null,null),(l()(),t.Hb(-1,0,["View"]))],null,(function(l,n){l(n,4,0,n.context.$implicit.name),l(n,7,0,n.context.$implicit.stream),l(n,10,0,n.context.$implicit.action)}))}function f(l){return t.Ib(0,[(l()(),t.sb(0,0,null,null,6,"ion-header",[],null,null,null,r.n,r.d)),t.rb(1,49152,null,0,i.z,[t.h,t.k,t.z],null,null),(l()(),t.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.t,r.j)),t.rb(3,49152,null,0,i.Ab,[t.h,t.k,t.z],null,null),(l()(),t.sb(4,0,null,0,2,"ion-title",[],null,null,null,r.s,r.i)),t.rb(5,49152,null,0,i.yb,[t.h,t.k,t.z],null,null),(l()(),t.Hb(-1,0,[" Students Directory "])),(l()(),t.sb(7,0,null,null,20,"ion-content",[],null,null,null,r.m,r.c)),t.rb(8,49152,null,0,i.s,[t.h,t.k,t.z],null,null),(l()(),t.sb(9,0,null,0,18,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),t.sb(10,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openModal()&&t),t}),r.l,r.b)),t.rb(11,49152,null,0,i.i,[t.h,t.k,t.z],{expand:[0,"expand"]},null),(l()(),t.Hb(-1,0,["Add Student"])),(l()(),t.sb(13,0,null,null,14,"ion-list",[],null,null,null,r.r,r.h)),t.rb(14,49152,null,0,i.M,[t.h,t.k,t.z],null,null),(l()(),t.sb(15,0,null,0,10,"ion-item",[["color","primary"]],null,null,null,r.p,r.f)),t.rb(16,49152,null,0,i.F,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.sb(17,0,null,0,2,"ion-label",[],null,null,null,r.q,r.g)),t.rb(18,49152,null,0,i.L,[t.h,t.k,t.z],null,null),(l()(),t.Hb(-1,0,["Name"])),(l()(),t.sb(20,0,null,0,2,"ion-label",[],null,null,null,r.q,r.g)),t.rb(21,49152,null,0,i.L,[t.h,t.k,t.z],null,null),(l()(),t.Hb(-1,0,["Stream"])),(l()(),t.sb(23,0,null,0,2,"ion-label",[],null,null,null,r.q,r.g)),t.rb(24,49152,null,0,i.L,[t.h,t.k,t.z],null,null),(l()(),t.Hb(-1,0,["Action"])),(l()(),t.hb(16777216,null,0,1,null,d)),t.rb(27,278528,null,0,b.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,11,0,"block"),l(n,16,0,"primary"),l(n,27,0,u.students)}),null)}function k(l){return t.Ib(0,[(l()(),t.sb(0,0,null,null,1,"app-home",[],null,null,null,f,h)),t.rb(1,49152,null,0,a,[i.Eb,p.c,i.a],null,null)],null,null)}var m=t.ob("app-home",a,k,{},{},[]),g=u("gIcY"),z=u("ZYCi");u.d(n,"HomePageModuleNgFactory",(function(){return B}));var B=t.pb(e,[],(function(l){return t.Ab([t.Bb(512,t.j,t.ab,[[8,[o.a,m]],[3,t.j],t.x]),t.Bb(4608,b.k,b.j,[t.u,[2,b.r]]),t.Bb(4608,g.g,g.g,[]),t.Bb(4608,i.b,i.b,[t.z,t.g]),t.Bb(4608,i.Eb,i.Eb,[i.b,t.j,t.q]),t.Bb(4608,i.Ib,i.Ib,[i.b,t.j,t.q]),t.Bb(1073742336,b.b,b.b,[]),t.Bb(1073742336,g.f,g.f,[]),t.Bb(1073742336,g.a,g.a,[]),t.Bb(1073742336,i.Cb,i.Cb,[]),t.Bb(1073742336,z.n,z.n,[[2,z.s],[2,z.m]]),t.Bb(1073742336,e,e,[]),t.Bb(1024,z.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);