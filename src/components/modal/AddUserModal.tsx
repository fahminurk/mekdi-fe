import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAddUserModal from "@/hooks/useAddUserModal";
import Modal from "./Modal";
import { Button } from "../ui/button";
import { useAddUserMutation } from "@/action/useUser";
import { addUserSchema } from "@/constant";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { toast } from "sonner";

const AddUserModal = () => {
  const { isOpen, onClose } = useAddUserModal();
  const { mutateAsync, isPending } = useAddUserMutation();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const form = useForm<z.infer<typeof addUserSchema>>({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      email: "",
      password: "",
      fullname: "",
    },
  });

  async function onSubmit(values: z.infer<typeof addUserSchema>) {
    try {
      await mutateAsync(values);
      onClose();
      form.reset();
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err.response?.data.message || err.message);
    }
  }

  return (
    <Modal isOpen={isOpen} onChange={onChange} title="Add user">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-2 ">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fullname</FormLabel>
                <FormControl>
                  <Input placeholder="fullname" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-black hover:opacity-75 text-white"
            disabled={isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
