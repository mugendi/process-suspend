# Suspend and Resume processes at will

This module rides on the amazing [ntsuspend](https://github.com/FedericoCarboni/node-ntsuspend) to provide a cross platform way to suspend and resume child processes in NodeJs.

This is occasioned by the fact that Windows does not support ```SIGSTOP``` and ```SIGCONT``` signals.

Install via ```yarn add process-suspend``` and have fun.


```javascript

    const { spawn } = require('child_process');
    const sProc = require("process-suspend");

    // start your our funky process...
    const ourFunkyProcess = spawn("run.cmd");

    // then bind to the ourFunkyProcess
    sProc.bind(ourFunkyProcess);

    // somewhere else in the code, suspend our funky process
    ourFunkyProcess.suspend();

    // do whatever else matters to you...

    // and then resume our funky process
    ourFunkyProcess.resume();


```


# Don't Like Binding
There's a school of thought that says you should never tamper with default objects. Coolio. 

Simply then suspend and resume as follows.

```javascript

    const { spawn } = require('child_process');
    const {suspend, resume} = require("process-suspend");

    // start your our funky process...
    const ourFunkyProcess = spawn("run.cmd");

    // somewhere else in the code, suspend our funky process
    suspend(ourFunkyProcess);

    // do whatever else matters to you...

    // and then resume our funky process
    resume(ourFunkyProcess);

```

