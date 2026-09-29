import { sessionModel } from "../models/session.model.js";
import crypto from "crypto";


export async function getSessionByToken(token) {
    const tokenHash = crypto.createHash("sha512").update(token).digest("hex");
    return await sessionModel.findOne({
        tokenHash: tokenHash,
    });
}

export async function updateRefreshToken(id, refreshToken) {
    return sessionModel.findOneAndUpdate(
        { userId: id },
        {
            tokenHash: refreshToken,
        },
        {
            upsert: true,
        }
    );
}


export async function clearRefreshToken(token) {
    const tokenHash = crypto.createHash("sha512").update(token).digest("hex");
    return await sessionModel.findOneAndDelete({
        tokenHash: tokenHash,
    });
}