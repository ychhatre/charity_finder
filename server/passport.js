const pool = require("./db");
const localStrategy = require("passport-local").Strategy;

const passportValidate = (passport) => {
  passport.use(
    new localStrategy({ usernameField: "email" }, (email, password, done) => {
      //Find user
      pool
        .query("SELECT * FROM users WHERE email=$1", [email])
        .then((res) => {
          const user = res.rows[0];
          //Check if user even exists
          if (!user) {
            return done(null, false, {
              message: "User with that email does not exist",
            });
          } else {
            //Check if users password matches
            if (user.password === password) {
              return done(null, user, { message: "Success user retrieved" });
            } else {
              return done(null, false, {
                message: "Incorrect password, please try again",
              });
            }
          }
        })
        .catch((err) => console.error(err.message));
    })
  );
};

module.exports = passportValidate; 
