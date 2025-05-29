# Model Context Protocol — Workshop starter

## Ideas

- Get public holidays: I have 15 remaining vacation days, use public holidays and optimize when to get them.
- Get HDD free space: How many copies of War and Peace I can store in the remaining space on my HDD?
- Convert timezones: What time in Valencia is 9am NY time? Here’s the agenda for the conference, show me the schedule in Sofia time.
- Get latest news from RSS: What are the positive news from CNN? Summarize what’s happening in the USA right now in the style of Bill Hicks.
- Get diff of pull request: Perform code review of this open source PR https://github.com/rails/rails/pull/55072 (hint if you append .diff to the URL you get the git diff patch)
- Get Core Web Vitals for an URL: How can I improve the performance of this website https://www.flywire.com

## Resources

- https://modelcontextprotocol.io/
- https://github.com/yjacquin/fast-mcp
- https://github.com/geelen/mcp-remote

## Getting started with plain Ruby

Install dependencies with:

```
gem install fast-mcp
```

## Getting started with Sinatra

Install dependencies with:

```
bundle install
```

Start the server with:

```
ruby sinatra.rb
```

## Getting started with Node

Install dependencies with:

```
npm install
```

## Testing with MCP Inspector

Start the official MCP inspector:

```
npx @modelcontextprotocol/inspector
```

Open http://127.0.0.1:6274/ and connect to you server:

**Plain Ruby**

- transport: stdio
- command: ruby
- arguments: /path/to/server.rb

**Sinatra**

- transport: sse
- URL: http://127.0.0.1:4567/mcp/sse

**Node**

- transport: stdio
- command: node
- arguments: /path/to/build/index.js

Go to **Tools** and explore.

## Testing with AI agent

You can use the following clients:

- Claude Desktop
- Visual Studio Code
- Cursor
- Zed

Follow its configuration to add the MCP server to the list of tools. 

