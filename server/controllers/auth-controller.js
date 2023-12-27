const User = require("../models/user-model")

const home = async(req,res)=>{
    try{
        res.send("welcome to home")
    }
    catch(error){
        console.log(error)
    }
}

const register = async(req,res)=>{
    try{
        console.log(req.body);
        const { username, email, phone, password } = req.body;
    
        const userExist = await User.findOne({ email: email });
    
        if (userExist) {
          return res.status(400).json({ msg: "email already exists" });
        }
    
        const userCreated = await User.create({ username, email, phone, password });
    
        // res.status(201).json({ message: "User registered successfully" });
        res.status(201).json({ 
            msg: userCreated,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(), 
        });
        
      }
    catch(error){
        console.log(error)
    }
}


const login = async(req,res)=>{
    try{
        const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password " });
    }
  }
    catch(error){
        console.log(error)
    }
}
module.exports = {home,register,login}