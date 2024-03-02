import { registerAs } from '@nestjs/config';

export default registerAs('database.mysql', () => ({
  type: 'mysql',
  mysqlHost: process.env.MYSQL_HOST,
  mysqlPort: process.env.MYSQL_PORT,
  mysqlUserName: process.env.MYSQL_USERNAME,
  mysqlPassword: process.env.MYSQL_PASSWORD,
  mysqlDbName: process.env.MYSQL_DB_NAME,
  entities: ['dist/**/*.entity.{js, ts}'],
  migrations: ['dist/database/migrations'],
}));
