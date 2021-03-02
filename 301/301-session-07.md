## <center> What Google Learned From Its Quest to Build the Perfect Team </center>

### <center> New research reveals surprising truths about why some work groups thrive and others falter. </center>

[New York Times Magazine - Feb 25 2016](https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html)

Great article about Google internal research what makes teams successful. 

`Team intelligence >>> sumOf(individual intelligence)`

Research project Aristotle - after studying 100s of teams with data - finding that 2 main characteristics stand out for successful teams:

+ ‘‘conversational turn-taking’’ - allowing and encouraging everyone to speak their mind;
+ ‘‘above average social sensitivity’’ - being sensitive to each others emotional states and needs;

***Within psychology, researchers sometimes colloquially refer to traits like ‘‘conversational turn-taking’’ and ‘‘average social sensitivity’’ as aspects of what’s known as psychological safety — a group culture that the Harvard Business School professor Amy Edmondson defines as a ‘‘shared belief held by members of a team that the team is safe for interpersonal risk-taking.’’ Psychological safety is ‘‘a sense of confidence that the team will not embarrass, reject or punish someone for speaking up,’’ Edmondson wrote in a study published in 1999. ‘‘It describes a team climate characterized by interpersonal trust and mutual respect in which people are comfortable being themselves.’’***

Most of all, employees had talked about how various teams felt. ‘‘And that made a lot of sense to me, maybe because of my experiences at Yale,’’ Rozovsky said. ‘‘I’d been on some teams that left me feeling totally exhausted and others where I got so much energy from the group.’’ Rozovsky’s study group at Yale was draining because the norms — the fights over leadership, the tendency to critique — put her on guard. Whereas the norms of her case-competition team — enthusiasm for one another’s ideas, joking around and having fun — allowed everyone to feel relaxed and energized.

For Project Aristotle, research on psychological safety pointed to particular norms that are vital to success. There were other behaviors that seemed important as well — like making sure teams had clear goals and creating a culture of dependability. But Google’s data indicated that psychological safety, more than anything else, was critical to making a team work.

‘‘We had to get people to establish psychologically safe environments,’’ Rozovsky told me. But it wasn’t clear how to do that. ‘‘People here are really busy,’’ she said. ‘‘We needed clear guidelines.’’

However, establishing psychological safety is, by its very nature, somewhat messy and difficult to implement. 
You can tell people to take turns during a conversation and to listen to one another more. You can instruct employees to be sensitive to how their colleagues feel and to notice when someone seems upset. But the kinds of people who work at Google are often the ones who became software engineers because they wanted to avoid talking about feelings in the first place.

The paradox, of course, is that Google’s intense data collection and number crunching have led it to the same conclusions that good managers have always known. In the best teams, members listen to one another and show sensitivity to feelings and needs.

The fact that these insights aren’t wholly original doesn’t mean Google’s contributions aren’t valuable. In fact, in some ways, the ‘‘employee performance optimization’’ movement has given us a method for talking about our insecurities, fears and aspirations in more constructive ways. It also has given us the tools to quickly teach lessons that once took managers decades to absorb. Google, in other words, in its race to build the perfect team, has perhaps unintentionally demonstrated the usefulness of imperfection and done what Silicon Valley does best: figure out how to create psychological safety faster, better and in more productive ways.
And have the data to support that theory/claim/ageold wisdom.

Like in ***the speed of trust*** what matters most to people - and they thrive and flourish when the group culture is as such to be able to trust and open up. Live their true self instead of the waited energy of putting on the facade and holding back out of fear of beind reprimanded or ridiculed. In order for people to thrive, the group culture has to be implemented/changed or just encouraged to be ***LOVE*** instead of ***FEAR***.

<hr>


## <center> how I explained REST to my brother</center>

https://gist.github.com/brookr/5977550

Roy Thomas Fielding (born 1965) is an American computer scientist, one of the principal authors of the HTTP specification and the originator of the Representational State Transfer (REST) architectural style. He is an authority on computer network architecture and co-founded the Apache HTTP Server project. 

Representational state transfer (REST) is a de-facto standard for a software architecture of interactive applications that use Web services. A Web service that follows this standard is called RESTful. 

 In a RESTful Web service, requests made to a resource's URI elicit a response with a payload formatted in HTML, XML, JSON, or some other format.

REST is intended to evoke an image of how a well-designed Web application behaves: it is a network of Web resources (a virtual state-machine) where the user progresses through the application by selecting resource identifiers such as http://www.example.com/articles/21 and resource operations such as GET or POST (application state transitions), resulting in the next resource's representation (the next application state) being transferred to the end user for their use. (wikipedia).

In this article someone explains the basis of REST to a layperson. The analogy is brought up about HTTP addresses - URLS being like nouns - like a webpage has several resources like text, images, video, audio,... and how there is a need for a common language across machines - so they all know what certain nouns mean.
He then stretches the analogy further to include verbs. The most universal ones being: GET, PUT, and DELETE.

HTTP—this protocol Fielding and his friends created—is all about applying verbs to nouns. For instance, when you go to a web page, the browser does an HTTP GET on the URL you type in and back comes a web page.

Web pages usually have images. Those are separate resources. The web page just specifies the URLs to the images and the browser goes and does more GETs using the HTTP protocol on them until all the resources are obtained and the web page is displayed. But the important thing here is that very different kinds of nouns can be treated the same. Whether the noun is an image, text, video, an mp3, a slideshow, whatever. I can GET all of those things the same way given a URL.

web browsers pretty much just GET stuff. They don't do a lot of other types of interaction with resources. This is a problem because it has led many people to assume that HTTP is just for GETing. But HTTP is actually a general purpose protocol for applying verbs to nouns.

more than just GET http can POST PUT PATCH
HTTP provides operations (HTTP methods) GET, HEAD, POST, PUT, PATCH, DELETE, CONNECT, OPTIONS and TRACE.(wikipedia)

<hr>


## <center> super agent</center>

https://visionmedia.github.io/superagent/

SuperAgent is light-weight progressive ajax API crafted for flexibility, readability, and a low learning curve after being frustrated with many of the existing request APIs. It also works with Node.js!

Request basics
A request can be initiated by invoking the appropriate method on the request object, then calling .then() (or .end() or await) to send the request. For example a simple GET request:
```
 request
   .get('/search')
   .then(res => {
      // res.body, res.headers, res.status
   })
   .catch(err => {
      // err.message, err.response
   });
```
HTTP method may also be passed as a string: 

`request('GET', '/search').then(success, failure)`;

Old-style callbacks are also supported, but not recommended. Instead of .then() you can call .end():
```
request('GET', '/search').end(function(err, res){
  if (res.ok) {}
});
```
Absolute URLs can be used. In web browsers absolute URLs work only if the server implements CORS.
```
 request
   .get('https://example.com/search')
   .then(res => {

   });
```
The Node client supports making requests to Unix Domain Sockets:
```
// pattern: https?+unix://SOCKET_PATH/REQUEST_PATH
//          Use `%2F` as `/` in SOCKET_PATH
try {
  const res = await request
    .get('http+unix://%2Fabsolute%2Fpath%2Fto%2Funix.sock/search');
  // res.body, res.headers, res.status
} catch(err) {
  // err.message, err.response
}
```
DELETE, HEAD, PATCH, POST, and PUT requests can also be used, simply change the method name:
```
request
  .head('/favicon.ico')
  .then(res => {

  });
```
DELETE can be also called as .del() for compatibility with old IE where delete is a reserved word.

The HTTP method defaults to GET, so if you wish, the following is valid:
```
 request('/search', (err, res) => {

 });
```

[Back to ReadMe](../README.md)