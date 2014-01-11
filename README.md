##Ruby for Light Table

This plugin is a very alpha demonstration of what a ruby instarepl will soon look like in Light Table.  It can evaluate the contents of a ruby file and print the result of the last statement up at the top line.  No extra editing of the file is needed, and the result comes back in the nice Light Table widgets.  Like a true repl eval happens in its own binding so your state will persist across evals.

## Installation

1.  From LightTable's plugin manager, double-click the "Ruby Instarepl" plugin
2.  If your preferred ruby is not your system default, go to User Behaviors and add an entry for `(:lt.objs.langs.ruby/ruby-exe /path/to/ruby)`
3.  Open the Command Bar and choose `App: Reload Behaviors`
4.  open up a ruby file, add a connection, and then eval with `ctrl/cmd-shift-enter`

## Requirements

You'll need the `eventmachine` and `json` gems installed.  RVM users should set the path to their preferred ruby executable in `:lt.objs.langs.ruby/ruby-exe`

Developed on Mac OS X 10.7 with ruby 2.0

## Planned Features
- eval individual statements with inline results
- rails and rvm support

## Acknowledgements

The cljs is pretty much a simple search and replace of the equivalent file from the Python plugin.  Thank you Chris and everyone else at Kodowa for getting me so inspired about a text editor.

###License

Copyright (C) 2013 Rafe Rosen

Distributed under the GPLv3, see license.md for the full text.
