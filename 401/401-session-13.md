# Readings Class 13: Message Queues

### What does it mean that web sockets are bidirectional? Why is this useful?

[amx](https://www.amx.com/en-US/site_elements/benefits-and-applications-of-websockets)
Whereas HTTP relies on a client request to receive a response from the server for every exchange,
WebSockets allow for full-duplex bidirectional communication. This enables the server to send real-time updates
asynchronously, without requiring the client to submit a request each time. In the context of networked AV and control systems, this allows devices to send and receive continuous streams of data to and from any point on the network.

### Does socket.io use HTTP? Why?

[socket.io](https://socket.io/docs/v4/index.html)
Socket.IO is NOT a WebSocket implementation. Although Socket.IO indeed uses WebSocket as a transport when possible, it adds additional metadata to each packet. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a plain WebSocket server either.

### What happens when a client emits an event?

[tutorialspoint](https://www.tutorialspoint.com/socket.io/socket.io_event_handling.htm)
Client emits the event and it is handled by the server. There’s a way to even emit the event to all connected clients. NOTE that client and server is the name of the setup in a way. Because each client can become a server and each server can become a client in the strictes sense of the definition (client = sending a request, server listening to a request and serving a response)

### What happens when a server emits an event?

Client needs a listener that listens for the event. As the server emits the event the clients .on function picks it up and executes the code inside of it.

### What happens if a client “misses” an event?

[stackoverflow](https://stackoverflow.com/questions/32816290/what-happens-with-unhandled-socket-io-events)
Unhandled messages are just ignored. It's just like when an event occurs and there are no event listeners for that event. The socket receives the msg and doesn't find a handler for it so nothing happens with it.

### How can we mitigate this?

[stackoverflow](https://stackoverflow.com/questions/32816290/what-happens-with-unhandled-socket-io-events)
You could avoid missing messages by always having the handlers installed and then deciding in the handlers (based on other state) whether to do anything with the message or not.

ALSO could implement a way to store the event logs on the server side and request a confirmation (like a status 200 - or read signal from the client) and then check off the events. If they did not get received/read, you could implement a service routine (like every hour) to check the logs and resend any messages/events

## Document the following Vocabulary Terms

### Socket

[wiki](https://en.wikipedia.org/wiki/Network_socket)
software structure within a network node of a computer network that serves as an endpoint for sending and receiving data across the network. Socket is real time, bi-directional and event-based communication.

### Web Socket

[wiki](https://en.wikipedia.org/wiki/WebSocket)
a computer communications protocol, providing full-duplex communication channels over a single TCP connection.

### Socket.io

[socket.io](https://socket.io/docs/v4/index.html#What-Socket-IO-is)
a library that enables real-time, bidirectional and event-based communication between the browser and the server.

### Client

[wiki](https://en.wikipedia.org/wiki/Client_(computing))
a piece of computer hardware or software that accesses a service made available by a server as part of the client–server model of computer networks. CLIENTS make REQUESTS to the SERVER.

### Server

[wiki](https://en.wikipedia.org/wiki/Server_(computing))
a piece of computer hardware or software that provides functionality for other programs or devices, called "clients". SERVERS LISTEN FOR REQUESTS and SERVE RESPONSES.

### OSI Model (Open Systems Interconnection model)

[wiki](https://en.wikipedia.org/wiki/OSI_model)
a conceptual model that characterises and standardises the communication functions of a telecommunication or computing system without regard to its underlying internal structure and technology. Its goal is the interoperability of diverse communication systems with standard communication protocols.

### TCP Model

[wiki](https://en.wikipedia.org/wiki/Internet_protocol_suite)
specifications for translating the network addressing methods used in the Internet Protocol to link-layer addresses, such as media access control (MAC) addresses

### TCP

[wiki](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
Transmission control protocol. TCP provides reliable, ordered, and error-checked delivery of a stream of octets (bytes) between applications running on hosts communicating via an IP network.

### UDP

[wiki](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
User Datagram Protocol - With UDP, computer applications can send messages, in this case referred to as datagrams, to other hosts on an Internet Protocol (IP) network

### Packets

[wiki](https://en.wikipedia.org/wiki/Network_packet)
 a formatted unit of data carried by a packet-switched network. A packet consists of control information and user data - also known as the payload.

<hr>

## Preview
Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

+ Which 3 things had you heard about previously and now have better clarity on?
socket.io
+ Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
implementation of socket.io
+ What are you most excited about trying to implement or see how it works?
socket.io - specifically - dynamic rooms, dynamic routes, dynamic namespaces

## Preparation Materials

### [Socket.io Chat Example](https://socket.io/get-started/chat/)
### [Rooms and Namespaces](https://socket.io/docs/rooms-and-namespaces/)
### [Socket.io Emit Cheatsheet](https://socket.io/docs/emit-cheatsheet/)