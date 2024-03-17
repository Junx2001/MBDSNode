const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoo = require("mongoose");

const User = require("./user.model");

const userRegister = async (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(async (user) => {
      if (user.length >= 1) {
        res.status(409).json({
          message: "Email Exists",
        });
      } else {
       
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoo.Types.ObjectId(),
              email: req.body.email,
              password: hash,
              name: req.body.name,
            });
            user
              .save()
              .then(async (result) => {
                await result
                  .save()
                  .then(async (result1) => {
                    // await mail.sendConfirmationEmail(result.email, result._id).then((res) =>{ console.log(res)}).catch((err)=>{console.log(err)});

                    console.log(
                      `User has been successfully created ${result} `
                    );

                    res.status(201).json({
                      status : "success",
                      message: "User has been successfully created",
                      userDetails: {
                        userId: result._id,
                        email: result.email,
                        name: result.name,
                        role: result.role,
                        active: result.active,
                      },
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                    res.status(400).json({
                      status : "error",
                      message: err.toString(),
                    });
                  });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  status : "error",
                  message: err.toString(),
                });
              });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status : "error",
        message: err.toString(),
      });
    });
};

const userLogin = (req, res, next) => {
  console.log(req.body);
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      console.log(user);
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed: Email not found probably",
        });
      }
      if (user[0].active != 1) {
        return res.status(401).json({
          message: "Auth failed: Please Verify your email",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              userId: user[0]._id,
              email: user[0].email,
              name: user[0].name,
              role: user[0].role,
            },
            process.env.jwtSecret,
            {}
          );
          console.log(user[0]);
          return res.status(200).json({
            message: "Auth successful",
            userDetails: {
              userId: user[0]._id,
              name: user[0].name,
              email: user[0].email,
              role: user[0].role,
            },
            token: token,
          });
        }
        res.status(401).json({
          message: "Auth failed1",
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

const getProfile = async (req, res) => {
  const userId = req.user.userId;
  const user = await User.findById(userId);
  if (user) {
    res.status(200).json({
      message: "Found",
      user,
    });
  } else {
    res.status(400).json({
      message: "Bad request",
    });
  }
};

module.exports = {
  userRegister,
  userLogin,
  getProfile,
};
