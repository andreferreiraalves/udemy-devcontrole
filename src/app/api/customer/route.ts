import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

  const dataPayload = {
    name,
    email,
    phone,
    userId: session.user.id,
  };

  try {
    await prisma.customer.create({
      data: dataPayload,
    });

    return NextResponse.json(dataPayload);
  } catch (err) {
    return NextResponse.json(
      { message: "Failed create new customer" },
      {
        status: 400,
      },
    );
  }
}
