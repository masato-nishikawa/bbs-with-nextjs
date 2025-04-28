import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(
  req: Request,
  { params }: { params: { bbsid: string } } // ←ここを bbsid に！！
) {
  const bbsId = params.bbsid; // ←ここも合わせる
  const bbsDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(bbsId),
    },
  });

  return NextResponse.json(bbsDetailData);
}
