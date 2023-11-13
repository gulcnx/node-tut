const os = require('os');

//info about current user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds
console.log(`This is the uptime as seconds = ${os.uptime()}`);

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOs);
 