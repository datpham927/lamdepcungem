import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import ChatBoxAI from "../../components/chatbotAI";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <Header />
      <div className="flex w-full sm:px-0 gap-4 px-4  h-[calc(100%-70px)]">
        <Body />
      </div>
      <ChatBoxAI />
    </div>
  );
};

export default Home;
