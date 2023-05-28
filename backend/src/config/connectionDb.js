// server host name
const HOST = "localhost";

// remote database name
const DATABASE = "Mydatabase";
// database credentials;
const USERNAME = "rajdeepsinghsethi215";
const PASSWORD = "Rajdeep12";

// default app port
const PORT = process.env.PORT || 3333;

// default connection url
const DEFAULT_CONNECTION_STRING = "mongodb://localhost:27017";

// mongoose options for connection
const MONGOOSE_OPTIONS = {
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

module.exports = {
  HOST,
  PORT,
  DATABASE,
  USERNAME,
  PASSWORD,
  DEFAULT_CONNECTION_STRING,
  MONGOOSE_OPTIONS,
};
