const fs = require('fs')

const key = process.env.TEST_API_KEY;
fs.writeFile('test_api_key.txt', key, () => {});
