const pool = require("../db");

const createUser = async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO users (uid, displayName, username, email, password) VALUES ($1,$2,$3, $4, $5) RETURNING *",
      [req.body.uid, req.body.displayName, req.body.username, req.body.email, req.body.password]
    ).then(resp => {
      console.log(resp); 
      return res.status(200).json(resp.rows[0]);
    }).catch(err => {
      console.error(err.message);
    }); 
  } catch (error) {
    console.error(error.message);
    return res.status(502).send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    return res.status(200).json(users.rows);
  } catch (error) {
    console.error(error.message);
    return res.status(502).send(error.message);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM users WHERE uid=$1", [
      req.params.uid,
    ]);
    console.log(user);
    return res.status(200).json(user.rows[0]);
  } catch (error) {
    console.error(error.message);
    return res.status(502).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedTodo = await pool.query(
      "UPDATE users SET displayName=$1, username=$2, password=$3 WHERE uid=$4",
      [
        req.body.displayName,
        req.body.username,
        req.body.password,
        req.params.uid,
      ]
    );
    return res.status(200).send(updatedTodo);
  } catch (error) {
    console.error(error.message);
    return res.status(502).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM users WHERE username=$1 RETURNING *", [req.params.uid]);
    console.log(result.fields); 
    return res.status(201).send({"status": result})
  } catch (error) {
    console.error(error.message);
    return res.status(502).send(error.message);
  }
};

const loginUser = async(req,res) => {
    const { email, password } = req.body; 
    const user = (await pool.query("SELECT * FROM users WHERE email=$1", [email])).rows[0]
    if(!user) {
      return res.status(502).send({err: "User not found with specified email"})
    } else {
      if(user.password === password) {
        return res.status(201).send(user); 
      } else {
        return res.status(502).send({err: "Incorrect password, please try again"})
      }
    }
}
module.exports = { createUser, getAllUsers, getSingleUser, updateUser, deleteUser, loginUser};
