// src/services/projectInvite.service.js
import api from "../lib/axios";


export const createProjectInvite = (data) =>
  api.post("/project/invite", data);

export const respondToProjectInvite = (data) =>
  api.post("/project/invite/respond", data);

export const fetchMyProjectInvites = () =>
  api.get("/project/invite/my");
