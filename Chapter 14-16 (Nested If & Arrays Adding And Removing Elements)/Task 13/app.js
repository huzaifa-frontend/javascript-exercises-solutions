let devices = [];

function addDevice(device) {
    devices.push(device); 
}

function removeDevice() {
    return devices.shift(); 
}

addDevice("Keyboard");
addDevice("Mouse");
addDevice("Printer");
addDevice("Monitor");

document.getElementById('device-array').innerHTML = "Current Devices: " + devices.join(', ');

let removedDevice1 = removeDevice();
document.getElementById('updated-device-array').innerHTML = "<br>1st array removed.<br> Updated Devices: " + devices.join(', ');
let removedDevice2 = removeDevice();
document.getElementById('updated-device-array').innerHTML += "<br>2nd array removed.<br> Updated Devices: " + devices.join(', ');
let removedDevice3 = removeDevice();
document.getElementById('updated-device-array').innerHTML += "<br>3rd array removed.<br> Updated Devices: " + devices.join(', ');
let removedDevice4 = removeDevice();
document.getElementById('updated-device-array').innerHTML += "<br>4th array removed.<br> Updated Devices: Null" + devices.join(', ');

document.getElementById('removed-devices').innerHTML = "<br>Removed Devices: " + removedDevice1 + ", " + removedDevice2 + ", " + removedDevice3 + ", " + removedDevice4;
