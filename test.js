console.log(`Ibn Al-Noor Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/
Music promoted by https://www.chosic.com/ `);


let url = 'https://www.chosic.com/wp-content/uploads/2021/04/Ibn-Al-Noor.mp3';

const { spawn } = require('child_process');
const { bind } = require(".");

const child = spawn('ffplay', [url]);

child.on('exit', function(code) {
    console.log('Child process exited with exit code ' + code);
});


bind(child);

setTimeout(() => {
    console.log("Pausing Playback");
    child.suspend();

    setTimeout(() => {
        console.log("Resuming Playback");
        child.resume();
    }, 2000);
}, 5000);