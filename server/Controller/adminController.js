const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWTKEYS = process.env.JWTKEYS;
const { notice, admin } = require("../Model/admin");
const { student, enquiry } = require("../Model/student");
// Student Controller
const studentList = (async (req, res) => {
    try {
        student.find().then((result) => {
            res.json(result)
        })
    } catch (error) {
        console.log(error)
        res.json({ message: "Some Internal Error Occured", mError: error });
    }
})
// Admin Controller
const addAdmin = (async (req, res) => {
    try {
        const { name, email, profilePic, dob, mobileNumber, password } = req.body;
        if (!name || !email || !profilePic || !dob || !mobileNumber || !password) {
            return res.json({ error: "Please Add All Fields" });
        } else {
            bcrypt.hash(password, 9).then(async (hashedPassword) => {
                const adminData = new admin({
                    name, email, profilePic, dob, mobileNumber, password: hashedPassword
                });
                await adminData.save().then((data) => {
                    const token = jwt.sign({ _id: data._id }, process.env.JWTKEYS);
                    res.json(token);
                }).catch((error) => {
                    res.json({ error: `${JSON.stringify(error.keyValue)} is Already Exist` });
                })
            }).catch((error) => {
                res.json({ error: "Some Internal Error Occured", mError: error });
            })
        }
    } catch (error) {
        res.json({ error: 'Some Error Occured', mError: error });
    }
});
const loginAdmin = (async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ error: "Please Add All The Fields" });
        } else {
            const adminData = await admin.findOne({ email });
            if (adminData) {
                bcrypt.compare(password, adminData.password).then((result) => {
                    if (result) {
                        const token = jwt.sign({ _id: adminData._id }, JWTKEYS);
                        const { _id, name, email, profilePic, dob, mobileNumber } = adminData;
                        res.json({ token: token, adminData: { _id, name, email, profilePic, dob, mobileNumber } });
                    } else {
                        res.status(401).json({ error: 'Password Did Not Matched' });
                    }
                }).catch((error) => {
                    res.status(401).json({ error: 'Password Did Not Matched', mError: error });
                })
            }
            else {
                res.status(401).json({ error: 'Please Enter Valid Credential' });
            }
        }
    } catch (error) {
        return res.json({ error: "Some Error Occured", mError: error });
    }
});
// Notice Controller
const pushNotice = (async (req, res) => {
    try {
        const { title, nMessage } = req.body;
        if (!title || !nMessage) {
            return res.json({ error: "Please Fill All The Fields" });
        }
        else {
            const noticeData = new notice({
                title, nMessage
            });
            await noticeData.save().then(() => {
                res.json({ message: 'Notice Has Been Pushed' })
            }).catch((error) => {
                return res.json({ error: "Some Internal Error Occured", mError: error });
            })
        }
    } catch (error) {
        console.log(error);
    }
});
const getAllNotice = (async (req, res) => {
    try {
        let allNotice = await notice.find().select('title nMessage')
        if (allNotice) {
            res.json(allNotice);
        }
        else {
            res.json({ message: 'Not Exist' });
        }
    } catch (error) {
        return res.json({ error: "Some Internal Error Occured", mError: error });
    }
});
const updateNotice = (async (req, res) => {
    try {
        const { _id, title, nMessage } = req.body;
        if (!_id) {
            res.json({ message: "Notice Does Not Exist" });
        }
        else {
            await notice.findOneAndUpdate({ _id: _id }, { $set: { title: title, nMessage: nMessage } }, { new: true }).then((notice) => {
                res.json({ notice, message: "Saved" });
            }).catch((error) => {
                res.json({ error: "Notice Does Not Exists" });
            });
        }
    } catch (error) {
        return res.json({ error: "Some Internal Error Occured", mError: error });
    }
});
const deleteNotice = (async (req, res) => {
    try {
        const _id = req.params._id;
        console.log(_id)
        if (!_id) {
            return res.json({ error: "Id not Gotten Error occured" });
        }
        else {
            await notice.findByIdAndDelete({ _id: _id }).then((result) => {
                if (result == null) {
                    res.json({ message: "Notice Does Not Exist" });
                }
                else {
                    res.json({ message: "Notice Has Been Deleted" });
                }
            }).catch((error) => {
                res.json({ message: "Notice Does Not Exist", mError: error });
            })
        }
    } catch (error) {
        return res.json({ error: "Some Internal Error Occured", mError: error });
    }
});

// Query Controller
const getAllQuery = (async (req, res) => {
    try {
        const allQuery = await enquiry.find();
        if (allQuery) {
            res.json(allQuery);
        } else {
            res.json({ error: "Query Not Exist" });
        }
    } catch (error) {
        res.json({ error: "Some Internal Error Occured", mError: error });
    }
});
const updateIQueryStatus = (async (req, res) => {
    try {
        const _id = req.body;
        if (!_id) {
            return res.json({ error: "Query Id not Found" });
        } else {
            const query = await enquiry.findByIdAndUpdate(_id, { $set: { iSolveStatus: true } }, { new: true });
                    return res.json(query.iSolveStatus);
        }
    } catch (error) {
        console.log(error)
        return res.json({ error: "Some Internal Error Occured", mError: error });
    }
})

module.exports = {
    // Admin Controller
    addAdmin,
    loginAdmin,
    // Student Controller
    studentList,
    // Notice Controller
    pushNotice,
    getAllNotice,
    updateNotice,
    deleteNotice,
    // Query Controller
    getAllQuery,
    updateIQueryStatus

}
