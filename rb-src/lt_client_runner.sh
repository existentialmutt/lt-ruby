#!/usr/bin/env bash

# Usage
# lt_client_runner.sh <project root directory> <path_to_lt_client.rb> <lt_port> <lt_client_id>

source $HOME/.rvm/scripts/rvm

cd $1

echo $2 $3 $4 | xargs ruby
