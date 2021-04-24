const ntsuspend = require('ntsuspend');

function suspend(process) {
    if (isWindows()) {
        ntsuspend.suspend(process.pid);
    } else {
        process.kill('SIGSTOP');
    }
}

function resume(process) {
    if (isWindows()) {
        ntsuspend.resume(process.pid);
    } else {
        process.kill('SIGCONT');
    }
}

function bind(process) {
    process.suspend = () => suspend(process)
    process.resume = () => resume(process)
}


function isWindows() {
    return process && (process.platform === 'win32' || /^(msys|cygwin)$/.test(process.env.OSTYPE));
};

module.exports = { bind, suspend, resume }