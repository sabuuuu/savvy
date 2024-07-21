"use server"

import {scrapeAmazonProduct} from "../scraper"
export async function scarpeAndStoreProduct(productUrl: string){
    if(!productUrl) return

    try {
        const scrapedProduct= await scrapeAmazonProduct(productUrl)
    } catch (error :any) {
        throw new Error(`An error occured while trying to scrape the product :${error.message}`)
    }
}