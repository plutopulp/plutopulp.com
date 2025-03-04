import { NextResponse } from "next/server";

/**
 * Health check endpoint for Docker and monitoring services
 * Returns a 200 OK response with basic application health information
 */
export async function GET() {
  const healthData = {
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
  };

  return NextResponse.json(healthData, { status: 200 });
}
