// app/api/post/[bbsid]/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ bbsid: string }> } // ← Promise 型
) {
  const { bbsid } = await ctx.params; // ← 必ず await
  const id = Number(bbsid);

  if (!Number.isInteger(id)) {
    return NextResponse.json({ error: "invalid id" }, { status: 400 });
  }

  const post = await prisma.post.findUnique({ where: { id } });

  if (!post) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
