import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connection from "@/utils/database";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connection();

    const query = username ? { username } : {};

    const posts = await Post.find(query);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();

  
    if (!body.title || !body.content || !body.username) {
      return new NextResponse("all fields are required!", {
        status: 400,
      });
    }

    await connection();

    const newPost = new Post(body);

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
