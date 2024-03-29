const User = require('../models/users');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

exports.authorization = async(request,response,next)=>{
    try {
        // Extract the JWT token from the 'token' cookie
        const token = request.cookies.token;
        const decode = jwt.verify(token,secretKey);
        const user= await User.findByPk(decode.userId);
        // If the user is found, attach the user object to the request and call the next middleware
        if(user){
            request.user = user;
            next(); 
        }else{
            response.status(401).send({message:"Unauthorized"});
        }
      
    } catch (error) {
         // Handle errors related to token verification
        if (error.name === 'TokenExpiredError') {
            response.status(401).json({ message: 'Time out please sign in again' });
        } else {
            response.status(500).json({ message: 'Something went wrong  - please sign again' });
        }
    }
}