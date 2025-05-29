import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create server instance
const server = new McpServer({
  name: "mcp-demo",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

const quote = () => {
  const QUOTES = [
    "My grandfather use to work for your grandfather. Of course the rates have gone up.",
    "What hump?",
    "You're putting me on.",
    "Do you also say Froaderick?",
    'No, it\'s pronounced "eye-gor."',
    "Could be worse.",
    "Not the third switch!",
    "Dirty word! He said a dirty word!",
    "He's going to be very popular.",
  ];

  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
};

// Register Igorrr
server.tool(
  "get-igor",
  "When somebody asks for or mentions Igor",
  {
    favor: z.string().describe("Requests for Igor"),
  },
  async ({ favor }) => {
    if (favor.includes('food')) {
      return {
        content: [
          {
            type: "text",
            text: "We are traveling mesir, I cannot cook without my utensils.",
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: quote(),
        },
      ],
    };
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
