export const getImagePath = (path: string): string => {
  const isDevelopment = import.meta.env.MODE === "development";
  return isDevelopment ? path : `/event-organization-team${path}`;
};
