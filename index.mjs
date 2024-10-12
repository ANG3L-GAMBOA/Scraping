import { chromium } from "playwright"

const browser = await chromium.launch(
    { headless:true }
)

const page = await browser.newPage()

await page.goto(
    'https://www.amazon.com/-/es/PlayStation%C2%AE5-console-slim-PlayStation-5/dp/B0CL61F39H/ref=sr_1_1?sr=8-1'
)

const product = await page.evaluate(() => {
    const title = document.getElementById('productTitle')?.innerText.trim(); // Título
    const image = document.getElementById('landingImage')?.src; // Imagen
    const price = document.querySelector('.a-price .a-offscreen')?.innerText; // Precio
    const link = window.location.href; // Enlace del producto

    return { title, image, price, link }; // Devuelve un objeto con los atributos deseados
  });


console.log(product)
await browser.close()