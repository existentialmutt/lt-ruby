#!/usr/bin/env bash

# Usage
# lt_client_runner.sh <project root directory> <path_to_lt_client.rb> <lt_port> <lt_client_id>


if [ -n "$LT_USE_RVM" ]
  then source $HOME/.rvm/scripts/rvm
fi

if [ -n "$LT_USE_RBENV" ]
  then eval "$(rbenv init -)"
fi



cd $1

echo $2 $3 $4 | xargs ruby
