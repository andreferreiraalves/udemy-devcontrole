import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client/extension";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user)
    return NextResponse.json(
      { message: "Not Authorized" },
      {
        status: 401,
      },
    );
  const { name, email, phone } = await request.json();

  try {
  } catch (err) {
    return NextResponse.json(
      { message: "Failed create new customer" },
      {
        status: 400,
      },
    );
  }

  return NextResponse.json({ ok: "true" });
}
