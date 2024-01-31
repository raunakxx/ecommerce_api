import('chai').then(chai => {
const chaiHttp = require('chai-http')});
const app = require ("../app")

const Product = require ("../models/Product");

chai.use(chaiHttp);
const expect = chai.expect;

describe('Product API', () => {
  beforeEach(async () => {
    await Product.deleteMany({});
});

describe('POST /products', () => {
  it('should create a new product', async () => {
    const productData = {
      name: 'Test Product',
      description: 'This is a test product',
      price: 10,
      variants: [
        { name: 'Variant 1', SKU: 'ABC123', additionalCost: 5, stockCount: 20 },
        { name: 'Variant 2', SKU: 'DEF456', additionalCost: 0, stockCount: 10 }
      ]
    };
    const res = await chai.request(app)
        .post('/products')
        .send(productData);

      expect(res).to.have.status(201);
      expect(res.body).to.have.property('_id');
      expect(res.body.name).to.equal(productData.name);
    });
  });

  })