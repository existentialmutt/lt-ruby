if(!lt.util.load.provided_QMARK_('crate.binding')) {
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__6931__auto__,writer__6932__auto__,opt__6933__auto__){return cljs.core._write.call(null,writer__6932__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8168 = cljs.core.seq.call(null,self__.watches);var chunk__8169 = null;var count__8170 = 0;var i__8171 = 0;while(true){
if((i__8171 < count__8170))
{var vec__8172 = cljs.core._nth.call(null,chunk__8169,i__8171);var key__$1 = cljs.core.nth.call(null,vec__8172,0,null);var f = cljs.core.nth.call(null,vec__8172,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8247 = seq__8168;
var G__8248 = chunk__8169;
var G__8249 = count__8170;
var G__8250 = (i__8171 + 1);
seq__8168 = G__8247;
chunk__8169 = G__8248;
count__8170 = G__8249;
i__8171 = G__8250;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8168);if(temp__4092__auto__)
{var seq__8168__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8168__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8168__$1);{
var G__8251 = cljs.core.chunk_rest.call(null,seq__8168__$1);
var G__8252 = c__7112__auto__;
var G__8253 = cljs.core.count.call(null,c__7112__auto__);
var G__8254 = 0;
seq__8168 = G__8251;
chunk__8169 = G__8252;
count__8170 = G__8253;
i__8171 = G__8254;
continue;
}
} else
{var vec__8173 = cljs.core.first.call(null,seq__8168__$1);var key__$1 = cljs.core.nth.call(null,vec__8173,0,null);var f = cljs.core.nth.call(null,vec__8173,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8255 = cljs.core.next.call(null,seq__8168__$1);
var G__8256 = null;
var G__8257 = 0;
var G__8258 = 0;
seq__8168 = G__8255;
chunk__8169 = G__8256;
count__8170 = G__8257;
i__8171 = G__8258;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.atm))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8175 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8175,0,null);var path__$2 = cljs.core.nth.call(null,vec__8175,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__8175,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__8175,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__8259__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8259 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8259__delegate.call(this,sa,f,x,y,z,more);};
G__8259.cljs$lang$maxFixedArity = 5;
G__8259.cljs$lang$applyTo = (function (arglist__8260){
var sa = cljs.core.first(arglist__8260);
arglist__8260 = cljs.core.next(arglist__8260);
var f = cljs.core.first(arglist__8260);
arglist__8260 = cljs.core.next(arglist__8260);
var x = cljs.core.first(arglist__8260);
arglist__8260 = cljs.core.next(arglist__8260);
var y = cljs.core.first(arglist__8260);
arglist__8260 = cljs.core.next(arglist__8260);
var z = cljs.core.first(arglist__8260);
var more = cljs.core.rest(arglist__8260);
return G__8259__delegate(sa,f,x,y,z,more);
});
G__8259.cljs$core$IFn$_invoke$arity$variadic = G__8259__delegate;
return G__8259;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj8177 = {};return obj8177;
})();
crate.binding._depend = (function _depend(this$,atm){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.crate$binding$computable$_depend$arity$2;
} else
{return and__6352__auto__;
}
})())
{return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (crate.binding._depend[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (crate.binding._depend["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});
crate.binding._compute = (function _compute(this$){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__6352__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (crate.binding._compute[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (crate.binding._compute["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__6931__auto__,writer__6932__auto__,opt__6933__auto__){return cljs.core._write.call(null,writer__6932__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){var self__ = this;
var this$__$1 = this;this$__$1.atms = cljs.core.conj.call(null,this$__$1.atms,atm);
return cljs.core.add_watch.call(null,atm,self__.key,((function (this$__$1){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,this$__$1);
});})(this$__$1))
);
});
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;var nv = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));this$__$1.value = nv;
return cljs.core._notify_watches.call(null,this$__$1,old,nv);
});
crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8178 = cljs.core.seq.call(null,self__.watches);var chunk__8179 = null;var count__8180 = 0;var i__8181 = 0;while(true){
if((i__8181 < count__8180))
{var vec__8182 = cljs.core._nth.call(null,chunk__8179,i__8181);var key__$1 = cljs.core.nth.call(null,vec__8182,0,null);var f = cljs.core.nth.call(null,vec__8182,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8261 = seq__8178;
var G__8262 = chunk__8179;
var G__8263 = count__8180;
var G__8264 = (i__8181 + 1);
seq__8178 = G__8261;
chunk__8179 = G__8262;
count__8180 = G__8263;
i__8181 = G__8264;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8178);if(temp__4092__auto__)
{var seq__8178__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8178__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8178__$1);{
var G__8265 = cljs.core.chunk_rest.call(null,seq__8178__$1);
var G__8266 = c__7112__auto__;
var G__8267 = cljs.core.count.call(null,c__7112__auto__);
var G__8268 = 0;
seq__8178 = G__8265;
chunk__8179 = G__8266;
count__8180 = G__8267;
i__8181 = G__8268;
continue;
}
} else
{var vec__8183 = cljs.core.first.call(null,seq__8178__$1);var key__$1 = cljs.core.nth.call(null,vec__8183,0,null);var f = cljs.core.nth.call(null,vec__8183,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8269 = cljs.core.next.call(null,seq__8178__$1);
var G__8270 = null;
var G__8271 = 0;
var G__8272 = 0;
seq__8178 = G__8269;
chunk__8179 = G__8270;
count__8180 = G__8271;
i__8181 = G__8272;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));crate.binding._compute.call(null,neue);
var seq__8188_8273 = cljs.core.seq.call(null,atms);var chunk__8189_8274 = null;var count__8190_8275 = 0;var i__8191_8276 = 0;while(true){
if((i__8191_8276 < count__8190_8275))
{var atm_8277 = cljs.core._nth.call(null,chunk__8189_8274,i__8191_8276);crate.binding._depend.call(null,neue,atm_8277);
{
var G__8278 = seq__8188_8273;
var G__8279 = chunk__8189_8274;
var G__8280 = count__8190_8275;
var G__8281 = (i__8191_8276 + 1);
seq__8188_8273 = G__8278;
chunk__8189_8274 = G__8279;
count__8190_8275 = G__8280;
i__8191_8276 = G__8281;
continue;
}
} else
{var temp__4092__auto___8282 = cljs.core.seq.call(null,seq__8188_8273);if(temp__4092__auto___8282)
{var seq__8188_8283__$1 = temp__4092__auto___8282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8188_8283__$1))
{var c__7112__auto___8284 = cljs.core.chunk_first.call(null,seq__8188_8283__$1);{
var G__8285 = cljs.core.chunk_rest.call(null,seq__8188_8283__$1);
var G__8286 = c__7112__auto___8284;
var G__8287 = cljs.core.count.call(null,c__7112__auto___8284);
var G__8288 = 0;
seq__8188_8273 = G__8285;
chunk__8189_8274 = G__8286;
count__8190_8275 = G__8287;
i__8191_8276 = G__8288;
continue;
}
} else
{var atm_8289 = cljs.core.first.call(null,seq__8188_8283__$1);crate.binding._depend.call(null,neue,atm_8289);
{
var G__8290 = cljs.core.next.call(null,seq__8188_8283__$1);
var G__8291 = null;
var G__8292 = 0;
var G__8293 = 0;
seq__8188_8273 = G__8290;
chunk__8189_8274 = G__8291;
count__8190_8275 = G__8292;
i__8191_8276 = G__8293;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.compute = (function compute(compu){return crate.binding._compute.call(null,compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){return crate.binding._depend.call(null,compu,atm);
});
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj8193 = {};return obj8193;
})();
crate.binding.bindable = (function (){var obj8195 = {};return obj8195;
})();
crate.binding._value = (function _value(this$){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__6352__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (crate.binding._value[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (crate.binding._value["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__6352__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (crate.binding._on_change[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (crate.binding._on_change["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__6931__auto__,writer__6932__auto__,opt__6933__auto__){return cljs.core._write.call(null,writer__6932__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__6931__auto__,writer__6932__auto__,opt__6933__auto__){return cljs.core._write.call(null,writer__6932__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8196 = cljs.core.seq.call(null,self__.watches);var chunk__8197 = null;var count__8198 = 0;var i__8199 = 0;while(true){
if((i__8199 < count__8198))
{var vec__8200 = cljs.core._nth.call(null,chunk__8197,i__8199);var key = cljs.core.nth.call(null,vec__8200,0,null);var f = cljs.core.nth.call(null,vec__8200,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8294 = seq__8196;
var G__8295 = chunk__8197;
var G__8296 = count__8198;
var G__8297 = (i__8199 + 1);
seq__8196 = G__8294;
chunk__8197 = G__8295;
count__8198 = G__8296;
i__8199 = G__8297;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8196);if(temp__4092__auto__)
{var seq__8196__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8196__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8196__$1);{
var G__8298 = cljs.core.chunk_rest.call(null,seq__8196__$1);
var G__8299 = c__7112__auto__;
var G__8300 = cljs.core.count.call(null,c__7112__auto__);
var G__8301 = 0;
seq__8196 = G__8298;
chunk__8197 = G__8299;
count__8198 = G__8300;
i__8199 = G__8301;
continue;
}
} else
{var vec__8201 = cljs.core.first.call(null,seq__8196__$1);var key = cljs.core.nth.call(null,vec__8201,0,null);var f = cljs.core.nth.call(null,vec__8201,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8302 = cljs.core.next.call(null,seq__8196__$1);
var G__8303 = null;
var G__8304 = 0;
var G__8305 = 0;
seq__8196 = G__8302;
chunk__8197 = G__8303;
count__8198 = G__8304;
i__8199 = G__8305;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__6931__auto__,writer__6932__auto__,opt__6933__auto__){return cljs.core._write.call(null,writer__6932__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__8202){var vec__8203 = p__8202;var event = cljs.core.nth.call(null,vec__8203,0,null);var el = cljs.core.nth.call(null,vec__8203,1,null);var v = cljs.core.nth.call(null,vec__8203,2,null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__6364__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__8306){
var bc = cljs.core.first(arglist__8306);
var segs = cljs.core.rest(arglist__8306);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8212_8307 = cljs.core.seq.call(null,added);var chunk__8213_8308 = null;var count__8214_8309 = 0;var i__8215_8310 = 0;while(true){
if((i__8215_8310 < count__8214_8309))
{var a_8311 = cljs.core._nth.call(null,chunk__8213_8308,i__8215_8310);crate.binding.bc_add.call(null,bc,a_8311,a_8311);
{
var G__8312 = seq__8212_8307;
var G__8313 = chunk__8213_8308;
var G__8314 = count__8214_8309;
var G__8315 = (i__8215_8310 + 1);
seq__8212_8307 = G__8312;
chunk__8213_8308 = G__8313;
count__8214_8309 = G__8314;
i__8215_8310 = G__8315;
continue;
}
} else
{var temp__4092__auto___8316 = cljs.core.seq.call(null,seq__8212_8307);if(temp__4092__auto___8316)
{var seq__8212_8317__$1 = temp__4092__auto___8316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8212_8317__$1))
{var c__7112__auto___8318 = cljs.core.chunk_first.call(null,seq__8212_8317__$1);{
var G__8319 = cljs.core.chunk_rest.call(null,seq__8212_8317__$1);
var G__8320 = c__7112__auto___8318;
var G__8321 = cljs.core.count.call(null,c__7112__auto___8318);
var G__8322 = 0;
seq__8212_8307 = G__8319;
chunk__8213_8308 = G__8320;
count__8214_8309 = G__8321;
i__8215_8310 = G__8322;
continue;
}
} else
{var a_8323 = cljs.core.first.call(null,seq__8212_8317__$1);crate.binding.bc_add.call(null,bc,a_8323,a_8323);
{
var G__8324 = cljs.core.next.call(null,seq__8212_8317__$1);
var G__8325 = null;
var G__8326 = 0;
var G__8327 = 0;
seq__8212_8307 = G__8324;
chunk__8213_8308 = G__8325;
count__8214_8309 = G__8326;
i__8215_8310 = G__8327;
continue;
}
}
} else
{}
}
break;
}
var seq__8216 = cljs.core.seq.call(null,removed);var chunk__8217 = null;var count__8218 = 0;var i__8219 = 0;while(true){
if((i__8219 < count__8218))
{var r = cljs.core._nth.call(null,chunk__8217,i__8219);crate.binding.bc_remove.call(null,bc,r);
{
var G__8328 = seq__8216;
var G__8329 = chunk__8217;
var G__8330 = count__8218;
var G__8331 = (i__8219 + 1);
seq__8216 = G__8328;
chunk__8217 = G__8329;
count__8218 = G__8330;
i__8219 = G__8331;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8216);if(temp__4092__auto__)
{var seq__8216__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8216__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8216__$1);{
var G__8332 = cljs.core.chunk_rest.call(null,seq__8216__$1);
var G__8333 = c__7112__auto__;
var G__8334 = cljs.core.count.call(null,c__7112__auto__);
var G__8335 = 0;
seq__8216 = G__8332;
chunk__8217 = G__8333;
count__8218 = G__8334;
i__8219 = G__8335;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8216__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8336 = cljs.core.next.call(null,seq__8216__$1);
var G__8337 = null;
var G__8338 = 0;
var G__8339 = 0;
seq__8216 = G__8336;
chunk__8217 = G__8337;
count__8218 = G__8338;
i__8219 = G__8339;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__8220){var vec__8223 = p__8220;var path = cljs.core.nth.call(null,vec__8223,0,null);var opts = cljs.core.nth.call(null,vec__8223,1,null);var vec__8224 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8224,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8224,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__8224,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8223,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__8224,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8223,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8220 = null;if (arguments.length > 1) {
  p__8220 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8220);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8340){
var atm = cljs.core.first(arglist__8340);
var p__8220 = cljs.core.rest(arglist__8340);
return bound_coll__delegate(atm,p__8220);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8225){var vec__8227 = p__8225;var opts = cljs.core.nth.call(null,vec__8227,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__8227,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__8227,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8225 = null;if (arguments.length > 2) {
  p__8225 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8225);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8341){
var as = cljs.core.first(arglist__8341);
arglist__8341 = cljs.core.next(arglist__8341);
var atm = cljs.core.first(arglist__8341);
var p__8225 = cljs.core.rest(arglist__8341);
return map_bound__delegate(as,atm,p__8225);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8229 = b;if(G__8229)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8229.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8229.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8229);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8229);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8231 = b;if(G__8231)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8231.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8231.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8231);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8231);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8233 = atm;if(G__8233)
{var bit__7014__auto__ = (G__8233.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7014__auto__) || (G__8233.cljs$core$IDeref$))
{return true;
} else
{if((!G__8233.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8233);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8233);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__8234){var vec__8236 = p__8234;var func = cljs.core.nth.call(null,vec__8236,0,null);var func__$1 = (function (){var or__6364__auto__ = func;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8234 = null;if (arguments.length > 1) {
  p__8234 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8234);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8342){
var atm = cljs.core.first(arglist__8342);
var p__8234 = cljs.core.rest(arglist__8342);
return bound__delegate(atm,p__8234);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.ruby')) {
goog.provide('lt.objs.langs.ruby');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.objs.langs.ruby.plugin_dir = lt.objs.plugins.find_plugin.call(null,"Ruby Instarepl");
lt.objs.langs.ruby.shell = lt.util.load.node_module.call(null,"shelljs");
lt.objs.langs.ruby.rb_path = lt.objs.files.join.call(null,lt.objs.langs.ruby.plugin_dir,"rb-src/lt_client.rb");
lt.objs.langs.ruby.runner_path = lt.objs.files.join.call(null,lt.objs.langs.ruby.plugin_dir,"rb-src/lt_client_runner.sh");
lt.objs.langs.ruby.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,out);
if((out.indexOf("Connected") > -1))
{lt.objs.notifos.done_working.call(null);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","on-out","lt.objs.langs.ruby/on-out",2974479452),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.objs.langs.ruby.__BEH__on_error = (function __BEH__on_error(this$,data){var out = data.toString();if((new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).indexOf("Connected") > -1))
{return null;
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","on-error","lt.objs.langs.ruby/on-error",1840991010),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.objs.langs.ruby.__BEH__on_exit = (function __BEH__on_exit(this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{} else
{lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't connect.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Looks like there was an issue trying to connect\n                                                      to the project. Here's what we got:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"close"], null)], null)], null));
lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","on-exit","lt.objs.langs.ruby/on-exit",4700699216),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","connecting-notifier","lt.objs.langs.ruby/connecting-notifier",1639010209),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.ruby","on-exit","lt.objs.langs.ruby/on-exit",4700699216),new cljs.core.Keyword("lt.objs.langs.ruby","on-error","lt.objs.langs.ruby/on-error",1840991010),new cljs.core.Keyword("lt.objs.langs.ruby","on-out","lt.objs.langs.ruby/on-out",2974479452)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"buffer","buffer",3930752946),""], null));
return null;
}));
lt.objs.langs.ruby.escape_spaces = (function escape_spaces(s){if(cljs.core._EQ_.call(null,lt.objs.files.separator,"\\"))
{return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
} else
{return s;
}
});
lt.objs.langs.ruby.bash_escape_spaces = (function bash_escape_spaces(s){return clojure.string.replace.call(null,s," ","\\ ");
});
lt.objs.langs.ruby.run_rb = (function run_rb(p__8029){var map__8031 = p__8029;var map__8031__$1 = ((cljs.core.seq_QMARK_.call(null,map__8031))?cljs.core.apply.call(null,cljs.core.hash_map,map__8031):map__8031);var info = map__8031__$1;var client = cljs.core.get.call(null,map__8031__$1,new cljs.core.Keyword(null,"client","client",3951159101));var name = cljs.core.get.call(null,map__8031__$1,new cljs.core.Keyword(null,"name","name",1017277949));var project_path = cljs.core.get.call(null,map__8031__$1,new cljs.core.Keyword(null,"project-path","project-path",1907176907));var path = cljs.core.get.call(null,map__8031__$1,new cljs.core.Keyword(null,"path","path",1017337751));var n = lt.objs.notifos.working.call(null,"Connecting..");var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","connecting-notifier","lt.objs.langs.ruby/connecting-notifier",1639010209),client);var use_runner = (function (){var or__6364__auto__ = new cljs.core.Keyword("lt.objs.langs.ruby","use-rvm?","lt.objs.langs.ruby/use-rvm?",3656895808).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.Keyword("lt.objs.langs.ruby","use-rbenv?","lt.objs.langs.ruby/use-rbenv?",615998644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby));
}
})();var keys__GT_env = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lt.objs.langs.ruby","use-rbenv?","lt.objs.langs.ruby/use-rbenv?",615998644),new cljs.core.Keyword(null,"LT_USE_RBENV","LT_USE_RBENV",3640591680),new cljs.core.Keyword("lt.objs.langs.ruby","use-rvm?","lt.objs.langs.ruby/use-rvm?",3656895808),new cljs.core.Keyword(null,"LT_USE_RVM","LT_USE_RVM",4685907820),new cljs.core.Keyword("lt.objs.langs.ruby","enable-client-logging?","lt.objs.langs.ruby/enable-client-logging?",1197315652),new cljs.core.Keyword(null,"LT_ENABLE_CLIENT_LOGGING","LT_ENABLE_CLIENT_LOGGING",1714721026)], null);var env = cljs.core.zipmap.call(null,cljs.core.map.call(null,keys__GT_env,cljs.core.keys.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.objs.langs.ruby.ruby),cljs.core.keys.call(null,keys__GT_env)))),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null)));var env__$1 = (cljs.core.truth_(new cljs.core.Keyword("lt.objs.langs.ruby","rvm-path","lt.objs.langs.ruby/rvm-path",1422692051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby)))?cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"LT_RVM_PATH","LT_RVM_PATH",839899236),new cljs.core.Keyword("lt.objs.langs.ruby","rvm-path","lt.objs.langs.ruby/rvm-path",1422692051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby))):env);var command = (cljs.core.truth_(use_runner)?"bash":(function (){var or__6364__auto__ = new cljs.core.Keyword("lt.objs.langs.ruby","ruby-exe","lt.objs.langs.ruby/ruby-exe",1735754269).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return "ruby";
}
})());var args = (cljs.core.truth_(use_runner)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.ruby.runner_path,project_path,lt.objs.langs.ruby.bash_escape_spaces.call(null,lt.objs.langs.ruby.rb_path),lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.ruby.escape_spaces.call(null,lt.objs.langs.ruby.rb_path),lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)], null));return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"args","args",1016906831),args,new cljs.core.Keyword(null,"cwd","cwd",1014003170),project_path,new cljs.core.Keyword(null,"env","env",1014004831),env__$1,new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.objs.langs.ruby.check_ruby = (function check_ruby(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"ruby","ruby",1017416012),(function (){var or__6364__auto__ = new cljs.core.Keyword("lt.objs.langs.ruby","ruby-exe","lt.objs.langs.ruby/ruby-exe",1735754269).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return lt.objs.langs.ruby.shell.which("ruby");
}
})());
});
lt.objs.langs.ruby.check_client = (function check_client(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"ruby-client","ruby-client",4412625552),lt.objs.files.exists_QMARK_.call(null,lt.objs.langs.ruby.rb_path));
});
lt.objs.langs.ruby.find_project = (function find_project(obj){var p = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(obj);var roots = lt.objs.files.get_roots.call(null);var cur = p;var prev = "";while(true){
if(cljs.core.truth_((function (){var or__6364__auto__ = cljs.core.empty_QMARK_.call(null,cur);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = roots.call(null,cur);if(cljs.core.truth_(or__6364__auto____$1))
{return or__6364__auto____$1;
} else
{return cljs.core._EQ_.call(null,cur,prev);
}
}
})()))
{return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"project-path","project-path",1907176907),(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,p))?p:lt.objs.files.parent.call(null,p)));
} else
{if(cljs.core.truth_((function (){var and__6352__auto__ = lt.objs.files.dir_QMARK_.call(null,cur);if(cljs.core.truth_(and__6352__auto__))
{return lt.objs.files.exists_QMARK_.call(null,lt.objs.files.join.call(null,cur,"Gemfile"));
} else
{return and__6352__auto__;
}
})()))
{return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"project-path","project-path",1907176907),cur);
} else
{{
var G__8088 = lt.objs.files.parent.call(null,cur);
var G__8089 = cur;
cur = G__8088;
prev = G__8089;
continue;
}
}
}
break;
}
});
lt.objs.langs.ruby.notify = (function notify(obj){var map__8033 = obj;var map__8033__$1 = ((cljs.core.seq_QMARK_.call(null,map__8033))?cljs.core.apply.call(null,cljs.core.hash_map,map__8033):map__8033);var client = cljs.core.get.call(null,map__8033__$1,new cljs.core.Keyword(null,"client","client",3951159101));var ruby_client = cljs.core.get.call(null,map__8033__$1,new cljs.core.Keyword(null,"ruby-client","ruby-client",4412625552));var path = cljs.core.get.call(null,map__8033__$1,new cljs.core.Keyword(null,"path","path",1017337751));var project_path = cljs.core.get.call(null,map__8033__$1,new cljs.core.Keyword(null,"project-path","project-path",1907176907));var ruby = cljs.core.get.call(null,map__8033__$1,new cljs.core.Keyword(null,"ruby","ruby",1017416012));if((cljs.core.not.call(null,ruby)) || (cljs.core.empty_QMARK_.call(null,ruby)))
{lt.objs.clients.rem_BANG_.call(null,client);
lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't find Ruby.",new cljs.core.Keyword(null,"body","body",1016933652),"In order to evaluate in Ruby files, a Ruby interpreter has to be installed and on your system PATH.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Download Ruby",new cljs.core.Keyword(null,"action","action",3885920680),((function (map__8033,map__8033__$1,client,ruby_client,path,project_path,ruby){
return (function (){return lt.objs.platform.open.call(null,"https://www.ruby-lang.org/en/downloads/");
});})(map__8033,map__8033__$1,client,ruby_client,path,project_path,ruby))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
} else
{if(cljs.core.not.call(null,project_path))
{lt.objs.clients.rem_BANG_.call(null,client);
lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't find this file.",new cljs.core.Keyword(null,"body","body",1016933652),"In order to evaluate in Ruby files, the file has to be on disk somewhere.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Save this file",new cljs.core.Keyword(null,"action","action",3885920680),((function (map__8033,map__8033__$1,client,ruby_client,path,project_path,ruby){
return (function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"save","save",1017427183));
return lt.objs.langs.ruby.try_connect.call(null,obj);
});})(map__8033,map__8033__$1,client,ruby_client,path,project_path,ruby))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel",new cljs.core.Keyword(null,"action","action",3885920680),((function (map__8033,map__8033__$1,client,ruby_client,path,project_path,ruby){
return (function (){return null;
});})(map__8033,map__8033__$1,client,ruby_client,path,project_path,ruby))
], null)], null)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.objs.langs.ruby.run_rb.call(null,obj);
} else
{}
}
}
return obj;
});
lt.objs.langs.ruby.check_all = (function check_all(obj){return lt.objs.langs.ruby.notify.call(null,lt.objs.langs.ruby.find_project.call(null,lt.objs.langs.ruby.check_client.call(null,lt.objs.langs.ruby.check_ruby.call(null,obj))));
});
lt.objs.langs.ruby.try_connect = (function try_connect(p__8034){var map__8036 = p__8034;var map__8036__$1 = ((cljs.core.seq_QMARK_.call(null,map__8036))?cljs.core.apply.call(null,cljs.core.hash_map,map__8036):map__8036);var info = cljs.core.get.call(null,map__8036__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"ruby.client","ruby.client",1005161937));lt.objs.langs.ruby.check_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return client;
});
lt.objs.langs.ruby.ruby_watch = (function ruby_watch(meta,src){var meta_str = [cljs.core.str("%q("),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,meta))),cljs.core.str(")")].join('');return [cljs.core.str("LtWatch.watch("),cljs.core.str(src),cljs.core.str(", JSON.parse("),cljs.core.str(meta_str),cljs.core.str("))")].join('');
});
lt.objs.langs.ruby.__BEH__watch_src = (function __BEH__watch_src(editor,cur,meta,src){return lt.objs.langs.ruby.ruby_watch.call(null,meta,src);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","watch-src","lt.objs.langs.ruby/watch-src",3610026486),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__watch_src,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch.src+","watch.src+",868749304),null], null), null));
lt.objs.langs.ruby.__BEH__on_eval = (function __BEH__on_eval(editor){return lt.object.raise.call(null,lt.objs.langs.ruby.ruby,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"code","code",1016963423),lt.plugins.watches.watched_range.call(null,editor,null,null,lt.objs.langs.ruby.ruby_watch),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),0,new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.editor.last_line.call(null,editor)], null))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","on-eval","lt.objs.langs.ruby/on-eval",4700701138),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.objs.langs.ruby.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var code = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?lt.plugins.watches.watched_range.call(null,editor,null,null,lt.objs.langs.ruby.ruby_watch):lt.objs.editor.line.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)));var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null)):cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null)));return lt.object.raise.call(null,lt.objs.langs.ruby.ruby,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$1], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","on-eval.one","lt.objs.langs.ruby/on-eval.one",4665959482),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.objs.langs.ruby.__BEH__eval_on_change = (function __BEH__eval_on_change(editor,_cm,delta){var doc = lt.objs.editor.get_doc.call(null,editor);var new_lc = lt.objs.editor.last_line.call(null,editor);var last_line = lt.objs.editor.line.call(null,editor,new_lc);var old_lc = (function (){var or__6364__auto__ = new cljs.core.Keyword("lt.objs.langs.ruby","line-count","lt.objs.langs.ruby/line-count",4342272134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.ruby","line-count","lt.objs.langs.ruby/line-count",4342272134),0], null));
return new cljs.core.Keyword("lt.objs.langs.ruby","line-count","lt.objs.langs.ruby/line-count",4342272134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));
}
})();if(cljs.core.truth_((function (){var and__6352__auto__ = /^\s*$/.test(last_line);if(cljs.core.truth_(and__6352__auto__))
{return cljs.core._EQ_.call(null,1,(new_lc - old_lc));
} else
{return and__6352__auto__;
}
})()))
{var code_8090 = lt.objs.editor.line.call(null,editor,(new_lc - 1));var line_8091 = (new_lc - 1);var info_8092 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"code","code",1016963423),code_8090),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),line_8091,new cljs.core.Keyword(null,"end","end",1014004813),line_8091], null));if((!(cljs.core.empty_QMARK_.call(null,code_8090))) && (cljs.core.not.call(null,/^\s*$/.test(code_8090))))
{lt.object.raise.call(null,lt.objs.langs.ruby.ruby,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info_8092], null));
} else
{}
} else
{}
return lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.ruby","line-count","lt.objs.langs.ruby/line-count",4342272134),new_lc], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","eval-on-change","lt.objs.langs.ruby/eval-on-change",4665325935),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__eval_on_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),300);
lt.objs.langs.ruby.__BEH__ruby_watch = (function __BEH__ruby_watch(editor,res){var temp__4092__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)));if(cljs.core.truth_(temp__4092__auto__))
{var watch = temp__4092__auto__;var str_result = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res);return lt.object.raise.call(null,new cljs.core.Keyword(null,"inline-result","inline-result",656479555).cljs$core$IFn$_invoke$arity$1(watch),new cljs.core.Keyword(null,"update!","update!",779473898),str_result);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-watch","lt.objs.langs.ruby/ruby-watch",4569791904),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__ruby_watch,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.ruby.watch","editor.eval.ruby.watch",2992089406),null], null), null));
lt.objs.langs.ruby.__BEH__ruby_result = (function __BEH__ruby_result(editor,res){lt.objs.notifos.done_working.call(null);
var result = (function (){try{return JSON.parse.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res));
}catch (e8038){if((e8038 instanceof Error))
{var e = e8038;return new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8038;
} else
{return null;
}
}
}})();return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),result,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-result","lt.objs.langs.ruby/ruby-result",3515346284),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__ruby_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.ruby.result","editor.eval.ruby.result",2068638258),null], null), null));
lt.objs.langs.ruby.__BEH__ruby_success = (function __BEH__ruby_success(editor,res){lt.objs.notifos.done_working.call(null);
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-success","lt.objs.langs.ruby/ruby-success",3506299276),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__ruby_success,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.ruby.success","editor.eval.ruby.success",681171250),null], null), null));
lt.objs.langs.ruby.__BEH__ruby_incomplete = (function __BEH__ruby_incomplete(editor,res){lt.objs.notifos.done_working.call(null);
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2026",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-incomplete","lt.objs.langs.ruby/ruby-incomplete",1731087787),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__ruby_incomplete,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.ruby.incomplete","editor.eval.ruby.incomplete",1073570291),null], null), null));
lt.objs.langs.ruby.__BEH__ruby_exception = (function __BEH__ruby_exception(editor,ex){lt.objs.notifos.done_working.call(null);
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-exception","lt.objs.langs.ruby/ruby-exception",2213599904),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__ruby_exception,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.ruby.exception","editor.eval.ruby.exception",3915509310),null], null), null));
lt.objs.langs.ruby.image = (function image(src){var e__7945__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("data:image/png;base64,"),cljs.core.str(src)].join('')], null)], null));var seq__8045_8093 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8046_8094 = null;var count__8047_8095 = 0;var i__8048_8096 = 0;while(true){
if((i__8048_8096 < count__8047_8095))
{var vec__8049_8097 = cljs.core._nth.call(null,chunk__8046_8094,i__8048_8096);var ev__7946__auto___8098 = cljs.core.nth.call(null,vec__8049_8097,0,null);var func__7947__auto___8099 = cljs.core.nth.call(null,vec__8049_8097,1,null);lt.util.dom.on.call(null,e__7945__auto__,ev__7946__auto___8098,func__7947__auto___8099);
{
var G__8100 = seq__8045_8093;
var G__8101 = chunk__8046_8094;
var G__8102 = count__8047_8095;
var G__8103 = (i__8048_8096 + 1);
seq__8045_8093 = G__8100;
chunk__8046_8094 = G__8101;
count__8047_8095 = G__8102;
i__8048_8096 = G__8103;
continue;
}
} else
{var temp__4092__auto___8104 = cljs.core.seq.call(null,seq__8045_8093);if(temp__4092__auto___8104)
{var seq__8045_8105__$1 = temp__4092__auto___8104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8045_8105__$1))
{var c__7112__auto___8106 = cljs.core.chunk_first.call(null,seq__8045_8105__$1);{
var G__8107 = cljs.core.chunk_rest.call(null,seq__8045_8105__$1);
var G__8108 = c__7112__auto___8106;
var G__8109 = cljs.core.count.call(null,c__7112__auto___8106);
var G__8110 = 0;
seq__8045_8093 = G__8107;
chunk__8046_8094 = G__8108;
count__8047_8095 = G__8109;
i__8048_8096 = G__8110;
continue;
}
} else
{var vec__8050_8111 = cljs.core.first.call(null,seq__8045_8105__$1);var ev__7946__auto___8112 = cljs.core.nth.call(null,vec__8050_8111,0,null);var func__7947__auto___8113 = cljs.core.nth.call(null,vec__8050_8111,1,null);lt.util.dom.on.call(null,e__7945__auto__,ev__7946__auto___8112,func__7947__auto___8113);
{
var G__8114 = cljs.core.next.call(null,seq__8045_8105__$1);
var G__8115 = null;
var G__8116 = 0;
var G__8117 = 0;
seq__8045_8093 = G__8114;
chunk__8046_8094 = G__8115;
count__8047_8095 = G__8116;
i__8048_8096 = G__8117;
continue;
}
}
} else
{}
}
break;
}
return e__7945__auto__;
});
lt.objs.langs.ruby.canvas = (function canvas(){var e__7945__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",3941165258)], null));var seq__8057_8118 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8058_8119 = null;var count__8059_8120 = 0;var i__8060_8121 = 0;while(true){
if((i__8060_8121 < count__8059_8120))
{var vec__8061_8122 = cljs.core._nth.call(null,chunk__8058_8119,i__8060_8121);var ev__7946__auto___8123 = cljs.core.nth.call(null,vec__8061_8122,0,null);var func__7947__auto___8124 = cljs.core.nth.call(null,vec__8061_8122,1,null);lt.util.dom.on.call(null,e__7945__auto__,ev__7946__auto___8123,func__7947__auto___8124);
{
var G__8125 = seq__8057_8118;
var G__8126 = chunk__8058_8119;
var G__8127 = count__8059_8120;
var G__8128 = (i__8060_8121 + 1);
seq__8057_8118 = G__8125;
chunk__8058_8119 = G__8126;
count__8059_8120 = G__8127;
i__8060_8121 = G__8128;
continue;
}
} else
{var temp__4092__auto___8129 = cljs.core.seq.call(null,seq__8057_8118);if(temp__4092__auto___8129)
{var seq__8057_8130__$1 = temp__4092__auto___8129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8057_8130__$1))
{var c__7112__auto___8131 = cljs.core.chunk_first.call(null,seq__8057_8130__$1);{
var G__8132 = cljs.core.chunk_rest.call(null,seq__8057_8130__$1);
var G__8133 = c__7112__auto___8131;
var G__8134 = cljs.core.count.call(null,c__7112__auto___8131);
var G__8135 = 0;
seq__8057_8118 = G__8132;
chunk__8058_8119 = G__8133;
count__8059_8120 = G__8134;
i__8060_8121 = G__8135;
continue;
}
} else
{var vec__8062_8136 = cljs.core.first.call(null,seq__8057_8130__$1);var ev__7946__auto___8137 = cljs.core.nth.call(null,vec__8062_8136,0,null);var func__7947__auto___8138 = cljs.core.nth.call(null,vec__8062_8136,1,null);lt.util.dom.on.call(null,e__7945__auto__,ev__7946__auto___8137,func__7947__auto___8138);
{
var G__8139 = cljs.core.next.call(null,seq__8057_8130__$1);
var G__8140 = null;
var G__8141 = 0;
var G__8142 = 0;
seq__8057_8118 = G__8139;
chunk__8058_8119 = G__8140;
count__8059_8120 = G__8141;
i__8060_8121 = G__8142;
continue;
}
}
} else
{}
}
break;
}
return e__7945__auto__;
});
lt.objs.langs.ruby.__BEH__ruby_image = (function __BEH__ruby_image(editor,img){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.objs.langs.ruby.image.call(null,new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(img)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(img)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(img))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-image","lt.objs.langs.ruby/ruby-image",4590768692),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__ruby_image,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.ruby.image","editor.eval.ruby.image",2979499466),null], null), null));
lt.objs.langs.ruby.__BEH__ruby_printer = (function __BEH__ruby_printer(editor,p){return lt.objs.console.loc_log.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",1017047278),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"line","line",1017226086),"stdout",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(p)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-printer","lt.objs.langs.ruby/ruby-printer",864442805),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__ruby_printer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.ruby.print","editor.eval.ruby.print",2986120988),null], null), null));
lt.objs.langs.ruby.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__8064 = event;var map__8064__$1 = ((cljs.core.seq_QMARK_.call(null,map__8064))?cljs.core.apply.call(null,cljs.core.hash_map,map__8064):map__8064);var origin = cljs.core.get.call(null,map__8064__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__8064__$1,new cljs.core.Keyword(null,"info","info",1017141280));var client = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,origin)));lt.objs.notifos.working.call(null,"");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.ruby","editor.eval.ruby",3156763677),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.ruby.try_connect], null)),new cljs.core.Keyword(null,"editor.eval.ruby","editor.eval.ruby",3156763677),info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","eval!","lt.objs.langs.ruby/eval!",1872936343),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.objs.langs.ruby.__BEH__connect = (function __BEH__connect(this$,path){return lt.objs.langs.ruby.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","connect","lt.objs.langs.ruby/connect",2360156914),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-lang","lt.objs.langs.ruby/ruby-lang",3812976763),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ruby.lang","ruby.lang",3458842868),null], null), null));
lt.objs.langs.ruby.ruby = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-lang","lt.objs.langs.ruby/ruby-lang",3812976763));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Ruby",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your ruby project.",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.objs.langs.ruby.ruby,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
lt.objs.langs.ruby.__BEH__ruby_exe = (function __BEH__ruby_exe(this$,exe){return lt.object.merge_BANG_.call(null,lt.objs.langs.ruby.ruby,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.ruby","ruby-exe","lt.objs.langs.ruby/ruby-exe",1735754269),exe], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-exe","lt.objs.langs.ruby/ruby-exe",1735754269),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__ruby_exe,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ruby: Set the path to the ruby executable for clients",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"path",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"path","path",1017337751)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.objs.langs.ruby.__BEH__use_rvm = (function __BEH__use_rvm(this$){return lt.object.merge_BANG_.call(null,lt.objs.langs.ruby.ruby,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.ruby","use-rvm?","lt.objs.langs.ruby/use-rvm?",3656895808),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","use-rvm","lt.objs.langs.ruby/use-rvm",3201581913),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__use_rvm,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ruby: Use RVM when loading REPL",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.objs.langs.ruby.__BEH__rvm_path = (function __BEH__rvm_path(this$,path){return lt.object.merge_BANG_.call(null,lt.objs.langs.ruby.ruby,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.ruby","rvm-path","lt.objs.langs.ruby/rvm-path",1422692051),path], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","rvm-path","lt.objs.langs.ruby/rvm-path",1422692051),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__rvm_path,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ruby: Path to RVM init script",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"path",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"path","path",1017337751)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.objs.langs.ruby.__BEH__use_rbenv = (function __BEH__use_rbenv(this$){return lt.object.merge_BANG_.call(null,lt.objs.langs.ruby.ruby,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.ruby","use-rbenv?","lt.objs.langs.ruby/use-rbenv?",615998644),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","use-rbenv","lt.objs.langs.ruby/use-rbenv",4653496197),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__use_rbenv,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ruby: Use rbenv when loading REPL",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.objs.langs.ruby.live_toggler = (function live_toggler(this$){var e__7945__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__8065_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__8065_SHARP_))?null:"off"))].join('');
}))], null),"live"], null)], null));var seq__8072_8143 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7945__auto__){
return (function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
});})(e__7945__auto__))
], null)));var chunk__8073_8144 = null;var count__8074_8145 = 0;var i__8075_8146 = 0;while(true){
if((i__8075_8146 < count__8074_8145))
{var vec__8076_8147 = cljs.core._nth.call(null,chunk__8073_8144,i__8075_8146);var ev__7946__auto___8148 = cljs.core.nth.call(null,vec__8076_8147,0,null);var func__7947__auto___8149 = cljs.core.nth.call(null,vec__8076_8147,1,null);lt.util.dom.on.call(null,e__7945__auto__,ev__7946__auto___8148,func__7947__auto___8149);
{
var G__8150 = seq__8072_8143;
var G__8151 = chunk__8073_8144;
var G__8152 = count__8074_8145;
var G__8153 = (i__8075_8146 + 1);
seq__8072_8143 = G__8150;
chunk__8073_8144 = G__8151;
count__8074_8145 = G__8152;
i__8075_8146 = G__8153;
continue;
}
} else
{var temp__4092__auto___8154 = cljs.core.seq.call(null,seq__8072_8143);if(temp__4092__auto___8154)
{var seq__8072_8155__$1 = temp__4092__auto___8154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8072_8155__$1))
{var c__7112__auto___8156 = cljs.core.chunk_first.call(null,seq__8072_8155__$1);{
var G__8157 = cljs.core.chunk_rest.call(null,seq__8072_8155__$1);
var G__8158 = c__7112__auto___8156;
var G__8159 = cljs.core.count.call(null,c__7112__auto___8156);
var G__8160 = 0;
seq__8072_8143 = G__8157;
chunk__8073_8144 = G__8158;
count__8074_8145 = G__8159;
i__8075_8146 = G__8160;
continue;
}
} else
{var vec__8077_8161 = cljs.core.first.call(null,seq__8072_8155__$1);var ev__7946__auto___8162 = cljs.core.nth.call(null,vec__8077_8161,0,null);var func__7947__auto___8163 = cljs.core.nth.call(null,vec__8077_8161,1,null);lt.util.dom.on.call(null,e__7945__auto__,ev__7946__auto___8162,func__7947__auto___8163);
{
var G__8164 = cljs.core.next.call(null,seq__8072_8155__$1);
var G__8165 = null;
var G__8166 = 0;
var G__8167 = 0;
seq__8072_8143 = G__8164;
chunk__8073_8144 = G__8165;
count__8074_8145 = G__8166;
i__8075_8146 = G__8167;
continue;
}
}
} else
{}
}
break;
}
return e__7945__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","live-toggler","lt.objs.langs.ruby/live-toggler",1570963903),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.ruby","live-toggler","lt.objs.langs.ruby/live-toggler",1570963903),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Live Mode Toggler",new cljs.core.Keyword(null,"live","live",1017226334),true,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,editor){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",4001043679),editor], null));
var editor_content = lt.object.__GT_content.call(null,editor);var frame = lt.util.dom.parent.call(null,editor_content);var toggler = lt.objs.langs.ruby.live_toggler.call(null,this$);lt.util.dom.append.call(null,toggler,editor_content);
return lt.util.dom.append.call(null,frame,toggler);
}));
lt.objs.langs.ruby.live_off = (function live_off(editor){lt.object.remove_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.ruby.live","editor.ruby.live",651374769)], null));
var temp__4092__auto__ = new cljs.core.Keyword("lt.objs.langs.ruby","live-toggler","lt.objs.langs.ruby/live-toggler",1570963903).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(temp__4092__auto__))
{var toggler = temp__4092__auto__;return lt.object.merge_BANG_.call(null,toggler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),false], null));
} else
{return null;
}
});
lt.objs.langs.ruby.live_on = (function live_on(editor){lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.ruby","editor.eval.ruby",3156763677),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.ruby.try_connect], null));
if(cljs.core.truth_(new cljs.core.Keyword("lt.objs.langs.ruby","live-toggler","lt.objs.langs.ruby/live-toggler",1570963903).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))
{} else
{lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.ruby","live-toggler","lt.objs.langs.ruby/live-toggler",1570963903),lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","live-toggler","lt.objs.langs.ruby/live-toggler",1570963903),editor)], null));
}
lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.ruby.live","editor.ruby.live",651374769)], null));
return lt.object.merge_BANG_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","live-toggler","lt.objs.langs.ruby/live-toggler",1570963903).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),true], null));
});
lt.objs.langs.ruby.__BEH__live_toggle = (function __BEH__live_toggle(editor){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.ruby.live","editor.ruby.live",651374769))))
{lt.objs.langs.ruby.live_off.call(null,editor);
} else
{lt.objs.langs.ruby.live_on.call(null,editor);
}
return lt.objs.editor.focus.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","live-toggle","lt.objs.langs.ruby/live-toggle",1454132583),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__live_toggle,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"instarepl.ruby.toggle-live","instarepl.ruby.toggle-live",3967667655),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ruby Instarepl: Toggle live mode",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
} else
{return null;
}
})], null));
lt.objs.langs.ruby.__BEH__client_enable_logging = (function __BEH__client_enable_logging(this$){return lt.object.merge_BANG_.call(null,lt.objs.langs.ruby.ruby,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.ruby","enable-client-logging?","lt.objs.langs.ruby/enable-client-logging?",1197315652),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","client-enable-logging","lt.objs.langs.ruby/client-enable-logging",3821188453),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__client_enable_logging,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ruby: log ruby client output to lt_client.log",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
}

//# sourceMappingURL=ruby instarepl_compiled.js.map