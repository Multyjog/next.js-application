import { NextRequest, NextResponse } from "next/server";

// If remove request parameter, then request to endpoint will be cached and will use cach on the next request
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "Jonh" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
