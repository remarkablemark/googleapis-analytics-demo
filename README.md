# googleapis-analytics-demo

Demo of the [Google Analytics API](https://www.npmjs.com/package/@googleapis/analytics).

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablemark/googleapis-analytics-demo.git
cd googleapis-analytics-demo
```

Install the dependencies:

```sh
npm install
```

## Authentication

Login to [Google Cloud Platform](https://console.cloud.google.com/). Agree to the **Terms of Service** if you haven't already.

Create a [New Project](https://console.cloud.google.com/projectcreate) with a **Project name** and **Project ID**.

Enable the [Google Analytics API](https://console.cloud.google.com/marketplace/product/google/analytics.googleapis.com).

Go to [Credentials](https://console.cloud.google.com/apis/credentials) and create a [Service account](https://console.cloud.google.com/iam-admin/serviceaccounts/create) credential, which enables server-to-server, app-level authentication using robot accounts. Fill in the **Service account name** and **Service account ID** and click **Done**.

In [Credentials](https://console.cloud.google.com/apis/credentials), look for **Service Accounts** and click the newly created **Email**. Click **Keys** > **Add Key** > **Create new key** > **Key type** > **JSON** > **Create**. The private key, which allows access to your cloud resources, will be saved to your computer.

Move the key to the project directory:

```sh
mv path/to/project-id-abcdef123456.json auth.json
```

Only `private_key` and `client_email` are necessary for JWT authorization. See [`auth.example.json`](auth.example.json):

```json
{
  "private_key": "-----BEGIN PRIVATE KEY-----\nabc123\n-----END PRIVATE KEY-----\n",
  "client_email": "service-account-name@project-id-123456.iam.gserviceaccount.com"
}
```

Alternatively, the keys can be set in `.env`. See [`.env.example`](.env.example):

```sh
CLIENT_EMAIL="service-account-name@project-id-123456.iam.gserviceaccount.com"
PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nabc123\n-----END PRIVATE KEY-----\n"
```

Open [Google Analytics](https://analytics.google.com/analytics/web/) and go to **Admin** > **View Settings** and copy the **View ID**.

Set `VIEW_ID` in `.env`. See `.env.example`:

```sh
echo 'VIEW_ID=12345678' >> .env
```

Go back to **Admin** and go to **View User Management**. In **View permissions**, click **+** to **Add users** and add the service account email `client_email`.

## Run

### `npm start`

Prints the Google Analytics real-time data for a view (profile). See [Real Time Reporting API](https://developers.google.com/analytics/devguides/reporting/realtime/v3/reference).

## License

[MIT](LICENSE)
