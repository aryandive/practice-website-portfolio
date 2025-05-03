import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb"


export const authOptions = {
    debug: true,  // so you’ll also see details in your terminal
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "github") {
                // Connect to the database
                const client = await mongoose.connect()
                // Check if the user already exists in the database
                const currentUser = User.findOne({email: email})

                if(!currentUser){
                    // Creat a new user
                    const newUser = new User({
                        email: email,
                        username: email.split("@")
                    })
                } 
            }
            return true;
        },

        async session({ session, user, token }) {
            const dbUser = await User.findOne({email: session.user.email})
            console.log(dbUser )
            session.user.name = dbUser.username
            return session
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
