/**
 * form theke data server e post : server e post route
 * client e route onujayi fetch
 * form e submit kore nodemon e dekhbo data pain kina, 
 * pele route e insert okkre dibo
 * post kore mongodb te pathiye dilam
 * ekhon get korbo, mane read korbo : check korte localhost e jabo: http://localhost:5000/allJobs
 * data pailam ,ekhon data dekhabo useeffect e fetch use kore.
 * console.log(req.params.text); nodemon
 * how to inser timestamp createAt:1 mongodb: https://stackoverflow.com/questions/61060890/how-to-put-createdat-timestamp-manually-in-mongodb
 * .sort({createdAt:1})-->accending .sort({createdAt:-1})-->desc .limit o kora jay
 * myjob: indexing:
    const indexKeys = { title: 1, category: 1 }; // Replace field1 and field2 with your actual field names
    const indexOptions = { name: "titleCategory" }; // Replace index_name with the desired index name
    const result = await jobsCollection.createIndex(indexKeys, indexOptions);
    console.log(result);
 * $options: "i" i means case sensitive na
 * 
 * */ 