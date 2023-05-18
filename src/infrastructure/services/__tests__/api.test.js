import { Config } from "application/constant";

import {
  getService,
  postService,
  putService,
  patchService,
  deleteService,
} from "../api";

import request from "../request";

jest.mock("../request");

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    interceptors: {
      response: { use: () => {} },
    },
    get: jest.fn(async () => await Promise.resolve()),
    post: jest.fn(async () => await Promise.resolve()),
    put: jest.fn(async () => await Promise.resolve()),
    delete: jest.fn(async () => await Promise.resolve()),
    patch: jest.fn(async () => await Promise.resolve()),
  })),
}));

describe("Service API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getService", () => {
    it("should call request.get with the correct URL and params", async () => {
      const path = "example";
      const params = { id: 1 };

      await getService(path, params);

      expect(request.get).toHaveBeenCalledWith(`${Config.STAGE.BASE_URL}/example`, { params });
    });

    it("should return the response from request.get", async () => {
      const response = { data: "example data" };
      request.get.mockResolvedValue(response);

      const result = await getService("example");

      expect(result).toEqual(response);
    });
  });

  describe("postService", () => {
    it("should call request.post with the correct URL, body, and headers", async () => {
      const path = "example";
      const body = { data: "example data" };

      await postService(path, body);

      expect(request.post).toHaveBeenCalledWith(`${Config.STAGE.BASE_URL}/example`, body, {
        headers: { "content-type": "application/json" },
      });
    });

    it("should return the response from request.post", async () => {
      const response = { data: "example data" };
      request.post.mockResolvedValue(response);

      const result = await postService("example", {});

      expect(result).toEqual(response);
    });
  });

  describe("putService", () => {
    it("should call request.put with the correct URL and object", async () => {
      const path = "example";
      const obj = { id: 1 };

      await putService(path, obj);

      expect(request.put).toHaveBeenCalledWith(`${Config.STAGE.BASE_URL}/example`, obj);
    });

    it("should return the response from request.put", async () => {
      const response = { data: "example data" };
      request.put.mockResolvedValue(response);

      const result = await putService("example", {});

      expect(result).toEqual(response);
    });
  });

  describe("patchService", () => {
    it("should call request.patch with the correct URL and object", async () => {
      const path = "example";
      const obj = { id: 1 };

      await patchService(path, obj);

      expect(request.patch).toHaveBeenCalledWith(`${Config.STAGE.BASE_URL}/example`, obj);
    });

    it("should return the response from request.patch", async () => {
      const response = { data: "example data" };
      request.patch.mockResolvedValue(response);

      const result = await patchService("example", {});

      expect(result).toEqual(response);
    });
  });

  describe("deleteService", () => {
    it("should call request.delete with the correct URL and object", async () => {
      const path = "example";
      const obj = { id: 1 };

      await deleteService(path, obj);

      expect(request.delete).toHaveBeenCalledWith(`${Config.STAGE.BASE_URL}/example`, obj);
    });

    it("should return the response from request.delete", async () => {
      const response = { data: "example data" };
      request.delete.mockResolvedValue(response);

      const result = await deleteService("example", {});

      expect(result).toEqual(response);
    });
  });
});
