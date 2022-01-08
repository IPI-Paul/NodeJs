Node.Js Full Course for Beginners

https://m.youtube.com/watch?v=f2EqECiTBL8

This is a helpful video tutorial that takes you through each step of the process to building a server using the Model View Controller structure. 
 - It starts of with just a few simple node functions to get you grounded.
 - There are good examples that show you that you can keep your sensitive data in a .env file and how to call it.
 - The tutor takes you through installing custom node modules and their implementation. As usual, I have changed all custom node module installations to be global installations and altered code given in the tutorials to use the global directory/module from a variable exported with globals.js
 - Having installed Visual Studio Code Code-Insiders, I noted that hovering over the scripts variables in the package.json files gave me the option to click and run that option in the terminal.
 - Unlike the sample data offered by the tutor, I have created an individual file for each step prior to running and displaying outputs. Hence the _01 ... _0?
 - The tutor also gives an example of how to enable and use Thunder Client in Visual Studio
 - From this learning experience I also became aware of how to use the Web Browser Developer Console to fetch data much like Thunder Client does. Interesting!
 - This course also highlighted that using nodemon solely when developing hides the fact that server reloads were being initiated when files changed due to JSON Web Token refresh and logout token requests. When running the same server with node, verification processes failed as the json data in cache did not match the current state. Some files ending with _Mine have been added that change the JSON data being used in filters by first deleting the cache and reading the files a fresh. This was no longer a problem once the tutorial started using MongoDb.
 - This course could do with a second part, as it would be beneficial to see how forms use the cookies as opposed to entering the JSON Web Tokens in an authorisation header

I have also added index.json, index.ejs and index.js to run a web server and give a brief tabular overview of the course files. Thus learning a bit more about how to use JSON and .ejs files. The page being served has a table on the left showing all the tutorials and files being used, which are hyperlinked to populate the iframe on the right with the file contents. It would be a plus to learn how to have the code displayed as one would find in Visual Studio or any other IDE, with clear syntax highlighting.