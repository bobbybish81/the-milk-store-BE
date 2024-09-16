import express, {
  Request,
  Response,
  Application,
} from 'express';

import milkStoreDB from './database';
import cors from "cors";

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app
  .route('/api/milkstore')
  .get((_req: Request, res: Response) => {
    return milkStoreDB ?
    res
      // .setHeader('content-type', 'application/json')
      .setHeader('Access-Control-Allow-Origin', 'https://themilkstore.netlify.app')
      .setHeader('Access-Control-Allow-Methods', 'GET')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, application/json')
      .status(200)
      .json(milkStoreDB):
    res
      .status(404)
      .end(); 
  })

app
  .route('/api/milkstore/:productId')
  .patch((_req: Request, res: Response) => {
    const product = milkStoreDB.results.find(product => product.id === _req.params.productId);
    if (!product) {
      return res
        .setHeader('Access-Control-Allow-Origin', 'https://themilkstore.netlify.app')
        .setHeader('Access-Control-Allow-Methods', 'PATCH')
        .setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, application/json')
        .status(404)
        .end(); 
    }
    product.storage = _req.body.storage;
    return milkStoreDB ?
    res
      .setHeader('location', `/api/milkstore/${product.id}`)
      .setHeader('Access-Control-Allow-Origin', 'https://themilkstore.netlify.app')
      .setHeader('Access-Control-Allow-Methods', 'PATCH')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, application/json')
      .status(200)
      .json(milkStoreDB):
    res
      .status(404)
      .end(); 
  })


export default app;