##Ruby for Light Table

This plugin is very alpha with only one working feature.  It will eval editor contents of a ruby file and print the result of the last statement up at the top line.  Like a true repl eval happens in its own binding so your state will persist across evals.

## Planned Features
- eval individual statements with inline results
- rails and rvm support

## Requirements

You'll need the `eventmachine` and `json` gems installed.  RVM users should set the path to their preferred ruby executable in `:lt.objs.langs.ruby/ruby-exe`

Tested on Mac OS X 10.7 with ruby 2.0

## Acknowledgements

The cljs is pretty much a simple substitution of the Python plugin.  Thank you Chris and everyone else at Kodowa for inspiring me with a text editor.

###License

Copyright (C) 2013 Rafe Rosen

Distributed under the GPLv3, see license.md for the full text.