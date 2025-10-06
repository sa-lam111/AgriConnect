export const user=(req,res,next)=>{
    if(req.user){
        next()
    }else{
        res.status(401).json({message:"You are not a User"});
    }
}

export const farmer=(req,res,next)=>{
    if(req.farmer){
        next()
    }else{
        res.status(401).json({message:"You are not a Farmer"});
    }
}
