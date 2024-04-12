import jwt from "jsonwebtoken";
const secret = "Bizz@Comm$Sync?";

export function setUser(user) {
    const payload = {
        _id: user.id,
        email: user.email,
    };
    return jwt.sign(payload, secret);
}

export function getUser(token){
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
} 