let nodemailer = require('nodemailer');
const { text } = require('body-parser');

class checkoutdetails {
    checkout = async(name, mailId, phnNo, list) => {

        return new Promise((resolve, reject) => {

            let checkoutObj = {
                name: name,
                mailId: mailId,
                phoneNo: phnNo,
            }
            list = JSON.parse(list);

            let htmlData = "Name : " + checkoutObj.name + "<br>Phone No : " + checkoutObj.phoneNo + "<br>MailId : " + checkoutObj.mailId + '<br><table style="   border-collapse: collapse;text-align:center;"><tr><th style=" border: 1px solid black;">ProductName</th><th style=" border: 1px solid black;">Capacity</th><th style="border: 1px solid black;">Quantity</th></tr>';

            for (var i = 0; i < list.length; i++) {

                htmlData += "<tr style=' border: 1px solid black;'><td style=' border: 1px solid black;'>" + list[i].id + "</td><td style=' border: 1px solid black;'>" + list[i].capacity + "</td><td style=' border: 1px solid black;'>" + list[i].quantity + "</td></tr>";
                if (i == list.length - 1) {
                    htmlData += "</table>"
                }
            }

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "ldragotechs@gmail.com",
                    pass: "Ldragotechs@7"
                }
            });
            let mailOptions1 = {
                from: "ldragotechs@gmail.com",
                to: mailId + ",puttachakradharreddy@gmail.com",
                subject: "RANDAM AGRO CHEMICALS ORDERED SUCCESSFULLY",
                html: htmlData
            }

            transporter.sendMail(mailOptions1, function(error, info) {
                if (error) {
                    console.log(error);

                    return reject({ message: "Error while sending mail", error: "FAILURE" });
                } else {
                    console.log("services Success checkout");
                    return resolve({ message: "Mail send Successfully", data: "SUCCESS" });

                }
            });
        });
    }
}
let checkout = new checkoutdetails();

module.exports = checkout;