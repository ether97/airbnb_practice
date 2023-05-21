import bcrypt from "bcrypt";

import prisma from "../../libs/prismadb";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, name, password } = body;

  if (!email || !name || !password) {
    throw new Error("missing fields");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
