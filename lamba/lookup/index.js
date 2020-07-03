const {google} = require('googleapis');
var stringSimilarity = require('string-similarity');

const credentials = {}


exports.handler = async (event = {}, context, callback = console.log) => {
  let guest = null;
  if (event.queryStringParameters && event.queryStringParameters.guest) {
    console.log("Received name: " + event.queryStringParameters.guest);
    guest = event.queryStringParameters.guest;
  } 

  if (event.headers && event.headers['guest']) {
    console.log("Received guest: " + event.headers.guest);
    guest = event.headers.guest;
  }

  if (event.body) {
    let body = JSON.parse(event.body)
    if (body.guest) {
      guest = body.guest;
    }
  }

  if (event.guest) {
    guest = event.guest
  }

if(guest == null){
  callback(null, {
    statusCode: 404,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: "please provide guest info",
      input: event
    })
  });
  return;
}
  // Load client secrets from a local file.
  const guestData = await new Promise(function (resolve, reject) {
      listGuests(credentials, guest, resolve, reject);
  });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ guestData }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000/rsvp'
    },
  });
  return;
}

function cleanContact(contact = "") {
  contact = contact.toLowerCase();
  contact = contact.replace("&", "");
  contact = contact.replace("and", "");
  return contact;
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function listGuests(content, addressee, resolve, reject) {
  addressee = cleanContact(addressee);
  const sheets = google.sheets({version: 'v4'});
  sheets.spreadsheets.values.get({
    spreadsheetId: content.spreadsheetId,
    range: "'Guest List'!A1:J123",
    key: content.apiKey
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      // Print columns A and E, which correspond to indices 0 and 4.
      const guests = rows.map((row) => {
         return cleanContact(row[2]);
      });

      const mostSimlular = stringSimilarity.findBestMatch(addressee, guests);
      if (mostSimlular.bestMatch.rating > 0.5) {
        resolve({
            rowColumns:rows[0],
            match: rows[mostSimlular.bestMatchIndex]
        });
      } else {
        resolve({
            rowColumns:rows[0],
            suggestion: rows[mostSimlular.bestMatchIndex]
        });
      }
    } else {
      reject({ error: 'no spreadsheet data' })
    }
  });
}