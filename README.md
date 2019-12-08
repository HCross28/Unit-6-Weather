# Unit-6-Weather

So This project was not easy for me at all. In the script.js file, you will see a good chunk of code commented out. This was my first attempt to get the API up and running. However I ended up running into CORS issues, and 401 issues. For some reason the only way I was able to get this to work was to use the language from one of our past exercises to fill in the "q" section of the search parameter. 
I ended up using Houston Tx as a test location. 

Upon rendering the page you can see my original HTML switch from "Atlantis" (Placeholder City Name) to Houston as the API request is fulfilled with its correstponding information filling in as well
... with the exception of the UV Index. While looking through the console.log I couldn't find the UV Index for the life of me. 

On top of having the UV Index issue, is the 5 day forecast. The JSON response from the API doesn't appear to even have future dates listed? I'm assuming that is an issue with my query parameters, but unfortunately editing anything of what I have runs into the the first set of problems (CORS and 401). You can see small images of a sun, snowflake, rain-drop, cloud, and wind... These would change dynamically based on your search's forecast. 

Search History would dynamically fill up (Where you can see my Star Wars Planets as placeholders) in the column below the search bar. Due to the inability to get the search to even work with the API, this wasn't even an objective I've been able to get started working toward due to the lack of prerequisite functionality. 



So far the project simply shows a reading (at time of loading the page) of Houston's weather. All other functionality is reliant upon the success of being able to edit the queryParameters. 