const auth = {
   
    isLoggedIn: (req, res, next)=> {
        if(req.isAuthenticated()){
            console.log('user authenticated');
            next();
        } else{
            console.log("user not authenticated");
            res.redirect('/api/user/unauthorized')
        }
    },

    logoutUser: (req, res, next)=> {
        if(req.isAuthenticated()){
            console.log('logged out successfully')
            req.logout();
            next();
        } else {
            next();
        }
    },

    isAdmin: (req, res, next)=> {
        if (req.isAuthenticated()) {
            console.log('user confirmed');
            if(req.user.admin) {
                console.log('Administer Confirmed');
                next();
            } else {
                console.log('you must be an administer to continue');
                res.redirect('/api/user/unauthorized')
            }
        } else {
            res.redirect('/api/user/unauthorized')
        }
    }
}

module.exports = auth;
