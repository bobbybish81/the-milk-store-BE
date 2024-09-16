import express, {
  Request,
  Response,
  Application,
} from 'express';

import milkStoreDB from './database';
import cors from "cors";

const app: Application = express();

// CORS configuration
const corsOptions = {
  origin: 'https://themilkstore.netlify.app', // Allow this origin
  methods: ['GET', 'PATCH'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // If you need to send cookies or auth tokens
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));

app
  .route('/api/milkstore')
  .get((_req: Request, res: Response) => {
    return milkStoreDB ?
    res
      .setHeader('content-type', 'application/json')
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
        .status(404)
        .end(); 
    }
    product.storage = _req.body.storage;
    return milkStoreDB ?
    res
      .setHeader('location', `/api/milkstore/${product.id}`)
      .setHeader('content-type', 'application/json')
      .status(200)
      .json(milkStoreDB):
    res
      .status(404)
      .end(); 
  })


export default app;