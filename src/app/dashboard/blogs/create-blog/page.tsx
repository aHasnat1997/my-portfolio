"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import TextEditor from "@/components/editor/TextEditor";
import { TBlog } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import DOMPurify from "isomorphic-dompurify";
import createBlog from "@/actions/createBlog";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2),
  imageUrl: z.string().min(2),
  summary: z.string().min(2),
  content: z.string().min(2),
});

const CreateBlog = () => {
  const { toast } = useToast();
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      imageUrl: '',
      summary: '',
      content: ''
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    const cleanContent = DOMPurify.sanitize(values.content);
    const blogData: TBlog = {
      title: values.title,
      imageUrl: values.imageUrl,
      content: cleanContent,
      summary: values.summary
    };

    const cerated = await createBlog(blogData);
    if (cerated.success) {
      router.push('/dashboard/blogs');
      toast({
        title: "Blog Successfully Post...",
      });
    }
    else if (!cerated.success) {
      toast({
        title: "Blog Post failed...",
      })
    }
  };

  return (
    <section className="space-y-8 pb-8">
      <h1 className="text-6xl font-bold">Create Blog</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center gap-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Blog Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Banner Image URL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (<FormItem className="w-full">
              <div className="flex items-center justify-end">
                <p className="text-muted-foreground">
                  {field.value.length} / 250
                </p>
              </div>
              <FormControl>
                <Textarea
                  rows={2}
                  placeholder="Blog Summary"
                  className="resize-none no-scrollbar"
                  maxLength={250}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>)}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Blog Content</FormLabel>
                <FormControl>
                  <TextEditor
                    content={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
};

export default CreateBlog;