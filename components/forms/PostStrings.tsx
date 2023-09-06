"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { updateUser } from "@/lib/actions/user.actions";
import {
  CommentValidation,
  StringsValidation,
} from "@/lib/validations/strings";
import { createStrings } from "@/lib/actions/strings.actions";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

function PostString({ userId }: { userId: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof StringsValidation>>({
    resolver: zodResolver(StringsValidation),
    defaultValues: {
      strings: "",
      accountId: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof StringsValidation>) => {
    await createStrings({
      text: values.strings,
      author: userId,
      communityId: null,
      path: pathname,
    });
  };

  return (
    <>
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="strings"
            render={({ field }) => (
              <FormItem className="mt-10 flex w-full flex-col gap-3">
                <FormLabel className="text-base-semibold text-light-2">
                  Content
                </FormLabel>
                <FormControl>
                  <Textarea className="no-focus border-dark-4 bg-dark-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-primary-500 w-full">
            Post String
          </Button>
        </form>
      </Form>
    </>
  );
}

export default PostString;
