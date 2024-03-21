let message = document.getElementById("message");
let messageOnline = () => {
    message.textContent="Internet Connection Available";
    message.style.cssText="background-color:green; color:dark-green";
};
let messageOffline = () => {
    message.textContent="Internet Connection Not Available";
    message.style.cssText="background-color:orange; color:dark-orange";
};
if(window.navigator.onLine){
    messageOnline();
}
else{
    messageOffline();
}
