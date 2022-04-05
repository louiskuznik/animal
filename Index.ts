import Chat from './class/Chat';

let currentDate = new Date();
let newDate = currentDate.setDate( currentDate.getDate() - 6 );
const Boby: Chat = new Chat('Boby', 3, currentDate)

console.log(Boby.display());
