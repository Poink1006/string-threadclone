"use client";
import * as z from "zod";

export const StringsValidation = z.object({
  strings: z.string().min(3, { message: "Minimum 3 characters" }).max(30),
  accountId: z.string(),
  communityId: z.string(),
});

export const CommentValidation = z.object({
  comment: z.string().min(3, { message: "Minimum 3 characters" }).max(30),
  accountId: z.string(),
});
