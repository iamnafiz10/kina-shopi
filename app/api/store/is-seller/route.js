import {getAuth} from "@clerk/nextjs/server";
import authSeller from "@/middlewares/authSeller";
import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";

// Auth seller
export async function GET(request) {
    try {
        const {userId} = getAuth(request)
        const isSeller = await authSeller(userId)
        if (!isSeller) {
            return NextResponse.json({error: "Not authorized"}, {status: 401})
        }
        const storeInfo = await prisma.store.findUnique({where: {userId}})
        return NextResponse.json({isSeller, storeInfo})
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: error.code || error.message}, {status: 400})
    }
}