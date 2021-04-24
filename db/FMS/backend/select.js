
module.exports = {
  connectToDb: function (){
        let data = [];
        const sqlite3 = require('sqlite3').verbose();
        // open the database
        let db = new sqlite3.Database('./sqllite/fms.db', sqlite3.OPEN_READWRITE, (err) => {
          if (err) {
            console.error(err.message);
          }
          console.log('Connected to the FMS database.');
        });
        
        db.serialize(() => {
          db.each(`SELECT file_id as file_id, file_name as file_name, uploader as uploader, email as email, details as details FROM filedetails`, (err, row) => {
            if (err) {     console.error(err.message);
            }
            // console.log(row.file_id + "\t" + row.file_name + row.uploader + row.email + row.details);
            data.push[{ file_id: row.file_id, file_name: row.file_name, uploader: row.uploader, email: row.email, details: row.details}];
          });
        });
        
        db.close((err) => {
          if (err) { console.error(err.message);
          }
          console.log('Close the database connection.');
        });

        return data;
      },


      getMaxFileId: function(){
        let data;
        const sqlite3 = require('sqlite3').verbose();
        // open the database
        let db = new sqlite3.Database('./sqllite/fms.db', sqlite3.OPEN_READWRITE, (err) => {
          if (err) {
            console.error(err.message);
          }
          console.log('Connected to the FMS database.');
        });
        
        db.serialize(() => {
          db.each(`SELECT max(file_id) as max_file_id FROM filedetails`, (err, row) => {
            if (err) {     console.error(err.message);
            }
            // console.log(row.max_file_id );
            data = row.max_file_id;
          });
        });
        
        db.close((err) => {
          if (err) { console.error(err.message);
          }
          console.log('Close the database connection.');
        });

        return data;
      },
    
      insertToFiledetails: function(){
        // const sqlite3 = require('sqlite3').verbose();
        // // open the database
        // let db = new sqlite3.Database('./sqllite/fms.db', sqlite3.OPEN_READWRITE, (err) => {
        //   if (err) {
        //     console.error(err.message);
        //   }
        //   console.log('Connected to the FMS database.');
        // });
        
        // let max_file_id = module.exports.getMaxFileId();
        // setTimeout(()=>{
        //   console.log('max_file_id', max_file_id)
        // }, 2000) ;
      
      }


}

