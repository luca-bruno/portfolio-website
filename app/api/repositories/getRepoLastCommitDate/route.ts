/* eslint-disable import/prefer-default-export */
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url)
    const owner = searchParams.get("owner")
    const repo = searchParams.get("repo")
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`)
    const data = await res.json()

    try {
        const { commit: { committer: { date } } } = data[0]
        return NextResponse.json(date)
    } catch (error) {
        const { message } = data
        return NextResponse.json(message)
    }
}
