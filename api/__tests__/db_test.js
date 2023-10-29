const supertest = require('supertest')
const {createServer} = require('../app')

const getProductPrices = jest.fn()

const app = createServer({
    getProductPrices
})

test('GET /products', async () => {
    getProductPrices.mockResolvedValueOnce([
        {id: 1, name: 'Product 1', price: 100},
        {id: 2, name: 'Product 2', price: 200},
        {id: 3, name: 'Product 3', price: 300},
    ])
    const response = await supertest(app).get('/products')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual([
        {id: 1, name: 'Product 1', price: 100},
        {id: 2, name: 'Product 2', price: 200},
        {id: 3, name: 'Product 3', price: 300},
    ])
    expect(getProductPrices).toHaveBeenCalledTimes(1)
})