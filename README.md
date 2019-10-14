# 430-proj-1

# Documentation
I intended to make a chat application.

I ran into quite a few errors and bumps in the road so to speak.

I have status codes set up for each of the required (200, 201, 204...). However, I only stubbed these as there are more issues I ran into.

I set up two functions, sendNickname & sendMessage. I set these up similar to sendPost in class (make an xhr object, set headers, etc.).
These however both ended in errors that I could not resolve, which ended up halting a majority of my progress.

My intention with these functions was to send information to a JSON object, parse these and add them to a user{} object. This user{}
object was to contain a username and a message. 

I reasoned that automating a GET request to see if a user added a message every two seconds to retrieve messages would have simulated
a chat application effectively.
