import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { connectToDB } from "./utils";
import { User } from "./models";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
    try {
        connectToDB();
        const user = await User.findOne({ username: credentials.username });
        if (!user) {
            throw new Error("Wrong Credentials");
        }
        const isSame = await bcrypt.compare(credentials.password, user.password);
        if (!isSame) {
            throw new Error("Passwords do not match.");
        }
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong.")
    }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === "github") {
                connectToDB();
                try {
                    const user = await User.findOne({ email: profile.email });
                    if (!user) {
                        const newUser = new User(
                            {
                                username: profile.login,
                                email: profile.email,
                                img: profile.avatar_url
                            }
                        );
                        await newUser.save();
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }

            return true;
        },
        ...authConfig.callbacks
    },


})


