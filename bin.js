import {SESClient, SendEmailCommand} from "@aws-sdk/client-ses";
import {getInput, setFailed} from "@actions/core";

try {
  const bcc = getInput("bcc", {required: false});
  const body = getInput("body", {required: false});
  const bodyHtml = getInput("body_html", {required: false});
  const cc = getInput("cc", {required: false});
  const from = getInput("from", {required: true});
  const replyTo = getInput("reply_to", {required: false});
  const subject = getInput("subject", {required: true});
  const to = getInput("to", {required: true});

  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: to.split(","),
      CcAddresses: cc ? cc.split(",") : undefined,
      BccAddresses: bcc ? bcc.split(",") : undefined,
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: "utf8",
      },
      Body: {
        Text: {
          Data: body,
          Charset: "utf8",
        },
        Html: {
          Data: bodyHtml,
          Charset: "utf8",
        },
      },
    },
    Source: from,
    ReplyToAddresses: replyTo ? replyTo.split(",") : undefined,
  });

  new SESClient({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: process.env.AWS_DEFAULT_REGION,
  }).send(command);
} catch (error) {
  console.log(error);
  setFailed(error);
}
