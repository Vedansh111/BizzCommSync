import express from 'express';
import {
    handleGetAllUsers,
    getUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
} from '../controllers/user.js';

export const router = express.Router();

router.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router.route('/:id')
    .get(getUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);