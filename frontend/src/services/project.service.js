// src/services/project.service.js
import api from "../lib/axios";


/* ===== ADMIN ===== */

export const createProject = (data) =>
  api.post("/project/create", data);

export const fetchAllProjects = () =>
  api.get("/project/all");

export const fetchArchivedProjects = () =>
  api.get("/project/archived");

export const archiveProject = (data) =>
  api.post("/project/archive", data);

/* ===== MANAGER ===== */

export const fetchManagingProjects = () =>
  api.get("/project/my/manager");

export const addProjectEmployee = (data) =>
  api.post("/project/member/add", data);

export const removeProjectEmployee = (data) =>
  api.delete("/project/member/remove", { data });

export const fetchProjectEmployees = (data) =>
  api.post("/project/employees", data);

/* ===== EMPLOYEE ===== */

export const fetchContributingProjects = () =>
  api.get("/project/my/employee");
