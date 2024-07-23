import axios from "axios"
import * as cheerio from "cheerio"
import { extractCurrency, extractPrice } from "../utils"

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
        const response =await axios.get(url, options)
        const $ = cheerio.load(response.data)

        const title = $('#productTitle').text().trim()
        const currentPrice = extractPrice(
            $('.priceToPay span.a-price-whole'),
            $('.a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base'),
        );
      
        const originalPrice = extractPrice(
            $('#priceblock_ourprice'),
            $('.a-price.a-text-price span.a-offscreen'),
            $('#listPrice'),
            $('#priceblock_dealprice'),
            $('.a-size-base.a-color-price')
        );
      
        const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';
        const images = 
                      $('#imgBlkFront').attr('data-a-dynamic-image') || 
                      $('#landingImage').attr('data-a-dynamic-image') ||$('img').attr('src') || $('#landingImage').attr('src') ||
                      '{}'
        const imageUrls = Object.keys(JSON.parse(images))
        const currency = extractCurrency($('.a-price-symbol'), $('.a-price-symbol', '#priceblock_ourprice'));
        console.log({title, currentPrice, originalPrice, outOfStock, imageUrls ,currency})
    } catch (error :any) {
        throw new Error(`Failed to scrape the product :${error.message}`)
    }
}