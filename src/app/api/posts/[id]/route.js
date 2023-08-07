import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connection from "@/utils/database";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connection();

    const post = await Post.findById(id);

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connection();

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
