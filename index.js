import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
// var qr = require('qr-image');

inquirer
  .prompt([
    /* Pass your questions in here */
    {"message":"Type the URL: ","name":"URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
 
    fs.writeFile("URL.txt",url, (err) => {
    if (err) throw err;
    console.log("The file has been saved");
});
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });