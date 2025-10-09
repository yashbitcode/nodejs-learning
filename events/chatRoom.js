const EventEmitter = require("node:events");
const readline = require("node:readline");

class Chat2 extends EventEmitter {
    constructor() {
        super();
        this.messages = [];
        this.users = new Set();

        this.on("join-user", (user) => {
            this.users.add(user);
            console.log("\nUser:", user, "joined\n");
        });

        this.on("user-error", (user) =>
            console.error("\nUser:", user, "doesn't exist\n")
        );

        this.on("leave-room", (user) => {
            this.users.delete(user);
            console.log("\nUser:", user, "left the room\n");
        });

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

                console.log(`${user} (${time}): ${msg}`);
            });
            console.log();
        });
    }

    validateUser(user) {
        if (this.users.has(user)) return true;
        return false;
    }
}

function askUser() {
    console.log("1. Join new user");
    console.log("2. Send Message");
    console.log("3. Leave Room");
    console.log("4. Exit");

    rl.question("\nEnter Choice: ", (choice) => {
        switch (choice) {
            case "1": {
               rl.question("Enter User: ", (user) => {
                    myChat.emit("join-user", user);
                    return askUser();
               });
               
               break;
            }

            case "3": {
                rl.question("Enter User: ", (user) => {
                    if (!myChat.validateUser(user))
                        myChat.emit("user-error", user);
                    else myChat.emit("leave-room", user);

                    return askUser();
                });

                break;
            }

            case "2": {
                rl.question("Enter User: ", (user) => {
                    if (!myChat.validateUser(user)) {
                        myChat.emit("user-error", user);
                        return askUser();
                    } else {
                        rl.question("Enter message: ", (msg) => {
                            myChat.emit("send-message", user, msg);
                            myChat.emit("show-msgs");

                            return askUser();
                        });
                    }
                });

                break;
            }

            case "4": {
                console.log("Loop Exiting...");
                rl.close();

                return;
            }

            default: {
                console.log("\nInvalid Choice\n");
                askUser();
            }
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const myChat = new Chat2();
askUser();
