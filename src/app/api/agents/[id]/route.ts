import { NextResponse } from "next/server";
import { auth } from "@/auth";
import dbConnect from "@/lib/mongodb";
import { Agent } from "@/models/Agent";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const resolvedParams = await params;
    const { id } = resolvedParams;

    const body = await req.json();
    const { name, description, category, status } = body;

    await dbConnect();

    const agent = await Agent.findById(id);

    if (!agent) {
      return new NextResponse("Not Found", { status: 404 });
    }

    if (agent.owner.toString() !== session.user.id && session.user.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedAgent = await Agent.findByIdAndUpdate(
      id,
      { name, description, category, status },
      { new: true }
    );

    return NextResponse.json(updatedAgent);
  } catch (error) {
    console.error("[AGENT_PUT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const resolvedParams = await params;
    const { id } = resolvedParams;

    await dbConnect();

    const agent = await Agent.findById(id);

    if (!agent) {
      return new NextResponse("Not Found", { status: 404 });
    }

    if (agent.owner.toString() !== session.user.id && session.user.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await Agent.findByIdAndDelete(id);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[AGENT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
