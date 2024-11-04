import { expect } from "chai";
import request from "supertest";
import app from "../../../app";

describe("Analytics API Routes", () => {
  it("should return status 200 for GET /api/v1.0/analytics", async () => {
    const res = await request(app).get("/api/v1.0/analytics");
    expect(res.status).to.equal(200);
  });

  it("should return analytics data for GET /api/v1.0/analytics", async () => {
    const res = await request(app).get("/api/v1.0/analytics");
    expect(res.body).to.have.property("data");
  });

  it("should return status 201 for POST /api/v1.0/analytics", async () => {
    const res = await request(app)
      .post("/api/v1.0/analytics")
      .send({ metric: "example" });
    expect(res.status).to.equal(201);
  });

  it("should return status 400 for invalid POST /api/v1.0/analytics", async () => {
    const res = await request(app).post("/api/v1.0/analytics").send({});
    expect(res.status).to.equal(400);
  });

  it("should return status 404 for GET /api/v1.0/analytics/unknown", async () => {
    const res = await request(app).get("/api/v1.0/analytics/unknown");
    expect(res.status).to.equal(404);
  });

  it("should return status 200 and correct data for GET /api/v1.0/analytics/:social", async () => {
    const res = await request(app).get("/api/v1.0/analytics/facebook");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("data");
  });

  it("should return status 400 for invalid GET /api/v1.0/analytics/:social", async () => {
    const res = await request(app).get("/api/v1.0/analytics/invalidSocial");
    expect(res.status).to.equal(400);
  });
});
