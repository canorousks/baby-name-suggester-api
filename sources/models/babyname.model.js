import sql from './db.js';
import BabyName from '../schema/babyname.js';

const babyNameModel = {
    find: (queryData, result) => {
     
        let conditions = []

        if(queryData.gender) conditions.push(`and gender = "${queryData.gender}"`);
        if(queryData.pythagorean) conditions.push(`and pythagorean = "${queryData.pythagorean}"`);   
        if(queryData.chaldean) conditions.push(`and chaldean = "${queryData.chaldean}"`);

        let query = `select * from new_names where category = "${queryData.category}"  \ 
        and first_letter = "${queryData.first_letter}"`;

        conditions.forEach(c => query += c);

        sql.all(query, (err, data) => {
            if (err) {
                console.log("there is a query in sql query")
                console.log(err)
            } else {
                result(null, data)
            }
        })
       
    },
};

export default babyNameModel;