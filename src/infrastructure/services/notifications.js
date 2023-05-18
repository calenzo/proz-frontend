import { Config } from "application/constant";

import { deleteService, getService, patchService } from "./api";

const { ROUTES } = Config;

export const useNotificationsService = () => ({
  getNotifications: async () => await getService(ROUTES.NOTIFICATIONS),

  readNotification: async (entityId) =>
    await patchService(ROUTES.READ_NOTIFICATION(entityId)),

  deleteNotification: async (entityId) =>
    await deleteService(ROUTES.DELETE_NOTIFICATION(entityId)),
});
