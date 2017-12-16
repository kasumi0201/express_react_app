var express = require('express');
var router = express.Router();

/* GET home page. */
//ログインしてるuserだけが"/"のページにいけるように、ensureAuthenticatedのfunctionを挟む。
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//  "/"のページにアクセスしようとしたら、ログインページに飛ばされる。
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
