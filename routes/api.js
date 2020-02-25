const express = require ('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index')

})
router.get('/', function(req, res){
    res.redirect('index');
 })

module.exports = router
