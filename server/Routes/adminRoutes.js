const router = require('express').Router();
const {addAdmin,loginAdmin,studentList, pushNotice, getAllNotice, updateNotice,deleteNotice, getAllQuery, updateIQueryStatus} =require('../Controller/adminController');
const requireAdminLogin = require('../Middleware/requireAdminLogin');
// Admin Routes
router.post('/addAdmin',addAdmin);
router.post('/login',loginAdmin)

// Student Routes
router.get('/studentList',requireAdminLogin,studentList);

// Notice Routes
router.post('/pushNotice',requireAdminLogin,pushNotice);
router.get('/getAllNotice',getAllNotice);
router.put('/updateNotice',requireAdminLogin,updateNotice);
router.delete('/deleteNotice/:_id',requireAdminLogin,deleteNotice);

// Query Routes
router.get('/getAllQuery',requireAdminLogin,getAllQuery);
router.put('/updateIQueryStatus',requireAdminLogin,updateIQueryStatus)
module.exports= router;

