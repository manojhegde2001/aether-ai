import { NextResponse } from "next/server";
import { auth } from "@/auth";
import dbConnect from "@/lib/mongodb";
import { Agent } from "@/models/Agent";

export async function GET(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await dbConnect();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    
    let query: any = {};
    
    if (session.user.role !== "ADMIN") {
      query.owner = session.user.id;
    }
    
    if (category) {
      query.category = category;
    }

    const agents = await Agent.find(query).sort({ createdAt: -1 });

    return NextResponse.json(agents);
  } catch (error) {
    console.error("[AGENTS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name, description, category } = body;

    if (!name || !description || !category) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    await dbConnect();

    const agent = await Agent.create({
      name,
      description,
      category,
      owner: session.user.id,
    });

    return NextResponse.json(agent);
  } catch (error) {
    console.error("[AGENTS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
