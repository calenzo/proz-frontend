import { Config } from "application/constant";

import { deleteService, getService, patchService } from "./api";

const { ROUTES } = Config;

export const useNotificationsService = () => ({
  getNotifications: async () => {
    const response = await getService(ROUTES.NOTIFICATIONS);
    return response;
  },
  readNotification: async (entityId) => {
    const response = await patchService(ROUTES.READ_NOTIFICATION(entityId));
    return response;
  },
  deleteNotification: async (entityId) => {
    const response = await deleteService(ROUTES.DELETE_NOTIFICATION(entityId));
    return response;
  },
});
