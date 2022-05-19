# gortnm_backend_assignment
### Steps to use this app
- Clone this app using the following command
```
    git clone https://github.com/anamikarec/gortnm_backend_assignment.git
```
- Install the node_modules using following command
```
    npm install
```
- Now run the server on your system by the following command
```
    npm run start
```
- For registering a new user open the postman and use POST method at following route
```
    method:POST,
    url : http://localhost:3000/signup,
    body:{
        name : write_your_name,
        email : write_your_email,
        password : write_your_password,
        profilePic : select_profile_pic
    }
```
- To login a user open the postman and use POST method at
```
    method:POST,
    url : http://localhost:3000/signin,
    body:{
        email : write_your_email,
        password : write_your_password,
    }
```
- To get the all the users open the postman and use GET method at following route
```
    method:GET,
    url : http://localhost:3000/users,
    headers : Bearer _put_the_token_that_you_received_while_login_here
```

### You can view all these routes by clicking on the following collection in the postman page
    https://web.postman.co/workspace/My-Workspace~6af21f75-dab9-466a-816a-db0534619b42/collection/21062156-4e6be819-5e1e-4d2f-acf1-f3cc4c6853a5?action=share&creator=21062156



