const AWS = require('aws-sdk');

const s3 = new AWS.S3({ endpoint: 'http://localhost:4572' });

s3.listBuckets()
  .promise()
  .then((res) => {
    console.log("Success", res);
  }).catch((err) => {
    console.error(err);
  });
