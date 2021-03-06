const host = function() {
  return process.env.HOST;
}

const username = function() {
  return process.env.DATABASE_USER;
}

const password = function() {
  return process.env.DATABASE_PASSWORD;
}

const db_name = function() {
  return process.env.DATABASE_NAME;
}

const config = {
  type: "postgres",
  host: host(),
  port: 5432,
  username: username(),
  password: password(),
  database: db_name(),
  entities: [  __dirname + "/dist/entities/*.entity{.ts,.js}" ],
  migrations: [  __dirname + "/dist/migrations/*{.ts,.js}"],
  synchronize: false,
  migrationsRun: false,
  cli: {
    migrationsDir: "src/migrations",
  },
};

module.exports = config;
