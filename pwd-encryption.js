const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

rl.question("Enter you Password to Encryption: ",(ans) => {
  const hash = crypto.createHmac("Sha256", "rhrhej").update(ans). digest("hex");
  console.log("You Password's Hash is " + hash);
  console.log(" ");
  console.log("Github: codersarathi & Instagram: developersarathi");
}) 

//developed by codersarathi//

