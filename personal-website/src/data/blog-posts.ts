import { BlogPost } from "@/types/blog"

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-iot-architectures",
    title: "Building Scalable IoT Architectures",
    description: "Learn how to design and implement scalable architectures for IoT applications, including best practices for data collection, processing, and storage.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "IoT",
    author: {
      name: "Toby Huang",
      avatar: "/avatars/toby.jpg"
    },
    content: `
# Building Scalable IoT Architectures

IoT applications present unique challenges when it comes to scalability. In this article, we'll explore best practices and patterns for building scalable IoT architectures.

## Key Considerations

### 1. Data Collection
When dealing with IoT devices, data collection is a critical component. Here are some key considerations:

- **Buffering**: Implement local buffering on devices to handle network interruptions
- **Batch Processing**: Use batch processing for non-time-critical data
- **Edge Computing**: Process data at the edge when possible

### 2. Message Queue Architecture
A robust message queue system is essential for handling large volumes of IoT data:

\`\`\`typescript
interface DeviceMessage {
  deviceId: string;
  timestamp: number;
  data: {
    temperature: number;
    humidity: number;
    battery: number;
  };
}

// Example message queue handler
const handleDeviceMessage = async (message: DeviceMessage) => {
  try {
    await processMessage(message);
    await storeData(message);
  } catch (error) {
    await handleError(error);
  }
};
\`\`\`

### 3. Database Design
Choose the right database for your use case:

- Time-series databases for sensor data
- Document databases for device metadata
- Relational databases for user and application data

## Best Practices

1. **Implement Device Authentication**
   - Use secure protocols (MQTT over TLS)
   - Implement device registration and authentication
   - Rotate security credentials

2. **Handle Scale**
   - Use horizontal scaling for processing nodes
   - Implement caching strategies
   - Use load balancers effectively

3. **Monitor and Alert**
   - Set up comprehensive monitoring
   - Implement automated alerting
   - Track system metrics

## Example Architecture

Here's a basic example of a scalable IoT architecture:

\`\`\`typescript
interface IoTSystem {
  devices: {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    sendData(data: DeviceData): Promise<void>;
  };
  messageQueue: {
    publish(topic: string, message: any): Promise<void>;
    subscribe(topic: string, handler: Function): void;
  };
  storage: {
    write(data: DeviceData): Promise<void>;
    read(deviceId: string, timeRange: TimeRange): Promise<DeviceData[]>;
  };
}
\`\`\`

## Conclusion

Building scalable IoT architectures requires careful planning and consideration of various factors. By following these patterns and best practices, you can create robust systems that handle growth effectively.
    `
  },
  {
    slug: "modern-state-management-react",
    title: "Modern State Management in React",
    description: "A comprehensive guide to state management in React applications, comparing different approaches like Redux, Zustand, and Jotai with practical examples.",
    date: "2024-03-01",
    readTime: "10 min read",
    category: "React",
    author: {
      name: "Toby Huang",
      avatar: "/avatars/toby.jpg"
    },
    content: `
# Modern State Management in React

State management in React has evolved significantly over the years. Let's explore modern approaches and when to use each one.

## Available Options

### 1. React Context + Hooks
Best for simple state sharing and theme management.

\`\`\`typescript
// Create a context
const ThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
}>({
  theme: 'light',
  setTheme: () => {},
});

// Provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
\`\`\`

### 2. Zustand
Perfect for medium-sized applications with simple state requirements.

\`\`\`typescript
import create from 'zustand';

interface Store {
  bears: number;
  increasePopulation: () => void;
}

const useStore = create<Store>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}));
\`\`\`

### 3. Jotai
Ideal for fine-grained state management.

\`\`\`typescript
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);
const doubleAtom = atom((get) => get(countAtom) * 2);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  const [double] = useAtom(doubleAtom);
  
  return (
    <div>
      <h1>{count}</h1>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

## When to Use What

1. **React Context + Hooks**
   - Theme management
   - User authentication
   - Simple shared state

2. **Zustand**
   - Medium-sized applications
   - When you need simple API
   - Global state with good performance

3. **Jotai**
   - Fine-grained updates
   - Complex state dependencies
   - When atomic updates are important

## Best Practices

1. **Keep State Close to Where It's Used**
2. **Split State Logically**
3. **Use Proper TypeScript Types**
4. **Implement Proper Error Handling**

## Conclusion

Choose your state management solution based on your specific needs. Don't overcomplicate things - sometimes useState and useContext are all you need!
    `
  }
  // Add more blog posts here
]

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
} 