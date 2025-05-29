require 'sinatra'
require 'fast_mcp'

# Create the MCP server
mcp_server = FastMcp::Server.new(name: 'sinatra-mcp-server', version: '1.0.0')

# Define your tools
class ExampleTool < FastMcp::Tool
  description "An example tool"
  arguments  do
   required(:input).filled(:string).description("Input value")
  end
  
  def call(input:)
    "You provided: #{input}"
  end
end

mcp_server.register_tool(ExampleTool)

# Use the MCP middleware
use FastMcp::Transports::RackTransport, mcp_server

# Define your Sinatra routes
get '/' do
  'Hello, world!'
end
