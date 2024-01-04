import prismadb from "@/lib/prismadb";
import React from "react";

interface DashboardProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <>
      <h5>This is the Dashboard Page</h5>
      <p>Current Active Store: {store?.name}</p>
    </>
  );
};

export default DashboardPage;
