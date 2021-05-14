# Readings Class 19: AWS: Events

### Describe the similarities between AWS API Gateway + Lambda functions and an ExpressJS Server

[source](https://www.express-gateway.io/eg-vs-amazon-aws-api-gateway/)

- Express Gateway is an API Gateway that can sit at the heart of any microservices architecture,
  regardless of what language or platform you’re using. Express Gateway secures your microservices and exposes
  them through APIs using Node.js, ExpressJS and Express middleware.

- Amazon’s API Gateway is a fully managed service that makes it easy for developers to create, publish,
  maintain, monitor, and secure APIs at any scale.

- Amazons Lambda functions are a serverless environment built function execution service

### List the AWS Database offerings and talk about the pros and cons of each

- Amazon Aurora is a MySQL- and PostgreSQL-compatible enterprise-class database, starting at <$1/day. Aurora supports up to 64TB of auto-scaling storage capacity, 6-way replication across three availability zones, and 15 low-latency read replicas.

- ElastiCache - ElastiCache is a web service that makes it easier to launch, manage, and scale a distributed in-memory cache in the cloud.

- Amazon DynamoDB is a fully managed non-relational database service that provides fast and predictable performance with seamless scalability.

- Amazon Neptune is a fast, reliable graph database service that makes it easy to build and run applications that work with highly connected datasets.

- Amazon QLDB is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log owned by a central trusted authority. Amazon QLDB tracks each and every application data change and maintains a complete and verifiable history of changes over time.

- Amazon DocumentDB (with MongoDB compatibility) is a fast, scalable, highly available, and fully managed document database service that supports MongoDB workloads.

- Amazon Keyspaces (for Apache Cassandra)is a scalable, highly available, and managed Apache Cassandra–compatible database service.

- Timestream can easily store and analyze sensor data for IoT applications, metrics for DevOps use cases, and telemetry for application monitoring scenarios such as clickstream data analysis.

### What’s the difference between a FIFO and a standard queue?

[aws](https://aws.amazon.com/about-aws/whats-new/2016/11/amazon-sqs-introduces-fifo-queues-with-exactly-once-processing-and-lower-prices-for-standard-queues/#:~:text=FIFO%20queues%20have%20essentially%20the,being%20received%20by%20message%20consumers.)

FIFO queues have essentially the same features as standard queues, but provide the added benefits of supporting ordering and exactly-once processing. FIFO queues provide additional features that help prevent unintentional duplicates from being sent by message producers or from being received by message consumers

### How can the server be assured a message was properly received?

[stackoverflow](https://stackoverflow.com/questions/16731849/check-if-data-has-been-received-socket-c-sharp)

TCP/IP cannot guarantee that all data that have been sent will also be received. But even if it would guarantee it that is not what you need. What sender actually needs is to know if it does not have to send data again, and that usually implies if sent data has been processed on receivers side. If sender needs to know this then communication protocol must be changed so that sender can receive a confirmation by the receiver that it can safely assume that data has been processed. Also, sender must at certain point proclaim a time-out (and close the socket) if receiver did not send back the confirmation on time (and in your code you must decide what to do about it, maybe save data to be sent at later time, or raise an alert to the user). Also receiver must handle the situation where the same data is being sent twice (as last item in previous connection, and as another item in new connection) and not treat this data as two distinct pieces of data.

## Document the following Vocabulary Terms

### Serverless API

[source](https://hackernoon.com/what-is-serverless-architecture-what-are-its-pros-and-cons-cc4b804022e9)

Serverless is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. A serverless application runs in stateless compute containers that are event-triggered, ephemeral (may last for one invocation), and fully managed by the cloud provider.

### Triggers

[source](https://dashbird.io/blog/what-are-aws-lambda-triggers/#:~:text=Triggers%20are%20pieces%20of%20code,ARN%20with%20your%20Lambda%20function.)
Triggers are pieces of code that will automatically respond to an event.

### Dynamo vs Mongo

[source](https://www.xplenty.com/blog/dynamodb-vs-mongodb-differences/#:~:text=DynamoDB%20as%20an%20integrated%20AWS,and%20has%20fewer%20size%20restrictions.)
MongoDB is vendor agnostic, Open Source, and can be deployed anywhere. DynamoDB is only available on AWS.
DynamoDB is a fully managed AWS service, MongoDB can be self installed or fully managed with MongoDB Atlas.
DynamoDB as an integrated AWS service makes it easier to develop end to end solutions.
DynamoDB uses tables, items and attributes, MongoDB uses JSON-like documents.
DynamoDB supports limited data types and smaller item sizes; MongoDB supports more data types and has fewer size restrictions. Dynamo is hosted by AWS. Both are non-relational databases.

### Dynamoose vs Mongoose

[source](https://www.npmjs.com/package/dynamoose)
they are basically the same but Dynamoose is the controller shell for DynamoDB and Mongoose is the controller shell for MongoDB.

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- Which 3 things had you heard about previously and now have better clarity on? Triggers, Dynamo, Dynamoose
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo? fs file upload into lambda
- What are you most excited about trying to implement or see how it works? sns sqs lambda integration

## Preparation Materials

- ### [SQS and SNS Basics](https://www.youtube.com/watch?v=UesxWuZMZqI)
- ### [AWS SQS vs SNS](https://medium.com/awesome-cloud/aws-difference-between-sqs-and-sns-61a397bf76c5)

## Bookmark

- ### [SNS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)
- ### [SQS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html)
