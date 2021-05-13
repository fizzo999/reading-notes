# Readings: AWS: Cloud Servers

### Describe the Web-Request-Response-Cycle

WRRC is the process where a client(ie a browser window) makes a request (using the REST verbs/method GET, POST, UPDATE, DELETE) including a body and or headers - to a server(that is listening for requests), via the internet using HTTP (hyper text transfer protocol). The server processes the request (making an API call effectively becoming the client to another server, or accessing a database (mirroring REST as in CRUD - Create, Read, Update, Delete)) and then sends a response back to the client (usually including a status code, body and/or headers). The client (web browser) takes in the response and usually does something with it, like display a webpage or some data that was returned in the response.

### Explain what a “server” is, as it relates to the WRRC

a piece of hardware or software that listens for requests (on a PORT) and then processes that request and sends back some data to the client, sending it over a network.

### What does it mean to “deploy” an application?

[resource](https://www.sumologic.com/glossary/software-deployment/#:~:text=Software%20deployment%20refers%20to%20the,on%20a%20server%20or%20device.&text=Software%20deployment%20refers%20to%20the%20process%20of%20making%20the%20application,user's%20computer%20or%20mobile%20device.)

Software deployment refers to the process of running an application on a server or device.

## Document the following Vocabulary Terms

### Server

[resource](https://www.paessler.com/it-explained/server)
A server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network.

### Pub/Sub

[resource](https://medium.com/@thebabscraig/javascript-design-patterns-part-2-the-publisher-subscriber-pattern-8fe07e157213)
The Publisher/Subscriber pattern, or “PubSub” for short, is a pattern that allows us to create modules that can communicate with each other without depending directly on each other.

### WRRC

Web Request Response Cycle - see above

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- Which 3 things had you heard about previously and now have better clarity on?
  virtual machines and containers
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  AWS
- What are you most excited about trying to implement or see how it works?
  AWS - and AR VR in AWS - my dream project - build software for VR headset to teach people to have an out of body experience

Preparation Materials

- [Virtual Machines ](https://www.youtube.com/watch?v=yIVXjl4SwVo)
- [VMS and the Cloud ](https://www.youtube.com/watch?v=l0DfHUWMjsU)
- [AWS EC2](https://aws.amazon.com/ec2/)
- [EC2 For Humans](https://www.youtube.com/watch?v=lZMkgOMYYIg)
- [Elastic Beanstalk](https://www.youtube.com/watch?v=SrwxAScdyT0)
