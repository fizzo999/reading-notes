# Readings: AWS: API, Dynamo and Lambda Class 18

## What are serverless functions?

[source](https://www.pubnub.com/blog/what-is-a-serverless-function/)
single-purpose, programmatic functions that are hosted on managed infrastructure. These functions, which are invoked through the Internet, are hosted and maintained by cloud computing companies. The engineering teams within those companies ensure that the serverless functions have near-perfect uptime, redundant instances around the world, and scale to any incoming network request volume.

### If you were to create a system that emulated Lambda functions, how would you do it?

I like Jarrell Houstons answer from the chat stream the best:
Lambda functions fire when certain events occur within an application. So in order to implement this I would create a event driven application which I would then be able to define events that Lambda functions react to.
But I would add to that what makes lambda functions such a great tool is that they use and are connected to the entire AWS server infrastructure - so you can connect API engine, several different databases, and the list goes on and on and on - to VR engine, to AR engine, to machine learning (half a page of individual tool and services ) - it's MASSIVE. No wonder when John Cokos said that these server farms are like several football fields and then they reach something like 27 stories deep underground..... imagine the waste heat - you could propably grow a lot of food with all that free heat that they propably pay for just to get rid off....lol.(majoy side tangint here).

### Describe how a CDN works

[source](https://cyberhoot.com/cybrary/content-delivery-network-cdn/)
CDNs work through servers nearest to the website visitor respond to the request. The content delivery network copies the pages of a website to a network of servers that are spread out at geographically different locations, caching the contents of the page. When a user requests a webpage that is part of a content delivery network, the CDN will redirect the request from the originating site’s server to a server in the CDN that is closest to the user and deliver the cached content. CDNs will also communicate with the originating server to deliver any content that has not been previously cached. In turn, the speed is improved by distributing content closer to the website visitors by using a nearby CDN server, causing visitors to experience faster page loading times. In simpler terms, for example, instead of a user in London trying to access a server in LA, which can cause slower Internet speeds, the user would be redirected through a CDN that is geographically closest to them (London, Paris, Stockholm, etc). As of today, the majority of web traffic goes through through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon. Beause of the distribution of content across several main server hubs also lessens the chances of a DDoS attack.

## Document the following Vocabulary Terms

### Serverless Functions

[source](https://www.pubnub.com/blog/what-is-a-serverless-function/)
single-purpose, programmatic functions that are hosted on managed infrastructure. These functions, which are invoked through the Internet, are hosted and maintained by cloud computing companies. The engineering teams within those companies ensure that the serverless functions have near-perfect uptime, redundant instances around the world, and scale to any incoming network request volume.

### Cloud Storage

[aws](https://aws.amazon.com/what-is-cloud-storage/)
a cloud computing model that stores data on the Internet through a cloud computing provider who manages and operates data storage as a service. It’s delivered on demand with just-in-time capacity and costs, and eliminates buying and managing your own data storage infrastructure. This gives you agility, global scale and durability, with “anytime, anywhere” data access.

### CDN

[source](https://cyberhoot.com/cybrary/content-delivery-network-cdn/)
Delivery Network (CDN) is a geographically distributed group of servers that work together to provide fast delivery of Internet content. A CDN allows for the fast transfer of data needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

- Which 3 things had you heard about previously and now have better clarity on?
  lambda functions
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
  how to implement and connect lambda functions
- What are you most excited about trying to implement or see how it works?
  I d like to implement the FS FILE SYSTEM NODE MODULE and then STORE THE NODE MODULES (like the bulk of them) in a s3 bucket and download them on call into the lambda function.

## Preparation Materials

### [AWS API Gateway Overview](https://www.serverless.com/amazon-api-gateway)

### [AWS API Gateway](https://aws.amazon.com/api-gateway/)

### [AWS DynamoDB Guide](https://www.dynamodbguide.com/what-is-dynamo-db/)

### [AWS DynamoDB](https://aws.amazon.com/dynamodb/)

### [Dynamoose](https://dynamoosejs.com/getting_started/Introduction)
