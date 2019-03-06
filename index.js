#!/usr/bin/env node
const program = require('commander');
const handler = require('./lib');

program
  .version('0.0.1')
  .option('-u, --username <required>', 'Your Smile Username')
  .parse(process.argv);

program.on('--help', () => {
  console.log('')
  console.log('Examples:');
  console.log('  $ smile --help');
  console.log('  $ smile -h');
});

handler(program);