import { connectToDB } from "../mongoose";
import { StringsValidation } from "../validations/strings";

interface Params {
  title: string;
  author: string;
  community: string;
  path: string;
}

export default async function createStrings({
  title,
  author,
  community,
  path,
}: Params) {
  connectToDB();

  const createdString = await StringsValidation.create({
    title,
    author,
    community: null,
  });
}
