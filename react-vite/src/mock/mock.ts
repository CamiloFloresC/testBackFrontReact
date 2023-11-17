import { IApplication } from "../interfaces/Application";
import { IGroup } from "../interfaces/Group";

export const applications: IApplication[] = [
  {
    _id: "101",
    name: "App1",
    description: "Descripción de App1",
    grouped: true,
    createdAt: "2023-11-14T12:00:00Z",
    updatedAt: "2023-11-14T12:00:00Z",
  },
  {
    _id: "202",
    name: "App2",
    description: "Descripción de App2",
    grouped: false,
    createdAt: "2023-11-14T13:30:00Z",
    updatedAt: "2023-11-14T13:30:00Z",
  },
  {
    _id: "303",
    name: "App3",
    description: "Descripción de App3",
    grouped: true,
    createdAt: "2023-11-14T14:45:00Z",
    updatedAt: "2023-11-14T14:45:00Z",
  },
  {
    _id: "404",
    name: "App4",
    description: "Descripción de App4",
    grouped: false,
    createdAt: "2023-11-14T16:15:00Z",
    updatedAt: "2023-11-14T16:15:00Z",
  },
  {
    _id: "505",
    name: "App5",
    description: "Descripción de App5",
    grouped: true,
    createdAt: "2023-11-14T17:30:00Z",
    updatedAt: "2023-11-14T17:30:00Z",
  },
];

export const groups: IGroup[] = [
  {
    _id: "667754",
    name: "Group1",
    applications: [applications[0], applications[1]],
  },
  {
    _id: "6677434",
    name: "Group2",
    applications: [applications[2], applications[3], applications[4]],
  },
  {
    _id: "667799",
    name: "Group3",
    applications: [applications[1], applications[2]],
  },
  {
    _id: "6673754",
    name: "Group4",
    applications: [applications[3], applications[4]],
  },
  {
    _id: "6679465",
    name: "Group5",
    applications: [applications[0], applications[2], applications[4]],
  },
];
