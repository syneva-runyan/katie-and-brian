const AWS = require('aws-sdk');
const querystring = require('querystring');

// Set this to the region you upload the Lambda function to.
AWS.config.region = 'us-esat-1';

exports.handler = function(evt, context, callback) {
    // Our raw request body will be in evt.body.
    const params = querystring.parse(evt.body);

    // Our field from the request.
    const my_field = params['my-field'];

    // Generate HTML.
    const html = `<!DOCTYPE html><p>You said: ` + my_field + `</p>`;

    // Return HTML as the result.
    callback(null, html);
};var AWS = require('aws-sdk');

exports.handler = async (event, context, call) => {
    event = event.queryStringParameters;
    let S3 = new AWS.S3({ region: process.env.AWS_REGION });
    
    var payload = {
        ...event
    }

   var params = {
         Bucket: 'katie-and-brians-wedding',
         Key: event.guestName+'.txt',
         Body: JSON.stringify(payload),
         ContentType: 'text/plain',
    };
     
    try {
        let s3Response = await S3.upload(params).promise();

        let res = {
            'statusCode': 200,
            'headers': { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
            'body': JSON.stringify({
                "guestName": event.guestName,
                "path": event.path,
                "s3Path":s3Response.Location,
            })
        }
        
        return res; 

    } catch (error){
        
        let fail = {
            'statusCode': 200,
            'headers': { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
            'body': JSON.stringify({
                "error":error
            })
        }

        return fail;
    }
};