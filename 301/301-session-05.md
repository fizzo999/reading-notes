HEROKU
Heroku is a container-based cloud service we can use to deploy and manage our apps. It supports Java, Node.js, Python among others. Our applications will have a unique domain to route HTTP requests to the correct app container (dyno). Heroku seems to be able to run the apps from the cloud reliably. Today, we installed Heroku via shell commands. For Windows (at least my machine) I had to run the .exe file provided in the page, then run the rest of the commands through the shell. The service is free, but still asks for a credit card for incidentals due to too much use. Somehow, I find HEROKU to be similar to Postgress, but with more features (so it appears.)

Sources:

Getting Started on Heroku with Node.js | Heroku Dev Center (Links to an external site.)

Node.js For Beginners. Deploy Your Blog to Heroku - How To Node - NodeJS

https://devcenter.heroku.com/articles/getting-started-with-nodejs (Links to an external site.)
Sign up. create a free account at https://www.signup.heroku.com
### Getting started with Heroku
Sign up. create a free account at 
https://www.signup.heroku.com
### Install from git based on your own OS.
+ Login from the command line to Heroku
+ verify your updated versions of NODE, NPM, and GIT
+ Clone the repo from github with git clone https://github.com/heroku/node-js-getting-started.git 
+ change directory (cd) into the created file. (in this case its getting started with node js, but you could use any language they offer)
+ by running the heroku create line in the command line you create an app on heroku.com which prepares heroku to recieve your source code.
+ run git push heroku main to deploy your code.
+ run heroku open to visit the randomly generated url for the given app.
+ view logs by running heroku logs --tail command in command line.
+ stop streaming the logs by running (control + c);


[Back to ReadMe](../README.md)