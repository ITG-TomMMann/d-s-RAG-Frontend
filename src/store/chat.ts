import { create } from 'zustand';

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

type ChatStore = {
  messages: Message[];
  isTyping: boolean;
  selectedFolder: string;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setTyping: (typing: boolean) => void;
  setSelectedFolder: (folder: string) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  isTyping: false,
  selectedFolder: 'itg',
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: Math.random().toString(36).substring(7),
          timestamp: new Date(),
        },
      ],
    })),
  setTyping: (typing) => set({ isTyping: typing }),
  setSelectedFolder: (folder) => {
    sessionStorage.setItem('selectedFolder', folder);
    set({ selectedFolder: folder });
  },
}));