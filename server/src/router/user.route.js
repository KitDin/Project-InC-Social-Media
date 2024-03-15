import express from "express";
import {
  getUsersController,
  getUserController,
  register,
  login,
  registerInfor,
} from "../controllers/user.controller.js";

import {
  getAllIdUserRequestController,
  acceptRequest,
  getListFriend,
  sendRequest,
  cancelRequest,
} from "../controllers/friend-ship.controller.js";

import {
  postStatus,
  getPostOfUser,
  getAPost,
  getPostsOfUsers,
  likePost,
  unlikePost,
  postComment,
  getComments,
  postReplyComment,
} from "../controllers/post.controller.js";

import { upload, uploadStatus } from "../controllers/polices/polices.img.js";

export const router = express.Router();

router.route("/").get(getUsersController);
router.route("/:id").get(getUserController);
router.route("/register").post(register);
router.route("/login").post(login);
router
  .route("/frients/:id")
  .get(getAllIdUserRequestController)
  .post(acceptRequest)
  .put(sendRequest)
  .delete(cancelRequest);

router.route("/frients/:id/havefriends").get(getListFriend);

router.route("/information/upload").post(upload.array("file"), registerInfor);
router
  .route("/status/img")
  .post(uploadStatus.array("file"), postStatus)
  .get(getPostsOfUsers);
router
  .route("/status/img/:id")
  .get(getPostOfUser)
  .post(likePost)
  .put(unlikePost);
router.route("/post/:idpost").get(getAPost);
router
  .route("/post/comments/comment/:idpost")
  .put(postReplyComment)
  .post(postComment)
  .get(getComments);
