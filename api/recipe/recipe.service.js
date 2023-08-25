const pool = require("../../config/database");
var moment = require('moment');

module.exports = {
    create: (data, callBack) => {
      pool.query(
        'insert into recipe(user_id,image,added_datetime) values(?,?,?)',
        [
          data.user_id,
          data.image,
          moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
        ],
        (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    getAll:(id,callBack) => {
        pool.query(
            'select *  from recipe  where user_id = ?',
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}