import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    if (!req.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.next();
    }

    const url = req.nextUrl.clone();
    url.pathname = "/login";

    const cookie = req.cookies.toString();
    
    // Validate the token by sending the cookies to the backend
    const response = await fetch("http://localhost:8000/validate_token", {
        method: "GET",
        credentials: "include", // Ensures the fetch includes cookies
        headers: {
            "Content-Type": "application/json",
            Cookie: cookie,
        }, 
    });

    const data = await response.json();


    if (data.status === "error") {
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    
};
