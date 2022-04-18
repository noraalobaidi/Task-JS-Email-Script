<<<<<<< HEAD
// // Your code goes here
//create connection with sendgrid
const API_KEY = "";
const sgmail = require("@sendgrid/mail");
sgmail.setApiKey(API_KEY);

// get today's date
let d = new Date();
let y = d.getFullYear();
let m = d.getMonth() + 1;
let day = d.getDate();
let todaysDate = `${day}/${m}/${y}`;

//getting data from names.xlsx
const excelToJson = require("convert-excel-to-json");
const result = excelToJson({
  sourceFile: "names.xlsx",
  columnToKey: {
    A: "name",
    B: "email",
    C: "course",
    D: "grade",
  },
});
let values = Object.values(result)[0]; // array of objects

//send customized for each row in the excel file
for (let i = 0; i < values.length; i++) {
  let data = Object.values(values[i]);
  //   send email here

  //customize the certificate
  let htmlTemplate = `
<html>
  <body >
      <div class="container" style="border:solid 10px rgb(0, 5, 105);width:950px;height: 530px;display:block;">
        <h1 style="font-size:70px;margin-bottom:10px;margin-left: 240px;margin-top:100px">CERTIFICATE</h1>
        <h3 style="font-size:30px;margin-top:10px;margin-left: 350px;">OF COMPLETION</h3>
        <h4 id="date"style="margin-left: 450px;">${todaysDate}</h4>
        <h1 style="margin-left: 390px;">${data[0]}</h1>
        <div style="margin-left: 230px;width:500px;margin-bottom: 0px;border-top: 1px solid black;"></div>
        <h4 style="margin-left: 350px;">successfully completed ${data[2]} course </h4>
        <h4 style="margin-left: 395px;">with garde : ${data[3]}</h4>

      </div>
  </body>
</html>
  `;

  const msg = {
    to: `${data[1]}`,
    from: "nalobaidi_@hotmail.com",
    subject: `${data[2]} certificate`,
    content: [{ type: "text/html", value: htmlTemplate }],
  };
  //send the email and console log that the email is sent successfully
  sgmail
    .send(msg)
    .then((respose) =>
      console.log(`email was sent successfully to ${data[1]}`)
    );
}
=======
// // Your code goes here
//create connection with sendgrid
const API_KEY = "";
const sgmail = require("@sendgrid/mail");
sgmail.setApiKey(API_KEY);

// get today's date
let d = new Date();
let y = d.getFullYear();
let m = d.getMonth() + 1;
let day = d.getDate();
let todaysDate = `${day}/${m}/${y}`;

//getting data from names.xlsx
const excelToJson = require("convert-excel-to-json");
const result = excelToJson({
  sourceFile: "names.xlsx",
  columnToKey: {
    A: "name",
    B: "email",
    C: "course",
    D: "grade",
  },
});
let values = Object.values(result)[0]; // array of objects

//send customized for each row in the excel file
for (let i = 0; i < values.length; i++) {
  let data = Object.values(values[i]);
  //   send email here

  //customize the certificate
  let htmlTemplate = `
<html>
  <body >
      <div class="container" style="border:solid 10px rgb(0, 5, 105);width:950px;height: 530px;display:block;">
        <h1 style="font-size:70px;margin-bottom:10px;margin-left: 240px;margin-top:100px">CERTIFICATE</h1>
        <h3 style="font-size:30px;margin-top:10px;margin-left: 350px;">OF COMPLETION</h3>
        <h4 id="date"style="margin-left: 450px;">${todaysDate}</h4>
        <h1 style="margin-left: 390px;">${data[0]}</h1>
        <div style="margin-left: 230px;width:500px;margin-bottom: 0px;border-top: 1px solid black;"></div>
        <h4 style="margin-left: 350px;">successfully completed ${data[2]} course </h4>
        <h4 style="margin-left: 395px;">with garde : ${data[3]}</h4>

      </div>
  </body>
</html>
  `;

  const msg = {
    to: `${data[1]}`,
    from: "nalobaidi_@hotmail.com",
    subject: `${data[2]} certificate`,
    content: [{ type: "text/html", value: htmlTemplate }],
  };
  //send the email and console log that the email is sent successfully
  sgmail
    .send(msg)
    .then((respose) =>
      console.log(`email was sent successfully to ${data[1]}`)
    );
}
>>>>>>> 37d56a9779b5a9655f389cb28ab38f0907eded5a
