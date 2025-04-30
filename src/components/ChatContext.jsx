import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

function ChatProvider({ children }) {
  const [isChatOpen, setChatOpen] = useState(false);

  return (
    <ChatContext.Provider value={{ isChatOpen, setChatOpen }}>
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat deve ser usado dentro de um ChatProvider");
  }
  return context;
}

export { ChatProvider, useChat };


