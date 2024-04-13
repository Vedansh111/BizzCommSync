import express from 'express';
import { handleGetBussinessType } from '../controllers/bussiness.controller';

export const businessRouter = express.Router();

businessRouter.route('/')
    .get(handleGetBussinessType)
