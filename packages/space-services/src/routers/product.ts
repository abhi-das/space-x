import { Application, Request, Response } from 'express';
import { Product, ProductItem } from '../models/product';
import { ProductDbQuery } from '../common';
import { appConf } from '../config';
import requireAuth from '../middlewares/require-auth';
import verifyToken from '../middlewares/verify-token';

const getAllProducts = async (q: ProductDbQuery) => {
  // Get all products from DB
  let query = {};
  if (q.category) {
    query = {
      ...query,
      category: q.category.toString(),
    };
  }

  if (q.condition) {
    query = {
      ...query,
      condition: q.condition.toString(),
    };
  }

  if (q.rating) {
    query = {
      ...query,
      rating: q.rating.toString(),
    };
  }
  const allProducts = await Product.find(query).limit(Number(q.limit)).exec();
  return allProducts;
};

const ProductRoutes = (app: Application): void => {
  const version = appConf.apiVersion;
  app
    .route(`/${version}/products`)
    .get(async (req: Request, res: Response) => {
      const query = req.query;
      let products: Array<ProductItem> = [];
      // Get all products
      try {
        products = await getAllProducts(query);
        res.status(200).send(products);
      } catch (error) {
        res.status(400).json({ message: 'No mission found in the DB!' });
      }
    })

    .post(verifyToken, requireAuth, async (req: Request, res: Response) => {
      const productFromReqBody = {
        manufacturer: req.body.manufacturer.toString(),
        name: req.body.name.toString(),
        condition: req.body.condition.toString(),
        image: req.body.image.toString(),
        description: req.body.description.toString(),
        category: req.body.category.toString(),
        price: req.body.price.toString(),
        countInStock: req.body.countInStock.toString(),
        rating: req.body.rating.toString(),
        numOfReviews: req.body.numOfReviews.toString(),
        shippingAvailable: req.body.shippingAvailable.toString(),
        shippingCost: req.body.shippingCost.toString(),
        returnPolicy: req.body.returnPolicy.toString(),
        reviews: req.body.reviews,
      };
      try {
        const newProduct = Product.buildProduct(productFromReqBody);
        await newProduct.save();
        res.status(200).json({ message: 'Product created!' });
      } catch (error) {
        res.status(500).json({ message: 'Error on product creation!' });
      }
    });

  app
    .route(`/${version}/product/:id/product`)
    .get(verifyToken, requireAuth, async (req: Request, res: Response) => {
      try {
        const product = await Product.findOne({ _id: req.params.id });
        res.status(200).send(product);
      } catch (error) {
        res
          .status(500)
          .json({ message: 'productItem could not found by given id!' });
      }
    });
};

export default ProductRoutes;
