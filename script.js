let message = document.getElementById("message");
let messageOnline = () => {
    message.textContent="You are Online";
    message.style.cssText="background-color:green; color:dark-green";
};
let messageOffline = () => {
    message.textContent="You are Offline";
    message.style.cssText="background-color:orange; color:dark-orange";
};
if(window.navigator.onLine){
    messageOnline();
}
else{
    messageOffline();
}
