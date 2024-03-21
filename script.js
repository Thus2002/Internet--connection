let message = document.getElementById("message");
let messageOnline = () => {
    message.textContent="You are Online";
    message.style.cssText="background-color:green; color:dark-green";
};
let messageOffline = () => {
    message.textContent="You are Offline";
    message.style.cssText="background-color:red; color:dark-red";
};
if(window.navigator.onLine){
    messageOnline();
}
else{
    messageOffline();
}
