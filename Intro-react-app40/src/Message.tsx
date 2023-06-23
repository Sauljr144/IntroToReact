// Pascal Casing
let count = 0;
function Message(){
    console.log('Message called ', count)
    // JSX: Javascript XML
    count++;
    return <h1>Message {count}</h1>
}

export default Message;