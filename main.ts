import 'dotenv/config';
import { addGateWay } from "./src/spreedlyApiCalls";

async function main(){
    const accessKey: any = process.env.ACCESS_KEY;
    const environmentKey: any = process.env.ENVIRONMENT_KEY;

    await addGateWay(accessKey, environmentKey);
}

main();