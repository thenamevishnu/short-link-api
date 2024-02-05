
# SHORT URL API

Create a short link from a long url


## API Reference

#### Create Short Link

```http
  POST /short-link
```

|   Body    | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `link` | `string` | **Required**. Long url |

## Response

```JSON
{ 
    short_link: https://example.in/r/ICfoqnoDtz 
}
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/thenamevishnu/short-link-api.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT = {YOUR PORT}`

`MONGODB_URL = mongodb://127.0.0.1:27017/dbName`

`MONGODB_DB_NAME = dbName`

`SERVER_URL = http://localhost:{YOUR PORT}`


## Authors

- [@thenamevishnu](https://www.github.com/thenamevishnu)

