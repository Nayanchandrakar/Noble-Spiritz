export const GET = (req) => {
    const token = req?.cookies?.get('token')
    if (!token) {
        return new Response(JSON.stringify(null))
    } else {
        return new Response(JSON.stringify(token))
    }
}