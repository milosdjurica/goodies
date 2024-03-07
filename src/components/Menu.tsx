import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function Menu() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3>Menu</h3>
      <div className="">
        <Tabs defaultValue="account" className="w-full min-w-full border ">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
