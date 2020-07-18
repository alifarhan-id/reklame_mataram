const pool = require('./config')

const getMasterdata = (request, response) => {
    pool.query('SELECT * FROM masterdata ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
   getMasterdata

  }