#!/usr/bin/env bash
echo "******************** start compile deploy **********************"

cd packages/service

npm --registry=http://r.npm.sk.com install

rm -rf ./node_modules/*

npm --registry=http://r.npm.sk.com install --production

npm run build

npm --registry=http://r.npm.sk.com install @fdfe/nest-runtime-nodejs@latest

echo "******************** end compile deploy **********************"
