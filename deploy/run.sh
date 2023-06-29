#!/usr/bin/env bash
echo "******************** start post deploy **********************"
set -e
export PATH=$PATH:~/.nvm/versions/node/v16.11.0/bin
echo "$(date +"%T")"

cd /opt/mmtt/apps/nest
npx nest-start

echo "$(date +"%T")"
echo "******************** end post deploy **********************"
