# CRUD app /API using Node.js 

## Libraries used 
* express
    * To create a server
* express-async-handler
    * To have better error handling and readable code
* mongoose
    * To connect to mongodb/atlas
* dotenv
    * storing sensitive env vars
* cors
    * allowing for cross origin requests
* nodemon
    * dev dependency

---
## Flow
1. Create an express app
2. Add cors middle ware
3. Connect to db
4. Use the router middleware
5. In router middleware define all the routes for different methods
6. Create a controller file
7. Inside the controller file define methods to be passed as arguments to the routes defined in router file
8. Create the DataModel with apropriate schema 
9. Use the Model in the controller file to interface with the database
10. Create an error handler middle ware and write appropriate logic in it
11. Use the error handler middleware at last in the index file

---
## Outputs 
* Get Request 
![Get Req](https://raw.githubusercontent.com/AyushBobale/CredenceAnalyticsAssesment/main/imgs/get_req.PNG?raw=true)
* Post Request 
![Post Req](https://raw.githubusercontent.com/AyushBobale/CredenceAnalyticsAssesment/main/imgs/post_req.PNG?raw=true)
* Get after Post Request 
![Get after_Post_Req](https://raw.githubusercontent.com/AyushBobale/CredenceAnalyticsAssesment/main/imgs/get_after_post.PNG?raw=true)
* Update Request 
![Update Req](https://raw.githubusercontent.com/AyushBobale/CredenceAnalyticsAssesment/main/imgs/update_req.PNG?raw=true)
* Get after Update Request 
![Get after_update_Req](https://raw.githubusercontent.com/AyushBobale/CredenceAnalyticsAssesment/main/imgs/get_after_update.PNG?raw=true)
* Delete Request 
![Delete Req](https://raw.githubusercontent.com/AyushBobale/CredenceAnalyticsAssesment/main/imgs/del_req.PNG?raw=true)
* Get after Delete Request 
![Get after_Del_Req](https://raw.githubusercontent.com/AyushBobale/CredenceAnalyticsAssesment/main/imgs/get_after_del.PNG?raw=true)


