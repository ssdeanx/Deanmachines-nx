# Nx Tool

nx_docs
Returns a list of documentation sections that could be relevant to the user query. IMPORTANT: ALWAYS USE THIS IF YOU ARE ANSWERING QUESTIONS ABOUT NX. NEVER ASSUME KNOWLEDGE ABOUT NX BECAUSE IT WILL PROBABLY BE OUTDATED. Use it to learn about nx, its configuration and options instead of assuming knowledge about it.
Parameters
userQuery*
The user query to get docs for. You can pass the original user query verbatim or summarize it.

nx_available_plugins
Returns a list of available nx plugins - this includes both official and approved community plugins.

nx_workspace
Returns a readable representation of the nx project graph and the nx.json that configures nx. If there are project graph errors, it also returns them. Use it to answer questions about the nx workspace and architecture

nx_project_details
Returns the complete project configuration in JSON format for a given nx project.
Parameters
projectName*
The name of the project to get details for

nx_generators
Returns a list of generators that could be relevant to the user query.

nx_generator_schema
Returns the detailed JSON schema for an nx generator
Parameters
generatorName*
The name of the generator to get schema for. Use the generator name from the nx_generators tool.

nx_visualize_graph
Visualize the Nx graph. This can show either a project graph or a task graph depending on the parameters. Use this to help users understand project dependencies or task dependencies. There can only be one graph visualization open at a time so avoid similar tool calls unless the user specifically requests it.
Parameters
visualizationType*
The way in which to visualize the graph. "project" shows the project graph focused on a single project. "project-task" shows the task graph focused on a specific task for a specific project. "full-project-graph" shows the full project graph for the entire repository.

projectName
The name of the project to focus the graph on. Only used if visualizationType is "project" or "project-task".

taskName
The name of the task to focus the graph on. Only used if visualizationType is "project-task"
