import { connectToDatabase } from "../../../lib/mongodb";
const nodemailer = require("nodemailer");
import bcrypt from "bcrypt";

export default async function generatePage(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    const { email } = req.body; // Assuming you pass the email hash in the request body
    console.log(email, 93);

    const allEmail = await db.collection("newsletter").find({}).toArray();
    // console.log(allEmail, "allemail");

    allEmail.map((emailAll) => {
      return emailAll.email.map(async (emailNew) => {
        const saltRounds = 10;
        const emailCompare = await bcrypt.hash(emailNew, saltRounds);

        const compare = await bcrypt.compare(emailNew, email);

        if (compare) {
          //   console.log(emailCompare, email, "compare");
          try {
            const result = await db.collection("newsletter").updateOne(
              {},
              {
                $pull: {
                  email: emailNew,
                },
              }
            );
            if (result.deletedCount === 1) {
              res.status(200).json({ message: "User deleted successfully" });
            } else {
              res.status(404).json({ message: "User not found" });
            }
          } catch (error) {
            console.log(error);
          }
        }
      });

      // await bcrypt.compare(email, emailAll
    });
    res.status(200).json("hiii");
  }
}
