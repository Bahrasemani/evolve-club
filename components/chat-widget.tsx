"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Button onClick={() => setOpen((v) => !v)} variant="secondary" size="sm">
        {open ? "بستن چت" : "چت"}
      </Button>
      {open && (
        <Card className="mt-2 w-72">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">به‌زودی...</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default ChatWidget;
export { ChatWidget };