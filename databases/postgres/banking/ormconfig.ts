import { ConnectionOptions } from 'typeorm';
import * as appConfig from 'config';

const config: ConnectionOptions = {
	type: 'postgres',
	host: appConfig.db.host,
	port: appConfig.db.port,
	username: appConfig.db.username,
	password: appConfig.db.password,
	database: appConfig.db.database,
	cli: {
		migrationsDir: 'migrations',
	},
	migrations: ['migrations/*.ts'],
};

export = config;
