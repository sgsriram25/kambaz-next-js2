/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

// ALWAYS send cookies to server
const api = axios.create({
  baseURL: HTTP_SERVER,
  withCredentials: true,
});

// ===================== COURSES =====================

export const fetchAllCourses = async () => {
  const { data } = await api.get("/api/courses");
  return data;
};

export const findMyCourses = async () => {
  const { data } = await api.get("/api/users/current/courses");
  return data;
};

export const createCourse = async (course: any) => {
  const { data } = await api.post("/api/users/current/courses", course);
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await api.delete(`/api/courses/${id}`);
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await api.put(`/api/courses/${course._id}`, course);
  return data;
};

// ===================== MODULES =====================

export const findModulesForCourse = async (courseId: string) => {
  const { data } = await api.get(`/api/courses/${courseId}/modules`);
  return data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const { data } = await api.post(`/api/courses/${courseId}/modules`, module);
  return data;
};

export const deleteModule = async (moduleId: string) => {
  const { data } = await api.delete(`/api/modules/${moduleId}`);
  return data;
};

export const updateModule = async (module: any) => {
  const { data } = await api.put(`/api/modules/${module._id}`, module);
  return data;
};

// ===================== ASSIGNMENTS =====================

export const findAssignmentsForCourse = async (courseId: string) => {
  const { data } = await api.get(`/api/courses/${courseId}/assignments`);
  return data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const { data } = await api.post(`/api/courses/${courseId}/assignments`, assignment);
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await api.delete(`/api/assignments/${assignmentId}`);
  return data;
};

export const updateAssignment = async (assignment: any) => {
  const { data } = await api.put(`/api/assignments/${assignment._id}`, assignment);
  return data;
};

// ===================== ENROLLMENTS =====================

export const enrollUserInCourse = async (courseId: string) => {
  const { data } = await api.post(`/api/users/current/courses/${courseId}/enrollments`);
  return data;
};

export const unenrollUserFromCourse = async (courseId: string) => {
  await api.delete(`/api/users/current/courses/${courseId}/enrollments`);
};

export const findEnrollmentsForUser = async () => {
  const { data } = await api.get(`/api/users/current/enrollments`);
  return data;
};
