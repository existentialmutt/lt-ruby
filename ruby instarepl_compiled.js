if(!lt.util.load.provided_QMARK_('lt.objs.langs.ruby')) {
goog.provide('lt.objs.langs.ruby');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.cljs');
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
goog.require('lt.util.cljs');
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
lt.objs.langs.ruby.shell = lt.util.load.node_module.call(null,"shelljs");
lt.objs.langs.ruby.rb_path = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"rb-src/lt_client.rb");
lt.objs.langs.ruby.runner_path = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"rb-src/lt_client_runner.sh");
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
lt.objs.langs.ruby.run_rb = (function run_rb(p__8201){var map__8203 = p__8201;var map__8203__$1 = ((cljs.core.seq_QMARK_.call(null,map__8203))?cljs.core.apply.call(null,cljs.core.hash_map,map__8203):map__8203);var info = map__8203__$1;var client = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword(null,"client","client",3951159101));var name = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword(null,"name","name",1017277949));var project_path = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword(null,"project-path","project-path",1907176907));var path = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword(null,"path","path",1017337751));var n = lt.objs.notifos.working.call(null,"Connecting..");var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","connecting-notifier","lt.objs.langs.ruby/connecting-notifier",1639010209),client);var use_runner = (function (){var or__6755__auto__ = new cljs.core.Keyword("lt.objs.langs.ruby","use-rvm?","lt.objs.langs.ruby/use-rvm?",3656895808).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby));if(cljs.core.truth_(or__6755__auto__))
{return or__6755__auto__;
} else
{return new cljs.core.Keyword("lt.objs.langs.ruby","use-rbenv?","lt.objs.langs.ruby/use-rbenv?",615998644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby));
}
})();var keys__GT_env = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lt.objs.langs.ruby","use-rbenv?","lt.objs.langs.ruby/use-rbenv?",615998644),new cljs.core.Keyword(null,"LT_USE_RBENV","LT_USE_RBENV",3640591680),new cljs.core.Keyword("lt.objs.langs.ruby","use-rvm?","lt.objs.langs.ruby/use-rvm?",3656895808),new cljs.core.Keyword(null,"LT_USE_RVM","LT_USE_RVM",4685907820),new cljs.core.Keyword("lt.objs.langs.ruby","enable-client-logging?","lt.objs.langs.ruby/enable-client-logging?",1197315652),new cljs.core.Keyword(null,"LT_ENABLE_CLIENT_LOGGING","LT_ENABLE_CLIENT_LOGGING",1714721026)], null);var env = cljs.core.zipmap.call(null,cljs.core.map.call(null,keys__GT_env,cljs.core.keys.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.objs.langs.ruby.ruby),cljs.core.keys.call(null,keys__GT_env)))),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null)));var env__$1 = (cljs.core.truth_(new cljs.core.Keyword("lt.objs.langs.ruby","rvm-path","lt.objs.langs.ruby/rvm-path",1422692051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby)))?cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"LT_RVM_PATH","LT_RVM_PATH",839899236),new cljs.core.Keyword("lt.objs.langs.ruby","rvm-path","lt.objs.langs.ruby/rvm-path",1422692051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby))):env);var command = (cljs.core.truth_(use_runner)?"bash":(function (){var or__6755__auto__ = new cljs.core.Keyword("lt.objs.langs.ruby","ruby-exe","lt.objs.langs.ruby/ruby-exe",1735754269).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby));if(cljs.core.truth_(or__6755__auto__))
{return or__6755__auto__;
} else
{return "ruby";
}
})());var args = (cljs.core.truth_(use_runner)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.ruby.runner_path,project_path,lt.objs.langs.ruby.bash_escape_spaces.call(null,lt.objs.langs.ruby.rb_path),lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.ruby.escape_spaces.call(null,lt.objs.langs.ruby.rb_path),lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)], null));return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"args","args",1016906831),args,new cljs.core.Keyword(null,"cwd","cwd",1014003170),project_path,new cljs.core.Keyword(null,"env","env",1014004831),env__$1,new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.objs.langs.ruby.check_ruby = (function check_ruby(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"ruby","ruby",1017416012),(function (){var or__6755__auto__ = new cljs.core.Keyword("lt.objs.langs.ruby","ruby-exe","lt.objs.langs.ruby/ruby-exe",1735754269).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.ruby.ruby));if(cljs.core.truth_(or__6755__auto__))
{return or__6755__auto__;
} else
{return lt.objs.langs.ruby.shell.which("ruby");
}
})());
});
lt.objs.langs.ruby.check_client = (function check_client(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"ruby-client","ruby-client",4412625552),lt.objs.files.exists_QMARK_.call(null,lt.objs.langs.ruby.rb_path));
});
lt.objs.langs.ruby.find_project = (function find_project(obj){var p = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(obj);var roots = lt.objs.files.get_roots.call(null);var cur = p;var prev = "";while(true){
if(cljs.core.truth_((function (){var or__6755__auto__ = cljs.core.empty_QMARK_.call(null,cur);if(or__6755__auto__)
{return or__6755__auto__;
} else
{var or__6755__auto____$1 = roots.call(null,cur);if(cljs.core.truth_(or__6755__auto____$1))
{return or__6755__auto____$1;
} else
{return cljs.core._EQ_.call(null,cur,prev);
}
}
})()))
{return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"project-path","project-path",1907176907),(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,p))?p:lt.objs.files.parent.call(null,p)));
} else
{if(cljs.core.truth_((function (){var and__6743__auto__ = lt.objs.files.dir_QMARK_.call(null,cur);if(cljs.core.truth_(and__6743__auto__))
{return lt.objs.files.exists_QMARK_.call(null,lt.objs.files.join.call(null,cur,"Gemfile"));
} else
{return and__6743__auto__;
}
})()))
{return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"project-path","project-path",1907176907),cur);
} else
{{
var G__8258 = lt.objs.files.parent.call(null,cur);
var G__8259 = cur;
cur = G__8258;
prev = G__8259;
continue;
}
}
}
break;
}
});
lt.objs.langs.ruby.notify = (function notify(obj){var map__8205 = obj;var map__8205__$1 = ((cljs.core.seq_QMARK_.call(null,map__8205))?cljs.core.apply.call(null,cljs.core.hash_map,map__8205):map__8205);var client = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"client","client",3951159101));var ruby_client = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"ruby-client","ruby-client",4412625552));var path = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"path","path",1017337751));var project_path = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"project-path","project-path",1907176907));var ruby = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"ruby","ruby",1017416012));if((cljs.core.not.call(null,ruby)) || (cljs.core.empty_QMARK_.call(null,ruby)))
{lt.objs.clients.rem_BANG_.call(null,client);
lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't find Ruby.",new cljs.core.Keyword(null,"body","body",1016933652),"In order to evaluate in Ruby files, a Ruby interpreter has to be installed and on your system PATH.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Download Ruby",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.objs.platform.open.call(null,"https://www.ruby-lang.org/en/downloads/");
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
} else
{if(cljs.core.not.call(null,project_path))
{lt.objs.clients.rem_BANG_.call(null,client);
lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't find this file.",new cljs.core.Keyword(null,"body","body",1016933652),"In order to evaluate in Ruby files, the file has to be on disk somewhere.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Save this file",new cljs.core.Keyword(null,"action","action",3885920680),(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"save","save",1017427183));
return lt.objs.langs.ruby.try_connect.call(null,obj);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return null;
})], null)], null)], null));
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
lt.objs.langs.ruby.try_connect = (function try_connect(p__8206){var map__8208 = p__8206;var map__8208__$1 = ((cljs.core.seq_QMARK_.call(null,map__8208))?cljs.core.apply.call(null,cljs.core.hash_map,map__8208):map__8208);var info = cljs.core.get.call(null,map__8208__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"ruby.client","ruby.client",1005161937));lt.objs.langs.ruby.check_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
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
lt.objs.langs.ruby.__BEH__eval_on_change = (function __BEH__eval_on_change(editor,_cm,delta){var doc = lt.objs.editor.get_doc.call(null,editor);var new_lc = lt.objs.editor.last_line.call(null,editor);var last_line = lt.objs.editor.line.call(null,editor,new_lc);var old_lc = (function (){var or__6755__auto__ = new cljs.core.Keyword("lt.objs.langs.ruby","line-count","lt.objs.langs.ruby/line-count",4342272134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(or__6755__auto__))
{return or__6755__auto__;
} else
{lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.ruby","line-count","lt.objs.langs.ruby/line-count",4342272134),0], null));
return new cljs.core.Keyword("lt.objs.langs.ruby","line-count","lt.objs.langs.ruby/line-count",4342272134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));
}
})();if(cljs.core.truth_((function (){var and__6743__auto__ = /^\s*$/.test(last_line);if(cljs.core.truth_(and__6743__auto__))
{return cljs.core._EQ_.call(null,1,(new_lc - old_lc));
} else
{return and__6743__auto__;
}
})()))
{var code_8260 = lt.objs.editor.line.call(null,editor,(new_lc - 1));var line_8261 = (new_lc - 1);var info_8262 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"code","code",1016963423),code_8260),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),line_8261,new cljs.core.Keyword(null,"end","end",1014004813),line_8261], null));if((!(cljs.core.empty_QMARK_.call(null,code_8260))) && (cljs.core.not.call(null,/^\s*$/.test(code_8260))))
{lt.object.raise.call(null,lt.objs.langs.ruby.ruby,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info_8262], null));
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
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
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
lt.objs.langs.ruby.image = (function image(src){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("data:image/png;base64,"),cljs.core.str(src)].join('')], null)], null));var seq__8215_8263 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8216_8264 = null;var count__8217_8265 = 0;var i__8218_8266 = 0;while(true){
if((i__8218_8266 < count__8217_8265))
{var vec__8219_8267 = cljs.core._nth.call(null,chunk__8216_8264,i__8218_8266);var ev__8118__auto___8268 = cljs.core.nth.call(null,vec__8219_8267,0,null);var func__8119__auto___8269 = cljs.core.nth.call(null,vec__8219_8267,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8268,func__8119__auto___8269);
{
var G__8270 = seq__8215_8263;
var G__8271 = chunk__8216_8264;
var G__8272 = count__8217_8265;
var G__8273 = (i__8218_8266 + 1);
seq__8215_8263 = G__8270;
chunk__8216_8264 = G__8271;
count__8217_8265 = G__8272;
i__8218_8266 = G__8273;
continue;
}
} else
{var temp__4092__auto___8274 = cljs.core.seq.call(null,seq__8215_8263);if(temp__4092__auto___8274)
{var seq__8215_8275__$1 = temp__4092__auto___8274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8215_8275__$1))
{var c__7497__auto___8276 = cljs.core.chunk_first.call(null,seq__8215_8275__$1);{
var G__8277 = cljs.core.chunk_rest.call(null,seq__8215_8275__$1);
var G__8278 = c__7497__auto___8276;
var G__8279 = cljs.core.count.call(null,c__7497__auto___8276);
var G__8280 = 0;
seq__8215_8263 = G__8277;
chunk__8216_8264 = G__8278;
count__8217_8265 = G__8279;
i__8218_8266 = G__8280;
continue;
}
} else
{var vec__8220_8281 = cljs.core.first.call(null,seq__8215_8275__$1);var ev__8118__auto___8282 = cljs.core.nth.call(null,vec__8220_8281,0,null);var func__8119__auto___8283 = cljs.core.nth.call(null,vec__8220_8281,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8282,func__8119__auto___8283);
{
var G__8284 = cljs.core.next.call(null,seq__8215_8275__$1);
var G__8285 = null;
var G__8286 = 0;
var G__8287 = 0;
seq__8215_8263 = G__8284;
chunk__8216_8264 = G__8285;
count__8217_8265 = G__8286;
i__8218_8266 = G__8287;
continue;
}
}
} else
{}
}
break;
}
return e__8117__auto__;
});
lt.objs.langs.ruby.canvas = (function canvas(){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",3941165258)], null));var seq__8227_8288 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8228_8289 = null;var count__8229_8290 = 0;var i__8230_8291 = 0;while(true){
if((i__8230_8291 < count__8229_8290))
{var vec__8231_8292 = cljs.core._nth.call(null,chunk__8228_8289,i__8230_8291);var ev__8118__auto___8293 = cljs.core.nth.call(null,vec__8231_8292,0,null);var func__8119__auto___8294 = cljs.core.nth.call(null,vec__8231_8292,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8293,func__8119__auto___8294);
{
var G__8295 = seq__8227_8288;
var G__8296 = chunk__8228_8289;
var G__8297 = count__8229_8290;
var G__8298 = (i__8230_8291 + 1);
seq__8227_8288 = G__8295;
chunk__8228_8289 = G__8296;
count__8229_8290 = G__8297;
i__8230_8291 = G__8298;
continue;
}
} else
{var temp__4092__auto___8299 = cljs.core.seq.call(null,seq__8227_8288);if(temp__4092__auto___8299)
{var seq__8227_8300__$1 = temp__4092__auto___8299;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8227_8300__$1))
{var c__7497__auto___8301 = cljs.core.chunk_first.call(null,seq__8227_8300__$1);{
var G__8302 = cljs.core.chunk_rest.call(null,seq__8227_8300__$1);
var G__8303 = c__7497__auto___8301;
var G__8304 = cljs.core.count.call(null,c__7497__auto___8301);
var G__8305 = 0;
seq__8227_8288 = G__8302;
chunk__8228_8289 = G__8303;
count__8229_8290 = G__8304;
i__8230_8291 = G__8305;
continue;
}
} else
{var vec__8232_8306 = cljs.core.first.call(null,seq__8227_8300__$1);var ev__8118__auto___8307 = cljs.core.nth.call(null,vec__8232_8306,0,null);var func__8119__auto___8308 = cljs.core.nth.call(null,vec__8232_8306,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8307,func__8119__auto___8308);
{
var G__8309 = cljs.core.next.call(null,seq__8227_8300__$1);
var G__8310 = null;
var G__8311 = 0;
var G__8312 = 0;
seq__8227_8288 = G__8309;
chunk__8228_8289 = G__8310;
count__8229_8290 = G__8311;
i__8230_8291 = G__8312;
continue;
}
}
} else
{}
}
break;
}
return e__8117__auto__;
});
lt.objs.langs.ruby.__BEH__ruby_image = (function __BEH__ruby_image(editor,img){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.objs.langs.ruby.image.call(null,new cljs.core.Keyword(null,"image","image",1114217677).cljs$core$IFn$_invoke$arity$1(img)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(img)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(img))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-image","lt.objs.langs.ruby/ruby-image",4590768692),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__ruby_image,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.ruby.image","editor.eval.ruby.image",2979499466),null], null), null));
lt.objs.langs.ruby.__BEH__ruby_printer = (function __BEH__ruby_printer(editor,p){return lt.objs.console.loc_log.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",1017047278),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"line","line",1017226086),"stdout",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(p)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.ruby","ruby-printer","lt.objs.langs.ruby/ruby-printer",864442805),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.ruby.__BEH__ruby_printer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.ruby.print","editor.eval.ruby.print",2986120988),null], null), null));
lt.objs.langs.ruby.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__8234 = event;var map__8234__$1 = ((cljs.core.seq_QMARK_.call(null,map__8234))?cljs.core.apply.call(null,cljs.core.hash_map,map__8234):map__8234);var origin = cljs.core.get.call(null,map__8234__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__8234__$1,new cljs.core.Keyword(null,"info","info",1017141280));var client = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,origin)));lt.objs.notifos.working.call(null,"");
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
lt.objs.langs.ruby.live_toggler = (function live_toggler(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__8235_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__8235_SHARP_))?null:"off"))].join('');
}))], null),"live"], null)], null));var seq__8242_8313 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
})], null)));var chunk__8243_8314 = null;var count__8244_8315 = 0;var i__8245_8316 = 0;while(true){
if((i__8245_8316 < count__8244_8315))
{var vec__8246_8317 = cljs.core._nth.call(null,chunk__8243_8314,i__8245_8316);var ev__8118__auto___8318 = cljs.core.nth.call(null,vec__8246_8317,0,null);var func__8119__auto___8319 = cljs.core.nth.call(null,vec__8246_8317,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8318,func__8119__auto___8319);
{
var G__8320 = seq__8242_8313;
var G__8321 = chunk__8243_8314;
var G__8322 = count__8244_8315;
var G__8323 = (i__8245_8316 + 1);
seq__8242_8313 = G__8320;
chunk__8243_8314 = G__8321;
count__8244_8315 = G__8322;
i__8245_8316 = G__8323;
continue;
}
} else
{var temp__4092__auto___8324 = cljs.core.seq.call(null,seq__8242_8313);if(temp__4092__auto___8324)
{var seq__8242_8325__$1 = temp__4092__auto___8324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8242_8325__$1))
{var c__7497__auto___8326 = cljs.core.chunk_first.call(null,seq__8242_8325__$1);{
var G__8327 = cljs.core.chunk_rest.call(null,seq__8242_8325__$1);
var G__8328 = c__7497__auto___8326;
var G__8329 = cljs.core.count.call(null,c__7497__auto___8326);
var G__8330 = 0;
seq__8242_8313 = G__8327;
chunk__8243_8314 = G__8328;
count__8244_8315 = G__8329;
i__8245_8316 = G__8330;
continue;
}
} else
{var vec__8247_8331 = cljs.core.first.call(null,seq__8242_8325__$1);var ev__8118__auto___8332 = cljs.core.nth.call(null,vec__8247_8331,0,null);var func__8119__auto___8333 = cljs.core.nth.call(null,vec__8247_8331,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8332,func__8119__auto___8333);
{
var G__8334 = cljs.core.next.call(null,seq__8242_8325__$1);
var G__8335 = null;
var G__8336 = 0;
var G__8337 = 0;
seq__8242_8313 = G__8334;
chunk__8243_8314 = G__8335;
count__8244_8315 = G__8336;
i__8245_8316 = G__8337;
continue;
}
}
} else
{}
}
break;
}
return e__8117__auto__;
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