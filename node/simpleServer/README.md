Step 1
1. Setup the history file (if it does not exist)


Step 2: Creating the GET route
1. Create an object variable for the file path
2. Parse the data
3. Return the parse data to the user

Step 3: Setup the POST route
1. Get data from the request body
2. Sum it up
3. Create an object payload that contains a uuid, the request data and the sum
4. Send the request back to the user
5. Create an object variable to hold the content from the history file 
6. Create an objects variable to hold the parsed the data from No 5
7. Add the payload created in No 3 to the object variable from the No 6
8. Put the updated object in the history file

Step 4: Create the delete
Please complete it