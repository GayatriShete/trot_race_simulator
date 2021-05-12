# trot_race_simulator

Project Title: Trot Race Simulator

**Getting Started**

**About this Simulator-**
To start the trot race user login is mandatory.
After successfully login user will get token and emit the event for 'startRace' Internally.
The Login user data will store in MongoDB.
After start race Every min 6 horse object will created and its stored in DB.
Using this token user can see the result and finish this race.
After Every 5 min token will be re-authenticate automatically. 
Once Race is finish if want to start the race again then user have to give '/auth' api call i.e to login.


**Prerequisites-**
Nodejs, Postman

NodeJS-to start the server of simulator
Postman- to test/run the simulator

**Installing-**
npm i
npm start

**Running the tests**
Through postman run this test.
hit Api through postman.

**Break down into end to end tests
Example-**
**1.For Login User and Get Token**
Method- Post
url- http://{hostname}:3002/api/v1/auth
body- {
"email": "joe@example.com", "password": "xxxxxxx"
}
output-
{msg:"" ,Token:""}

**2.For getting real time Result**
Method- Get
url- http://{hostname}:3002/api/v1/result
header- add authorization :"Bearer {Token}" //Token- which got after login

**3.To finish the Race**
Method- Get
url- http://{hostname}:3002/api/v1/finish
header- add authorization :"Bearer {Token}" //Token- which got after login

**4.To store the user in DB**
Method- Post
url- http://{hostname}:3002/api/v1/storeWorker
body- {
"email": "joe@example.com", "password": "xxxxxxx"
}

**5.To get user List**
Method- Get
url- http://{hostname}:3002/api/v1/getWorker
