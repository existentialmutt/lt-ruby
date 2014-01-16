## Ruby Instarepl for Light Table

This plugin is an alpha implementation of a ruby instarepl for the [Light Table](http://www.lighttable.com) IDE.  It can evaluate the contents of a ruby file and print the result of the last statement up at the top line.  It can also eval selections of ruby code and print the result next to it.

No extra editing of the file is needed, and the result comes back in the nice Light Table widgets.  Like a true repl eval happens in its own binding so your state will persist across evals.

## Installation and Usage

1.  From LightTable's plugin manager, choose the available tab and double-click the "Ruby Instarepl" plugin to install it.
2.  If your preferred ruby is not your system default, go to User Behaviors and add an entry for `(:lt.objs.langs.ruby/ruby-exe "/path/to/ruby")`
3.  Open the Command Bar and choose `App: Reload Behaviors` or restart LightTable
4.  Open up a ruby file, select some code and use `ctrl/cmd-enter` to eval it.  Use `ctrl/cmd-shift-enter` to eval the whole file (the result will be added off the first line).

### RVM and Rbenv support

Support exists for both RVM and rbenv.  To enable RVM add `:lt.objs.langs.ruby/use-rvm` to your User Behaviors.  Once that's in place the ruby repl will be run out of whatever RVM environment you've defined for that directory via rvmrc, etc.

Similarly, to enable rbenv add `:lt.objs.langs.ruby/use-rbenv`

### Rails support

As of 0.0.4, the plugin is able to load a Rails environment.  Just start up a Ruby connection in your project directory and then eval `require 'config/environment`

## Requirements

You'll need the `eventmachine` and `json` gems installed.  RVM users should set the path to their preferred ruby executable in `:lt.objs.langs.ruby/ruby-exe`

Developed on Mac OS X 10.7 with ruby 2.0.  I have no clue if it works on other platforms.

## The Road Forward
Basic RVM and Rails support support is working (see above).

It could also be nice to incorporate the advanced features from the stock LT plugins, such as results for individual statements within a block of eval'd code and watches.

## Acknowledgements

The clojurescript / lighttable side started by using the Python plugin as a template.  Thank you Chris and everyone else at Kodowa for getting me so inspired about a text editor.

Thanks also to my employer, [Green River](http://www.greenriver.com) for supporting development of this plugin.

## Changelog

##### 0.0.6

rbenv support
Changed RVM support behavior from `(:lt.objs.langs.ruby/use-rvm? true)` to `:lt.objs.langs.ruby/use-rvm` to better match style of other boolean behaviors.

##### 0.0.5

resyncing tag version w/ version in plugin.json

##### 0.0.4

Basic rails loading via eval.

##### 0.0.3

added support for loading an rvm environment.

##### 0.0.2

Numerous bugfixes and general less-janky-making.  You no longer to need to manually create the connection (just select some code and eval).

#####  0.0.1

Initial release with eval for whole files and selections

###License

Copyright (C) 2014 Rafe Rosen

Distributed under the GPLv3, see license.md for the full text.
