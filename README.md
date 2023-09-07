# Action to send email AWS SES without SMTP credentials

Send Email via AWS SES directly from your GitHub workflows.

![Action Icon](https://github.com/dsfx3d/action-aws-ses/raw/main/icon.png)

## Prerequisites

- AWS Account
- Verified email or domain in AWS SES
- AWS IAM user with `SES:SendEmail` permissions

## Environment Variables

The following environment variables are required:

| Name                  | Description                           |
|-----------------------|---------------------------------------|
| `AWS_ACCESS_KEY_ID`     | AWS Access Key ID                    |
| `AWS_SECRET_ACCESS_KEY` | AWS Secret Access Key                |
| `AWS_DEFAULT_REGION`    | AWS Region                           |

## Inputs

| Name          | Description                           | Required | Multiple Values Allowed |
|---------------|---------------------------------------|----------|------------------------|
| `bcc`         | Email address of the BCC recipient    | No       | Yes                    |
| `body`        | Body of the email                     | No       | No                     |
| `body_html`   | Body of the email in HTML format      | No       | No                     |
| `cc`          | Email address of the CC recipient     | No       | Yes                    |
| `from`        | Email address of the sender           | Yes      | No                     |
| `reply_to`    | Email address to reply to             | No       | Yes                    |
| `subject`     | Subject of the email                  | Yes      | No                     |
| `to`          | Email address of the recipient        | Yes      | Yes                    |

## Example Usage

Here is a simple example that demonstrates how to use this action:

```yaml
name: Send Email via AWS SES

on:
  push:
    branches:
      - main

env:
  AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
  AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
  AWS_DEFAULT_REGION: 'ap-south-1'

jobs:
  send-email:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Send email using AWS SES
      uses: dsfx3d/action-aws-ses@v1
      with:
        to: 'recipient1@example.com,recipient2@example.com'
        from: 'sender@example.com'
        subject: 'GitHub Action Test'
        body: 'This is a test email sent from a GitHub Action.'
        cc: 'cc1@example.com,cc2@example.com'
        bcc: 'bcc1@example.com,bcc2@example.com'
        reply_to: 'reply1@example.com,reply2@example.com'
        body_html: '<h1>This is a test email</h1>'
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
