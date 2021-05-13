# Readings Class 14: Event Driven Architecture

### What’s the difference between a FIFO and a standard queue?

[aws](https://aws.amazon.com/about-aws/whats-new/2016/11/amazon-sqs-introduces-fifo-queues-with-exactly-once-processing-and-lower-prices-for-standard-queues/#:~:text=FIFO%20queues%20have%20essentially%20the,being%20received%20by%20message%20consumers)
FIFO queues have essentially the same features as standard queues, but provide the added benefits of supporting ordering and exactly-once processing. FIFO queues provide additional features that help prevent unintentional duplicates from being sent by message producers or from being received by message consumers.

### How can the server be assured a message was properly received?

[stackoverflow](https://stackoverflow.com/questions/16731849/check-if-data-has-been-received-socket-c-sharp)
TCP/IP cannot guarantee that all data that have been sent will also be received. But even if it would guarantee it that is not what you need. What sender actually needs is to know if it does not have to send data again, and that usually implies if sent data has been processed on receivers side. If sender needs to know this then communication protocol must be changed so that sender can receive a confirmation by the receiver that it can safely assume that data has been processed. Also, sender must at certain point proclaim a time-out (and close the socket) if receiver did not send back the confirmation on time (and in your code you must decide what to do about it, maybe save data to be sent at later time, or raise an alert to the user). Also receiver must handle the situation where the same data is being sent twice (as last item in previous connection, and as another item in new connection) and not treat this data as two distinct pieces of data.

### What classic design pattern is best represented by event driven programming?

[wiki](https://en.wikipedia.org/wiki/Observer_pattern)
observer pattern

### How do you test an event driven system?

[gurock](https://blog.gurock.com/event-driven-application-architectures/)
Event-driven application architecture provides a lot of power. But it also creates challenges for test practitioners. However, the good news is that these challenges are well-known. Companies that are successful in testing event-driven application architecture understand the asynchronous nature of the paradigm. They weave aggregated logging and distributed tracing into every level of test activity, from unit testing to system-wide performance testing.

## Document the following Vocabulary Terms

### FIFO Queue

[wiki](<https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)>)
first in first out queue

### Pub/Sub

[wiki](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
Pub/Sub is an asynchronous messaging service that decouples services that produce events from services that process events.

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- Which 3 things had you heard about previously and now have better clarity on?
  Amazon AWS SNS and SQS
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  Lambda, AWS, SNS, SQS
- What are you most excited about trying to implement or see how it works?
  implementation of messaging queue

## Preparation Materials

- [AWS SNS and SQS youtube](https://www.youtube.com/watch?v=mXk0MNjlO7A)
