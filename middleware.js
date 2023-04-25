module.exports.isLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
        req.flash('error','You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}
// Commit by Niraj
//Commit by harsh