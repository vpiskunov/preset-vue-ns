"use strict";

function cliPluginMain(api, options, rootOptions) {
  api.onCreateComplete(() => {
    console.log('\r\n');
    console.log('      \x1b[0;41;1m ⬇︎ IMPORTANT ⬇︎ \x1b[0m')
    console.log(`\x1b[36;1;4mNext step\x1b[0;36m : \x1b[1m run ⚙️  ▹ \x1b[0;39;45;1m vue add nativescript-vue \x1b[0m ✳️`);
    console.log('\x1b[36m%s\x1b[0m', `Then install the plugin by running ⚙️  ▹ \x1b[0;39;45;1m vue add nativescript-vue-preset \x1b[0m\r\n\r\n`);
    console.log('\r\n');
  });
}
module.exports = cliPluginMain;
