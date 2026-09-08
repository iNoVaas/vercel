"use client";

import React, { useTransition } from "react";
import { createOrder } from "@/actions/order-action";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Check, Loader } from "lucide-react";
import * as pixel from "@/lib/pixel";

const ConfirmOrderForm = () => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    startTransition(async () => {
      const res = await createOrder();

      console.log("createOrder response:", res);

      if (!res?.success) {
        // replace alert with toast if you want
        alert(res?.message || "Failed to create order");
      }

      if (res?.redirectTo) {
        // Track Purchase event for Meta Pixel
        pixel.event("Purchase", {
          content_type: "product",
          currency: "DZD",
        });
        
        router.push(res.redirectTo);
      }
    });
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Button className="w-full mb-4" variant="default" disabled={pending}>
        {pending ? (
          <Loader className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Check className="mr-2 h-4 w-4" />
        )}
        <span>Commander</span>
      </Button>
    </form>
  );
};

export default ConfirmOrderForm;
