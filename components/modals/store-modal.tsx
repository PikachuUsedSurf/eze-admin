"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


const formSchema = z.object({
    name: z.string().min(1),
});

export const StoreModal = () => {
    const StoreModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        // TODO: Create Store
    }

    return (
        <Modal
            title="Create Store"
            description="Add a new store to manage products and categories"
            isOpen={StoreModal.isOpen}
            onClose={StoreModal.onClose}
        >
            <div>
                <div className="space-y-4 py-4 pb-4"></div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="E-commerce" {...field}  />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />   
                        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                            <Button type="submit">Continue</Button>
                            <Button variant="outline" onClick={StoreModal.onClose}>Cancel</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </Modal>
    );
};