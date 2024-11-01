// ...allowedRoles is simply destructuring syntax.

const authorizeRoles = (...allowedRoles)=>{

    
    
    return (req,res,next)=>{
        console.log(req.user);
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message:"Unauthorized: Access Denied"
            })
        } else {
            next();
        }
    }
}

module.exports = authorizeRoles;