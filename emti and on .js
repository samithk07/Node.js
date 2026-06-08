const EventEmmiter=require("node:events")
const BookingTicket=new EventEmmiter()

BookingTicket.on("Booking Ticket",(ticket)=>{
    console.log(`Passenger:${ticket.Passenger }`);
    console.log(`Train:${ticket.train}`);
    console.log(`Seat:${ticket.Seat}`);
    })
    BookingTicket.on("Booking Ticket",()=>{
        console.log("Conformation email sent")

    })
    BookingTicket.emit("Booking Ticket",{
        Passenger:"Rahul",
        train:"Vande Barath",
        Seat:"ac 18"
    })