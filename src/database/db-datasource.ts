import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  database: 'test',
  entities: ['dist/**/*.entity.{js, ts}'],
  migrations: ['dist/database/migrations/*.js'],
  migrationsTableName: 'test_migration',
});

export default dataSource;
