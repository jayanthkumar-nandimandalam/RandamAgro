let nodemailer = require('nodemailer');
const { text } = require('body-parser');

class contactform {
    contact = async(name, mailId, phnNo, msg) => {

        return new Promise((resolve, reject) => {

            let contactObj = {
                name: name,
                mailId: mailId,
                phoneNo: phnNo,
                msg: msg
            }

            db.collection("contact_details").insertOne(contactObj, function(err, res) {
                try {
                    if (err) {
                        throw err;
                    }

                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: "ldragotechs@gmail.com",
                            pass: "Ldragotechs@7"
                        }
                    });

                    let mailOptions = {
                        from: "ldragotechs@gmail.com",
                        to: "jayanthnjk13@gmail.com",
                        subject: "RANDAM AGRO CHEMICALS-USER CONTACT FORM",
                        text: "Name : " + name + "\nPhone No : " + phnNo + "\nMailId : " + mailId + "\nMessage : " + msg

                    };


                    transporter.sendMail(mailOptions, function(error, info) {
                        if (error) {
                            console.log(error);
                            return reject({ message: "Error while sending mail", error: "FAILURE" });
                        } else {
                            console.log("services Success");
                            return resolve({ message: "Mail send Successfully", data: "SUCCESS" });
                        }
                    });

                } catch (err) {
                    console.log(err)
                    return reject({ message: "error while sending mail", error: "" });
                }

            });


        });
    }
}
let contact = new contactform();

module.exports = contact;