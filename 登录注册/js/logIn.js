var APP_ID = 'rXIWpHk4BwkM8pCMUPDa9Klt-gzGzoHsz';
var APP_KEY = 'nLL2HCbhrSrAO7lcCDLue4v7';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log(AV)

let currentUser = AV.User.current()
if (currentUser) {
    welcome.textContent = "WELCOME，" + currentUser.attributes.username +'!'
}

logOut.onclick = () => {
    AV.User.logOut()
    window.location.href = "./index.html"
}