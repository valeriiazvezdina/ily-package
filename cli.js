#!/usr/bin/env node

const yargs = require('yargs');
const args = yargs.argv;

if (args._.length) sayIly(args);

function sayIly(args) {
    const module = require('./index');
    console.log(module.ily(args._[0]));
}