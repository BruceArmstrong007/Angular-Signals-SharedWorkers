connections = [];
state = []
 self.onconnect = connectEvent => {
   const port = connectEvent.ports[0];

   port.start();
   connections.push(port);
   console.log(state);
   port.postMessage(state);

   port.onmessage = messageEvent => {
    state = [...state, messageEvent.data];
     connections.forEach(connection => {
       connection.postMessage(state);
     });
   }

 };


