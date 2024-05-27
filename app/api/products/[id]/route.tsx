import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Milk", price: 2.5 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validationResult = schema.safeParse(body);
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  if (!validationResult.success)
    return NextResponse.json(validationResult.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name, price: body.price });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ message: "Deleted" });
}
