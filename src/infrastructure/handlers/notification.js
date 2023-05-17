export const convertNotificationToUse = (values) => ({
  entityId: values.entity_id,
  createdAt: values.created_at,
  describe: values.describe,
  isActive: values.is_active,
  isRead: values.is_read,
  title: values.title,
});
