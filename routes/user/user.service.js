const { v4 } = require("uuid");
const pool = require("../../config/dbConfig");

module.exports={
    insertUser: async (userInfo) => {
        try {
            const {
                user_nm,
                user_desc,
                user_login_id,
                user_login_pw
            } = userInfo;
            const conn = await pool.getConnection();
            const query = "insert into t_user(user_id, user_nm, user_desc, user_login_id, user_login_pw, created_at, modified_at) values (?,?,?,?,?,UNIX_TIMESTAMP(),UNIX_TIMESTAMP());";
            const [{affectRows:result}] = await conn.query(query, [v4(),user_nm,user_desc,user_login_id,user_login_pw]);
            conn.release();
            return result;
           } catch (error) {
             // res.status(500).json({status:500, message:"error"})
             throw error;
           }

    },
    getUserList: async () => {
        try {
           const conn = await pool.getConnection();
           const query = "select * from t_user;"
           const [result] = await conn.query(query);
           conn.release();
           return result;
          } catch (error) {
            // res.status(500).json({status:500, message:"error"})
            throw error;
          }
     
    },
    updateUser: (userInfo) => {

    },
    deleteUser: (userInfo) => {

    }
}