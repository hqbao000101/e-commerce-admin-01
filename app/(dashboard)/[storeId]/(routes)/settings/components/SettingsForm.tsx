import React from "react";
import { Trash } from "lucide-react";
import { Store } from "@prisma/client";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SettingsFormProps {
  initialData: Store;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage store preferences" />
        <Button variant="destructive" size="icon">
          <Trash className="w-4 h-4" />
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default SettingsForm;
