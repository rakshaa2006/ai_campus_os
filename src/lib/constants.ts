export const APP_NAME = "AI Campus OS";

export const APP_DESCRIPTION =
  "A role-based campus platform with an AI assistant that answers only from verified college documents.";

export const USER_ROLES = ["student", "faculty", "admin"] as const;

export type UserRole = (typeof USER_ROLES)[number];