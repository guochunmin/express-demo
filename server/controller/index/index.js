var indexCtrl = require ("../../service/index/index");
module.exports=function(router){
	router.use('/',indexCtrl.getIndex);
}
