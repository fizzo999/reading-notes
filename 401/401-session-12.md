# Readings Class 12: Socket.io

Review, Research, and Discussion
In your reading notes page for this class, provide answers to the following prompts. Cite any external sources

### What is the benefit of transforming data into packets?

[techterms](https://techterms.com/definition/packet)
A packet is a small amount of data sent over a network (compare that to quanta - as in quantum energy - smallest measure of a packet of energy - emitted by a photon), such as a LAN or the Internet. Similar to a real-life package, each packet includes a source and destination as well as the content (or data) being transferred. When the packets reach their destination, they are reassembled into a single file or other contiguous block of data. While the exact structure of a packet varies between protocols, a typical packet includes two sections — a header and payload. Information about the packet is stored in the header.

Packets are intended to transfer data reliably and efficiently. Instead of transferring a large file as a single block of data, sending smaller packets helps ensure each section is transmitted successfully. If a packet is not received or is "dropped," only the dropped packet needs to be resent

### UDP is often refereed to as a connectionless protocol. Why is this?

[wiki](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
In computer networking, the User Datagram Protocol (UDP) is one of the core members of the Internet protocol suite. With UDP, computer applications can send messages, in this case referred to as datagrams, to other hosts on an Internet Protocol (IP) network. Prior communications are not required in order to set up communication channels or data paths.

UDP uses a simple connectionless communication model with a minimum of protocol mechanisms. UDP provides checksums for data integrity, and port numbers for addressing different functions at the source and destination of the datagram. It has no handshaking dialogues, and thus exposes the user's program to any unreliability of the underlying network; there is no guarantee of delivery, ordering, or duplicate protection. If error-correction facilities are needed at the network interface level, an application may use Transmission Control Protocol (TCP) or Stream Control Transmission Protocol (SCTP) which are designed for this purpose.

UDP is suitable for purposes where error checking and correction are either not necessary or are performed in the application; UDP avoids the overhead of such processing in the protocol stack. Time-sensitive applications often use UDP because dropping packets is preferable to waiting for packets delayed due to retransmission, which may not be an option in a real-time system

### Can a socket server application have multiple socket connections?

[quora](https://www.quora.com/Can-a-socket-of-a-server-be-used-by-multiple-clients-simultaneously)
Yes, you can create a server socket that can handle multiple clients simultaneously.

### Can a socket connection application be connected to multiple socket servers?

[stackoverflow](https://stackoverflow.com/questions/11129212/tcp-can-two-different-sockets-share-a-port#:~:text=5%20Answers&text=A%20server%20socket%20listens%20on%20a%20single%20port.&text=Multiple%20connections%20on%20the%20same,system%20resources%20allow%20it%20to.)
On the client-side, it is common practice for new outbound connections to use a random client-side port, in which case it is possible to run out of available ports if you make a lot of connections in a short amount of time.

### Can an application be both a socket server and a socket connection?

[]()
Yes. Eample is our lab with socket.io

## Document the following Vocabulary Terms

### Observer Pattern

[wiki](https://en.wikipedia.org/wiki/Observer_pattern)
a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

### Listener

[geeksforgeeks](https://www.geeksforgeeks.org/javascript-addeventlistener-with-examples/)
An event listener is a procedure in JavaScript that waits for an event to occur. The simple example of an event is a user clicking the mouse or pressing a key on the keyboard.

### Event Handler

[webopedia](https://www.webopedia.com/definitions/event-handler/)
a software routine that processes actions from a user such as keystrokes and mouse movements. With Web sites, event handlers make Web content dynamic.

### Event Driven Programming

[edgetechacademy](https://www.edgetechacademy.edu/node-js/event-driven-programming/)
when a program is designed to respond to user engagement in various forms. It is known as a programming paradigm in which the flow of program execution is determined by “events.” Events are any user interaction, such as a click or key press, in response to prompt from the system

### Event Loop

[wiki](https://en.wikipedia.org/wiki/Event_loop#:~:text=In%20computer%20science%2C%20the%20event,or%20messages%20in%20a%20program)
A programming contsruct or design pattern that waits and dispatches events or messages in a program. By making a request to some "event provider" then calls the relevant event handler. An Event Loop monitors the Call Stack and the Callback Queue.

### Event Queue

[techopedia](https://www.techopedia.com/definition/24963/event-queue#:~:text=An%20event%20queue%20is%20a,of%20an%20enterprise%20messaging%20system.)
a repository where events from an application are held prior to being processed by a receiving program or system. Event queues are often used in the context of an enterprise messaging system.

### Call Stack

[wiki](https://en.wikipedia.org/wiki/Call_stack)
a stack data structure that stores information about the active subroutines of a computer program.

### Emit/Raise/Trigger

to start/fire a predefined event(socket.io), to start a routine

### Subscribe

[aws](https://aws.amazon.com/pub-sub-messaging/)
Publish/subscribe messaging, or pub/sub messaging, is a form of asynchronous service-to-service communication used in serverless and microservices architectures. In a pub/sub model, any message published to a topic is immediately received by all of the subscribers to the topic.

### database

[oracle](https://www.oracle.com/database/what-is-database/)
an organized collection of structured information, or data, typically stored electronically in a computer system.

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- Which 3 things had you heard about previously and now have better clarity on?
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
- What are you most excited about trying to implement or see how it works?

### Preparation Materials and Additional Resources

#### Videos

- [OSI Model Explained](https://www.youtube.com/watch?v=vv4y_uOneC0)
- [TCP Handshakes Explained](https://www.youtube.com/watch?v=xMtP5ZB3wSk)

#### Read/Skim

- [Web Sockets](https://en.wikipedia.org/wiki/WebSocket)
- [Socket.io Tutorial](https://www.tutorialspoint.com/socket.io/)
- [Socket.io vs Web Sockets](https://www.educba.com/websocket-vs-socket-io/)

#### Bookmark

- [Socket.io Documentation](https://socket.io/docs/)
- [Socket.io Server API](https://socket.io/docs/server-api)
- [Socket.io Client API](https://socket.io/docs/client-api)
- [Socket Testing Tool](https://amritb.github.io/socketio-client-tool/)
