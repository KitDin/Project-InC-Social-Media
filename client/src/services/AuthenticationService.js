import Api from "./Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  },
  getUser(id) {
    return Api().get(`${id}`);
  },
  getUsers() {
    return Api().get();
  },
  getUserRequest(id) {
    return Api().get(`/frients/${id}`);
  },
  getRequestToOtherUser(id, toUser) {
    return Api().put(`/frients/${id}`, toUser);
  },
  cancelSendFriend(id, toUser) {
    return Api().delete(`/frients/${id}`, toUser);
  },
  addAFrient(id, idRequest) {
    return Api().post(`/frients/${id}`, idRequest);
  },
  uploadAvata(formData) {
    return Api().post("/information/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  uploadImgPost(formData) {
    return Api().post("/status/img", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  getpost(id) {
    return Api().get(`status/img/${id}`);
  },
  getposts() {
    return Api().get(`status/img`);
  },
  like(id, post) {
    return Api().post(`status/img/${id}`, post);
  },
  unlike(id, postid) {
    return Api().put(`status/img/${id}`, postid);
  },
  APost(idpost) {
    return Api().get(`post/${idpost}`);
  },
  getComment(idpost) {
    return Api().get(`post/comments/comment/${idpost}`);
  },
  postComment(idpost, comment) {
    return Api().post(`post/comments/comment/${idpost}`, comment);
  },
  replyComment(idpost, reply) {
    return Api().put(`post/comments/comment/${idpost}`, reply);
  }
};
