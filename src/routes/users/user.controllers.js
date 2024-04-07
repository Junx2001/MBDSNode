const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoo = require("mongoose");

const User = require("./user.model");

const formatter = require("../../services/json-formatter-service");
const userService = require("../../services/user-service");

global.XMLHttpRequest = require("xhr2"); // must be used to avoid bug

const userRegister = async (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(async (user) => {
      if (user.length >= 1) {
        return res
          .status(409)
          .json(
            formatter.formatJsonRespoonse(
              false,
              "Email Already Exists",
              409,
              {}
            )
          );
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res
              .status(500)
              .json(formatter.formatJsonRespoonse(false, err, 500, {}));
          } else {
            const user = new User({
              _id: new mongoo.Types.ObjectId(),
              email: req.body.email,
              password: hash,
              name: req.body.name,
              role: req.body.role,
              active: req.body.active,
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

                    // Check if a file has been uploaded and upload user profile image
                    if (req.file) {
                      try {
                        await userService.uploadUserImage(req, res, result);
                      } catch (err) {
                        console.log(err);

                        res
                          .status(400)
                          .json(
                            formatter.formatJsonRespoonse(
                              false,
                              err.toString(),
                              400,
                              {}
                            )
                          );
                      }
                    }
                    res.status(201).json(
                      formatter.formatJsonRespoonse(
                        true,
                        "User has been successfully created",
                        201,
                        {
                          userDetails: {
                            userId: result._id,
                            email: result.email,
                            name: result.name,
                            role: result.role,
                            active: result.active,
                          },
                        }
                      )
                    );
                  })
                  .catch((err) => {
                    console.log(err);
                    res
                      .status(400)
                      .json(
                        formatter.formatJsonRespoonse(
                          false,
                          err.toString(),
                          400,
                          {}
                        )
                      );
                  });
              })
              .catch((err) => {
                console.log(err);
                res
                  .status(500)
                  .json(
                    formatter.formatJsonRespoonse(
                      false,
                      err.toString(),
                      500,
                      {}
                    )
                  );
              });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json(formatter.formatJsonRespoonse(false, err.toString(), 500, {}));
    });
};

const userLogin = (req, res, next) => {
  console.log(req.body);
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      console.log(user);
      if (user.length < 1) {
        return res
          .status(401)
          .json(
            formatter.formatJsonRespoonse(
              false,
              "Auth failed: Email not found probably",
              401,
              {}
            )
          );
      }
      if (user[0].active != 1) {
        return res
          .status(401)
          .json(
            formatter.formatJsonRespoonse(
              false,
              "Auth failed: Please contact our support to activate your account",
              401,
              {}
            )
          );
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          console.log(err);

          return res
            .status(401)
            .json(formatter.formatJsonRespoonse(false, "Auth failed", 401, {}));
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

          return res.status(200).json(
            formatter.formatJsonRespoonse(true, "Auth successful", 200, {
              userDetails: {
                userId: user[0]._id,
                name: user[0].name,
                email: user[0].email,
                role: user[0].role,
              },
              token: token,
            })
          );
        }

        res
          .status(401)
          .json(
            formatter.formatJsonRespoonse(
              false,
              "Auth failed, Invalid Credentials (Email / Password)",
              401,
              {}
            )
          );
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json(formatter.formatJsonRespoonse(false, err.toString(), 500, {}));
    });
};

const getProfile = async (req, res) => {
  const userId = req.user.userId;
  const user = await User.findById(userId);
  if (user) {
    res
      .status(200)
      .json(
        formatter.formatJsonRespoonse(true, "User Found", 200, { user: user })
      );
  } else {
    res
      .status(404)
      .json(formatter.formatJsonRespoonse(false, "User Not Found", 404, {}));
  }
};

// Add Image to Storage and return the file path
const uploadProfileImage = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });
    await userService.uploadUserImage(req, res, user);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.toString(),
    });
  }
};

module.exports = {
  userRegister,
  userLogin,
  getProfile,
  uploadProfileImage,
};
