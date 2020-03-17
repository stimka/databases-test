import { createConnection } from "typeorm";
import config from 'config';

createConnection({
	...config.db,
	type: "postgres",
}).then((res) => {
	process.exit(0);
}).catch((err) => {
	console.log(err);
	process.exit(1);
});