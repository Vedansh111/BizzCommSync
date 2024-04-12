import express from 'express';
import {
    handleGetAllUsers,
    getUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
    handleAcceptUserById,
    handleRejectUserById,
} from '../controllers/user.js';

export const router = express.Router();

router.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router.route('/:id')
    .get(getUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

router.route("/:id/accept_user")
    .patch(handleAcceptUserById)

router.route("/:id/reject_user")
    .patch(handleRejectUserById)    