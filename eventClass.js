const EventEmitter = require("node:events");
const readline = require("node:readline");

class Chat2 extends EventEmitter {
    constructor() {
        super();
        this.messages = [];

        this.on("user-error", (user) =>
            console.error("User:", user, "Doesn't Exist")
        );

        this.on("send-message", (user, msg) => {
            this.messages.push({
                time: new Date().toLocaleString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                }),
                msg,
                user,
            });
        });

        this.on("show-msgs", () => {
            console.log();
            this.messages.forEach((userMsg) => {
                const { time, user, msg } = userMsg;

                console.log(`User ${user} (${time}): ${msg}`);
            });
        });
    }

    sendMessage(user, msg) {
        this.emit("send-message", user, msg);
        this.emit("show-msgs");
    }
}

function askUser() {
    rl.question("\n\nEnter the user(1/2), Q(exit): ", (user) => {
        if (user.toLowerCase() == "q") {
            console.log("Loop Exiting...");
            rl.close();

            return;
        }
        if (user !== "1" && user !== "2") {
            myChat.emit("user-error", user);

            return askUser();
        }

        rl.question("Enter the message: ", (msg) => {
            myChat.sendMessage(user, msg);
            askUser();
        });
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const myChat = new Chat2();
askUser();

// const emitter = new EventEmitter();
// emitter.on("error", (err) => console.error(`Error: ${err?.message}`));
// emitter.emit("error", new Error("Dummy Error"));

// console.log("first")

// class MyEmitter extends EventEmitter {
//     constructor() {
//         super();
//         this.on("send-msg", (msg) => console.log("Message sent:", msg));
//     }

//     sendMessage(msg) {
//         this.emit("send-msg", msg);
//     }
// };

// const emitter = new MyEmitter();
// emitter.sendMessage("My message");
