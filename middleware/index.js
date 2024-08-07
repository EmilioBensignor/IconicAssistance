import { NextResponse } from "@vercel/edge";

export default function middleware(req) {
	const { geo } = req;
	const allowedContinents = ["NA", "SA", "EU"]; // North America, South America, Europe

	if (!allowedContinents.includes(geo?.continent)) {
		return new NextResponse("Access Denied", { status: 403 });
	}

	return NextResponse.next();
}
