// const tatkalTicketBooking = new Promise((resolve, reject) => {
//   let ticketBooked = false;
//   if (ticketBooked) {
//     resolve();
//   } else {
//     reject();
//   }
// });

function tatkalTicketBooking() {
  return new Promise((resolve, reject) => {
    let ticketBooked = false;
    if (ticketBooked) {
      resolve(850);
    } else {
      reject("error");
    }
  });
}
tatkalTicketBooking()
  .then((data) => {
    console.log(`ticket booked succesfully ${data}`);
  })
  .catch((err) => console.error("sorry try to next time", err));
console.log("hello");

function headorTail() {
  return new Promise((resolve, reject) => {
    //0-head (success), 1-tail (failure)
    let HeadorTail = Math.floor(Math.random() * 2);
    if (HeadorTail === 0) {
      resolve();
    } else {
      reject();
    }
  });
}
headorTail()
  .then(() => console.log("your are win"))
  .catch(() => console.error("you are fail is Tail"));

//callback
// const callback = () => {
//   console.log("i work after three sec");
// };
// setTimeout(callback, 3000);

// function sayGoodbye(name, cb) {
//   const myName = name.toUpperCase();
//   console.log("hi my name is " + myName);
//   cb(myName);
//   //   setTimeout(forGoodBye, 3000,myName);
//   // setTimeout(() => console.log("goodbye " + name), 3000);
// }
// function forGoodBye(myName) {
//   setTimeout(() => console.log("Good Bye " + myName), 3000);
// }
// sayGoodbye("haja", forGoodBye);

function doctor() {
  console.log("u:Hello Trisha");
  setTimeout(
    () => console.log("Hi trisha i'm the doctor,how can i help you?"),
    1000
  );
  setTimeout(() => console.log("You will alright"), 3000);
}

setTimeout(doctor, 0);
