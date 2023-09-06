"use server";

import User from "../models/user.model";
import Strings from "../models/strings.model";
import { connectToDB } from "../mongoose";

interface Params {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export async function createStrings({ text, author, path }: Params) {
  try {
    connectToDB();

    const createdThread = await Strings.create({
      text,
      author,
      community: null,
    });

    // Update User model
    await User.findByIdAndUpdate(author, {
      $push: { threads: createdThread._id },
    });
  } catch (error: any) {
    throw new Error(`Failed to create thread: ${error.message}`);
  }
}
