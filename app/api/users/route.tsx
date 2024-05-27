import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// If remove request parameter, then request to endpoint will be cached and will use cach on the next request
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validationResult = schema.safeParse(body);

  if (!validationResult.success)
    return NextResponse.json(validationResult.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const newUser = await prisma.user.create({
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(newUser, { status: 201 });
}
