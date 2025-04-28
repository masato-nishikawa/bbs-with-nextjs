import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

// ページが増えてきた場合はページネーションを実装する
export async function GET(req: Request) {
  const allBBSPosts = await prisma.post.findMany();
  return NextResponse.json(allBBSPosts);
}
