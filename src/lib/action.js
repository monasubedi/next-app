"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const createPost = async (prevState, formData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDB();
        const newPost = new Post({ title, desc, slug, userId });
        await newPost.save();
        revalidatePath("/blog");
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" }

    }
}

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
 
    try {
        connectToDB();
        await Post.findByIdAndDelete(id);
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" }

    }
}

export const addUser = async (prevState, formData) => {
    const { username, email, password, img } = Object.fromEntries(formData);

    try {
        connectToDB();
        const newUser = new User({ username, email, password, img });
        await newUser.save();
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" }

    }
}

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDB();
        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" }

    }
}


export const handleLoginWithGithub = async () => {
    await signIn("github");

}
export const handleLogout = async () => {
    await signOut();
    console.log('done');
}

export const registerUser = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);
    try {
        if (password !== passwordRepeat) {
            return { error: "Passwords do not match." };
        }
        connectToDB();
        const user = await User.findOne({ username });
        if (user) {
            return { error: "User already exists." };
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        return { success: true };
    } catch (error) {
        return { error: "Something went wrong!" }
    }
}

export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (error) {
        console.log(error.message);
        if (error.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or passsword" }
        }
        return { error: "Something went wrong!." }

    }
}