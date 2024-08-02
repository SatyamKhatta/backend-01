//  here we are craeting a wrapper funtion for db that is very usefull in production

const asyncHandler=(reqHANDLER)=>{
    (req,res,next) =>{
        Promise.resolve(reqHANDLER(req,res,next)).catch((err)=>next(err))
    }
}







//  this is a wrapper using try catch syntax

// const asyncHandler = (fn)=> async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success :false,
//             message:err.message
//         })
//     }
// }