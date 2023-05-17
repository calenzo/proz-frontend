const TYPE_STAGES = {
  LOCAL: "LOCAL",
  DEV: "DEV",
};

const STAGE = {
  LOCAL: {
    BASE_URL: "http://127.0.0.1:8000",
  },
  DEV: {
    BASE_URL: "",
  },
};

const Config = {
  ROUTES: {
    NOTIFICATION: "notification",
    READ_NOTIFICATION: (entityId) => `notification/${entityId}/read`,
    DELETE_NOTIFICATION: (entityId) => `notification/${entityId}`,
    NOTIFICATIONS: "notifications",
  },
  STAGE: STAGE[TYPE_STAGES.LOCAL],
};

export { Config };
