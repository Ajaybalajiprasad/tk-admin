import { FOLDER_INFO_URL, FOLDER_URL } from "@/libs/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest) {
    const json = await fetch(FOLDER_INFO_URL).then(res => res.json());
    return NextResponse.json(json);
}
