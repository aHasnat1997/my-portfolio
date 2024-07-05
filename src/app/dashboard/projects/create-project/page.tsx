"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import TextEditor from "@/components/editor/TextEditor";
import { TProject } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import DOMPurify from "isomorphic-dompurify";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string(),
  summary: z.string(),
  aboutProject: z.string(),
  imageUrl: z.string().url("Invalid URL"),
  liveLink: z.string().url("Invalid URL").optional().or(z.literal("")),
  githubLinkFoClient: z.string().url("Invalid URL").optional().or(z.literal("")),
  githubLinkFoServer: z.string().url("Invalid URL").optional().or(z.literal("")),
});

const CreateProject = () => {
  const { toast } = useToast();
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      summary: '',
      aboutProject: '',
      imageUrl: '',
      liveLink: '',
      githubLinkFoClient: '',
      githubLinkFoServer: ''
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    const cleanContent = DOMPurify.sanitize(values.aboutProject);
    const projectData: TProject = {
      title: values.title,
      summary: values.summary,
      aboutProject: values.aboutProject,
      imageUrl: values.imageUrl,
      liveLink: values.liveLink || "",
      githubLinkFoClient: values.githubLinkFoClient || "",
      githubLinkFoServer: values.githubLinkFoServer || "",
    };
    console.log(projectData);

    router.push(`/dashboard/projects`);

    // const cerated = await createProject(projectData);
    // if (cerated.success) {
    //   router.push(`/project/${cerated?.data?.id}`);
    //   toast({
    //     title: "Project Successfully Post...",
    //   });
    // }
    // else if (!cerated.success) {
    //   toast({
    //     title: "Project Post failed...",
    //   })
    // }
  };

  return (
    <section className="space-y-8 pb-8">
      <h1 className="text-6xl font-bold">Create Project</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center gap-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Project Title" {...field} />
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
            render={({ field }) => (
              <FormItem className="w-full">
                <div className="flex items-center justify-end">
                  <p className="text-muted-foreground">
                    {field.value.length} / 250
                  </p>
                </div>
                <FormControl>
                  <Textarea
                    rows={2}
                    placeholder="Project Summary"
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
            name="aboutProject"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Project Content</FormLabel>
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

export default CreateProject;