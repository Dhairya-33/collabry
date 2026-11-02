// src/services/task.service.js
import api from "../lib/axios";


/* Manager / Admin */
export const assignTask = (formData) =>
  api.post("/task/assign", formData);

export const editTask = (taskId, formData) =>
  api.put(`/task/edit/${taskId}`, formData);

export const deleteTask = (taskId) =>
  api.delete(`/task/delete/${taskId}`);

export const fetchManagerTasks = (projectId) =>
  api.get(`/task/project/${projectId}/manager-tasks`);

/* Employee */
export const fetchMyTasks = (projectId) =>
  api.get(`/task/project/${projectId}/my-tasks`);

export const respondToTask = (taskId, formData) =>
  api.post(`/task/respond/${taskId}`, formData);

/* Shared */
export const fetchSingleTask = (taskId) =>
  api.get(`/task/${taskId}`);
