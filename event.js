const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// emitter.on("greet-me", (fullName) => {
//     console.log("hi bro", fullName);
// });

// emitter.addListener("greet-me", (fullName) => {
//     console.log("hi world", fullName);
// });

// emitter.emit("greet-me", "YashBitCode");

const eventCnt = {
    login: 0,
    purchase: 0,
    logout: 0,
    "profile-update": 0
};

emitter.on("user-login", (fullname) => {
    console.log("user logged in: ", fullname);
    eventCnt.login++;
});

emitter.on("user-logout", () => {
    console.log("user logged out");
    eventCnt.logout++;
});

emitter.on("user-purchase", () => {
    console.log("purchased");
    eventCnt.purchase++;
});

emitter.on("user-profile-update", () => {
    console.log("profile updated");
    eventCnt["profile-update"]++;
});

emitter.on("get-summary", () => {
    const { login, purchase, logout } = eventCnt;

    console.log("login: ", login);
    console.log("logout: ", logout);
    console.log("purchase: ", purchase);
    console.log("profile update: ", eventCnt["profile-update"]);
});

emitter.emit("user-login", "YashBit");
emitter.emit("user-logout");
emitter.emit("user-purchase");
emitter.emit("user-profile-update");
emitter.emit("user-profile-update");
emitter.emit("get-summary");

emitter.removeAllListeners();
// emitter.emit("get-summary");
