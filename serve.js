const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (request, response) {
      console.log('Home page visited!');
      const filePath = path.resolve(__dirname, './build', 'index.html');
      fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                  return console.log(err);
            }
            data = data.replace(/\$OG_TITLE/g, 'React JS | Home');
            data = data.replace(/\$OG_DESCRIPTION/g, "Web site created using create-react-app");
            response.send(data);
      });
});

app.get('/login', function (request, response) {
      console.log('Home page visited!');
      const filePath = path.resolve(__dirname, './build', 'index.html');
      fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                  return console.log(err);
            }
            data = data.replace(/\$OG_TITLE/g, 'React JS | Login');
            data = data.replace(/\$OG_DESCRIPTION/g, "Web site created using create-react-app");
            response.send(data);
      });
});

app.get('/register', function (request, response) {
      console.log('Home page visited!');
      const filePath = path.resolve(__dirname, './build', 'index.html');
      fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                  return console.log(err);
            }
            data = data.replace(/\$OG_TITLE/g, 'React JS | Register');
            data = data.replace(/\$OG_DESCRIPTION/g, "Web site created using create-react-app");
            response.send(data);
      });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function (request, response) {
      const filePath = path.resolve(__dirname, './build', 'index.html');
      response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));