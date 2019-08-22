let battery = new Battery();
battery.setEnergy(10);

let flashlamp = new FlashLamp();
flashlamp.setBattery(battery);

console.log('Battery info : '+ flashlamp.getBatteryInfo() + '\n');
flashlamp.light();

console.log('Turn on \n');
flashlamp.turnOn();
flashlamp.light();
console.log('Battery info : '+ flashlamp.getBatteryInfo()+'\n');

console.log ('Turn Off \n');
flashlamp.turnOff();
flashlamp.light();