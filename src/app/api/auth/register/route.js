import User from "@/models/User";
import connection from "@/utils/database";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new NextResponse("all fields are required!", {
        status: 400,
      });
    }

    await connection();

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("An error occurred while creating the user.", {
      status: 500,
    });
  }
};
