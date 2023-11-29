import { NextApiRequest, NextApiResponse } from "next";
import React from "react";
export const GET = (req: NextApiRequest, res: NextApiResponse) => {
    return new Response(JSON.stringify({ message: "Hello World" }))
};