export async function scrapeAmazonProduct(url:string) {
    if(!url) return

    // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_2ee37a7a-zone-savvy:h3a8mrfhf1t4 -k "https://geo.brdtest.com/mygeo.json"
    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 22225
    const session_id = (1000000 + Math.random() | 0)

    const options = {
        auth :{
            username : `${username}-session-${session_id}`,
            password
        },
        host : 'brd.superproxy.io',
        port,
        rejectUnauthorized : false
    }

    try {
        
    } catch (error :any) {
        throw new Error(`An error occured while trying to scrape the product :${error.message}`)
    }
}