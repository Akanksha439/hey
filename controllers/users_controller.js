module.exports.profile=function(req,res){
    return res.render('user-profile',{
        title:"user|profile"
    });
}

module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"codeial|signup"
    });
}

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"codeial|signin"
    });
}

module.exports.create=function(req,res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });

}
module.exports.createSession=function(req,res){
    
}