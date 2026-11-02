// src/services/company.service.js
import api from "../lib/axios";

export const createCompany = (data) =>
  api.post("/company/create", data);

export const joinCompany = async ({ token }) => 
  api.post("/company/join", { token });

export const fetchCompanyInviteToken = () =>
  api.get("/company/company-invite");

export const removeCompanyMember = (data) =>
  api.post("/company/member/remove", data);

export const reassignProjectManager = (data) =>
  api.post("/company/manager/reassign", data);

export const fetchCompanyMembers = () =>
  api.get("/company/members");

export const fetchOverview = () =>
  api.get("/company/overview");
