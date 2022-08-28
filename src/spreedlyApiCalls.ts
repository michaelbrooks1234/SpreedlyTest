import fetch from "cross-fetch";

// Functions containing api calss from the SpreedlyAPI

export async function addGateWay(accessKey: string, environmentKey: string){
    const response: Response = await fetch("https://core.spreedly.com/v1/gateways.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "Authorization": "Basic " + Buffer.from(environmentKey + ":" + accessKey).toString('base64')
        },
        body: JSON.stringify({
            "gateway": {
                "gateway_type": "test"
            }
        })
    })

    console.log(await response.text());

}