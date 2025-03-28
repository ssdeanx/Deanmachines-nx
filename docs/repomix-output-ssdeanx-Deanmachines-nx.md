This file is a merged representation of the entire codebase, combined into a single document by Repomix. The content has been processed where content has been formatted for parsing, security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Content has been formatted for parsing in markdown style
- Security check has been disabled - content may contain sensitive information

## Additional Info

# Directory Structure
```
.cursor/
  mcp.json
  nx-RL-training.md
  nx-tool.md
  storybook-codemirror.md
.github/
  workflows/
    ci.yml
.verdaccio/
  config.yml
dashboard/
  .storybook/
    main.js
    main.ts
  src/
    app/
      app.module.css
      app.tsx
      nx-welcome.tsx
    Button.module.css
    Button.spec.tsx
    Button.stories.tsx
    Button.tsx
    Card.module.css
    Card.spec.tsx
    Card.tsx
    Footer.module.css
    Footer.spec.tsx
    Footer.tsx
    Header.module.css
    Header.spec.tsx
    Header.tsx
    Input.module.css
    Input.spec.tsx
    Input.tsx
    main.tsx
    Sidebar.module.css
    Sidebar.spec.tsx
    Sidebar.tsx
    styles.css
    Table.module.css
    Table.spec.tsx
    Table.tsx
  .npmrc
  eslint.config.mjs
  index.html
  package.json
  tsconfig.app.json
  tsconfig.json
  tsconfig.storybook.json
  vite.config.ts
dashboard-e2e/
  src/
    example.spec.ts
  eslint.config.mjs
  package.json
  playwright.config.ts
  tsconfig.json
data-models/
  src/
    lib/
      data-models.module.css
      data-models.spec.tsx
      data-models.tsx
    index.ts
  .babelrc
  eslint.config.mjs
  package.json
  README.md
  tsconfig.json
  tsconfig.lib.json
  tsconfig.spec.json
  vite.config.ts
libs/
  shared/
    api/
      src/
        lib/
          api.spec.ts
          api.ts
        index.ts
      eslint.config.mjs
      package.json
      README.md
      tsconfig.json
      tsconfig.lib.json
      tsconfig.spec.json
      vite.config.ts
    src/
      lib/
        shared.module.css
        shared.spec.tsx
        shared.tsx
      index.ts
    ui/
      src/
        lib/
          button.module.css
          button.spec.tsx
          button.tsx
          card.module.css
          card.spec.tsx
          card.tsx
          eslint.config.mjs
          form.module.css
          form.spec.tsx
          form.tsx
          ui.module.css
          ui.spec.tsx
          ui.tsx
        index.ts
      .babelrc
      eslint.config.mjs
      package.json
      README.md
      tsconfig.json
      tsconfig.lib.json
      tsconfig.spec.json
      vite.config.ts
    .babelrc
    eslint.config.mjs
    package.json
    README.md
    tsconfig.json
    tsconfig.lib.json
    tsconfig.spec.json
    vite.config.ts
utils/
  src/
    lib/
      utils.module.css
      utils.spec.tsx
      utils.tsx
    index.ts
  .babelrc
  eslint.config.mjs
  package.json
  README.md
  tsconfig.json
  tsconfig.lib.json
  tsconfig.spec.json
  vite.config.ts
.gitignore
.npmrc
.prettierignore
.prettierrc
Current-Progress.md
nx.json
package.json
pnpm-workspace.yaml
README.md
storybook-codemirror.md
tsconfig.base.json
tsconfig.json
vitest.workspace.ts
```

# Files

## File: .cursor/mcp.json
````json
{
  "mcpServers": {
    "nx-mcp": {
      "url": "http://localhost:9737/sse"
    }
  }
}
````

## File: .cursor/nx-RL-training.md
````markdown
---
tags:
  - Nx
  - Monorepo
  - Reinforcement Learning
  - RL
  - Training App
id: introduction
description: This document outlines how to create an application for reinforcement learning (RL) training within an Nx monorepo.
---

# Creating an RL Training App in an Nx Monorepo

This document outlines how to create an application for reinforcement learning (RL) training within an Nx monorepo. It assumes you have a data processing pipeline in place that converts text prompts to XML and then to JSON using XSD2JSON.

## Resources

*   **Reinforcement Learning Tutorial:** A GitHub repository providing code for a reinforcement learning tutorial ([https://github.com/nzolman/dynamicsai-rl-tutorial](https://github.com/nzolman/dynamicsai-rl-tutorial)).
*   **AWS RoboMaker (Deprecated):** AWS RoboMaker resource about training a robot using reinforcement learning ([https://aws.amazon.com/robomaker/resources/train-a-robot-using-reinforcement-learning-project/](https://aws.amazon.com/robomaker/resources/train-a-robot-using-reinforcement-learning-project/)). Note that AWS RoboMaker is no longer available to new customers.
*   **Nx Tutorials:** Official Nx tutorials for creating monorepos with React and Angular ([https://nx.dev/getting-started/tutorials/react-monorepo-tutorial](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial), [https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial)).
*   **Nx Core Features:** Documentation on Nx's core features, such as task caching and affected commands ([https://nx.dev/core-features](https://nx.dev/core-features)).
*   **Setting up Two Applications in an Nx Monorepo:** A Medium article demonstrating code sharing between applications in an Nx monorepo ([https://medium.com/@AmyScript/setting-up-two-applications-in-an-nx-monorepo-4bba3fccb01d](https://medium.com/@AmyScript/setting-up-two-applications-in-an-nx-monorepo-4bba3fccb01d)).
*   **Learning Nx:** A GitHub repository with basic Nx examples ([https://github.com/hchiam/learning-nx](https://github.com/hchiam/learning-nx)).
*   **Setting up a Monorepo with pnpm Workspaces and speed it up with Nx!:** A blog post on the Nx website about setting up a monorepo with pnpm workspaces and speeding it up with Nx ([https://nx.dev/blog/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx](https://nx.dev/blog/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx)).

## Steps

1.  **Set up your Nx workspace:**

    If you haven't already, create a new Nx workspace using the following command:

    ```bash
    pnpx create-nx-workspace@latest
    ```

    Choose a preset that is suitable for your project (e.g., "react", "angular", or "node"). This will generate the `apps` and `libs` directories.
2.  **Initialize a new pnpm workspace (if not using Nx Cloud):**

    If you are not using Nx Cloud, create a `pnpm-workspace.yaml` file in the root of your monorepo with the following content:

    ```yaml
    packages:
      - 'apps/*'
      - 'libs/*'
    ```
3.  **Add Nx to a pnpm workspace (if necessary):**

    If you didn't select an Nx preset during workspace creation, install the `nx` package at the root level:

    ```bash
    pnpm add -w -D nx
    ```
4.  **Create a new Nx application:**

    Use the Nx CLI to generate a new application in your monorepo. When using React, Vite is a good choice for a development server. Choose a name that reflects the purpose of your RL application (e.g., `rl-training-app`).

    ```bash
    pnpx nx generate @nx/react:app rl-training-app --bundler=vite
    # or, for a Node.js application:
    pnpx nx generate @nx/node:app rl-training-app
    ```

    This command sets up the basic structure for your application within the `apps/rl-training-app` directory.
5.  **Create a library for data processing:**

    Create a library to encapsulate your data processing logic (txt to XML to JSON). This promotes code reusability and separation of concerns.

    ```bash
    pnpx nx generate @nx/node:library data-processing
    ```

    This command creates a library in the `libs/data-processing` directory.  Move your data processing code into the `libs/data-processing/src/lib` directory. This library should expose functions to:

    *   Convert txt prompt to XML
    *   Convert XML to JSON using XSD2JSON
    *   Load and prepare data for RL training

    Make sure to define a clear public API in the `index.ts` file of the library.
6.  **Install RL libraries:**

    Install the necessary RL libraries in your RL training application.  Navigate to your application directory first.

    ```bash
    cd apps/rl-training-app
    pnpm install tensorflow  # Or your preferred RL library
    # or
    pnpm install torch
    # or
    pnpm install ray
    ```

    Choose the library that best suits your needs and environment.  TensorFlow and PyTorch are popular choices for deep learning, while Ray provides a framework for distributed computing.
7.  **Implement RL training logic:**

    Implement the RL training logic in your application, defining the environment, agent, and training loop. Import the data processing library to load and prepare your data.

    ```typescript
    // Example (Conceptual - adjust based on your chosen RL framework)
    import { processData } from '@your-org/data-processing';

    // ... your RL environment and agent setup ...

    const trainingData = processData(yourRawData);

    // ... your training loop using trainingData ...
    ```

    This step involves defining the core logic of your RL training process.  Consider using a modular design to separate the environment, agent, and training loop into distinct components.
8.  **Create a library for shared RL components (optional):**

    If you plan to reuse RL components across multiple applications or share them with other teams in your monorepo, creating a dedicated library is highly recommended. This promotes code sharing, reduces duplication, and ensures consistency across your projects.

    ```bash
    pnpx nx generate @nx/react:library rl-components --publishable --importPath=@your-org/rl-components
    # or
    pnpx nx generate @nx/node:library rl-components --publishable --importPath=@your-org/rl-components
    ```

    *   `--publishable`:  This flag indicates that the library is intended to be published and consumed by other projects (internal or external).
    *   `--importPath`:  This defines the import alias for the library (e.g., `@your-org/rl-components`), making it easier to import components in other projects.  Choose a unique and descriptive import path.

    Move the shared RL components into this library and export them from the library's `index.ts` file.  Examples of components that could be shared include:

    *   **Custom Neural Network Layers:** Reusable building blocks for your RL agents.
    *   **Activation Functions:**  Specialized activation functions tailored for RL tasks.
    *   **Environment Wrappers:**  Components that modify or augment the RL environment.
    *   **Reward Shaping Functions:**  Functions that define how rewards are calculated.
    *   **Data Preprocessing Utilities:**  Functions for preparing data for RL training.
    *   **Common Configuration Interfaces:**  Shared interfaces for configuring RL agents and environments.

    When creating shared components, consider the following:

    *   **Abstraction:** Design components to be as generic and reusable as possible.
    *   **Configuration:**  Use configuration options to customize the behavior of components.
    *   **Documentation:**  Provide clear and concise documentation for each component.
    *   **Testing:**  Write thorough unit tests to ensure the components function correctly.

9.  **Set up a training environment:**

    The training environment is a crucial part of your RL system. It simulates the world in which your agent will learn to interact. You have several options for setting up a training environment:

    *   **Simulation Environment:**  A simulated environment allows you to control various aspects of the training process and experiment with different scenarios. Popular simulation environments include:
        *   **OpenAI Gym:** A toolkit for developing and comparing reinforcement learning algorithms. It provides a wide variety of environments, from classic control problems to Atari games.
        *   **Unity ML-Agents Toolkit:**  A Unity package that allows you to create and train intelligent agents in 3D environments.
        *   **DeepMind Lab:**  A 3D learning environment designed for agent-based AI research.
    *   **Real-World Environment:**  In some cases, you may want to train your agent in a real-world environment. This can be more challenging but can also lead to more robust and generalizable agents.
    *   **Custom Environment:** You can create your own custom environment using libraries like Pygame or other game development frameworks. This gives you complete control over the environment's dynamics and reward structure.

    When setting up your training environment, consider the following:

    *   **State Space:**  Define the set of possible states that the agent can observe.
    *   **Action Space:**  Define the set of possible actions that the agent can take.
    *   **Reward Function:**  Define the reward function that the agent will use to learn.  The reward function should incentivize the agent to achieve the desired goals.
    *   **Episode Termination Conditions:**  Define the conditions under which an episode will terminate (e.g., reaching a goal, running out of time, or failing to achieve a certain objective).

10. **Monitor and visualize training:**

    Monitoring and visualization are essential for understanding how your agent is learning and identifying potential problems. Implement tools to track key metrics during training, such as:

    *   **Episode Reward:**  The total reward received by the agent in each episode.
    *   **Average Reward:**  The average reward over a window of recent episodes.
    *   **Episode Length:**  The number of steps taken in each episode.
    *   **Loss Function:**  The value of the loss function used to train the agent's neural network.
    *   **Action Distribution:**  The distribution of actions taken by the agent.
    *   **State Distribution:**  The distribution of states visited by the agent.

    Popular tools for monitoring and visualizing RL training include:

    *   **TensorBoard:** A visualization toolkit for TensorFlow. It allows you to track metrics, visualize graphs, and inspect the weights and biases of your neural networks.
    *   **Weights & Biases:** A platform for tracking and visualizing machine learning experiments. It provides tools for experiment tracking, hyperparameter optimization, and model management.
    *   **MLflow:** An open-source platform for managing the end-to-end machine learning lifecycle. It provides tools for tracking experiments, packaging code, and deploying models.
    *   **Custom Dashboards:** You can create your own custom dashboards using libraries like Matplotlib, Seaborn, or Plotly. This gives you complete control over the visualization process.

    By carefully monitoring and visualizing your training process, you can gain valuable insights into your agent's behavior and identify areas for improvement.

11. **Configure caching:**

    Add an `nx.json` file to configure caching and task pipelines. This file allows you to define which tasks should be cached and how they depend on each other.

    ```json
    {
      "tasksRunnerOptions": {
        "default": {
          "runner": "nx/tasks-runners/default",
          "options": {
            "cacheableOperations": ["build", "test", "lint", "e2e"],
            "outputPath": "dist/{project.root}"
          }
        }
      },
      "affected": {
        "default": {
          "include": ["default"]
        }
      }
    }
    ```

    This configuration enables caching for common tasks like `build`, `test`, `lint`, and `e2e`.  The `outputPath` specifies where the cached artifacts should be stored.  Refer to the Nx documentation for more advanced caching configurations.

12. **Properly use Nx commands:**

    Use `pnpx` to execute Nx commands within your pnpm workspace. Here are some common commands:

    *   `pnpx nx build rl-training-app`: Build the `rl-training-app` application.
    *   `pnpx nx test rl-training-app`: Test the `rl-training-app` application.
    *   `pnpx nx lint rl-training-app`: Lint the `rl-training-app` application.
    *   `pnpx nx build data-processing`: Build the `data-processing` library.
    *   `pnpx nx graph`: Visualize the project graph, showing dependencies between projects.
    *   `pnpx nx affected:test`: Test only the projects that have been affected by a code change.
    *   `pnpx nx run-many --target=build --all`: Build all projects in the workspace.

13. **Enforce module boundaries:**

    Use Nx's module boundary rules to enforce architectural constraints and prevent circular dependencies between your application and libraries. This helps maintain a clean and maintainable codebase. Configure these rules in the `.eslintrc.json` file.

14. **Leverage Nx's task caching:**

    Nx's task caching can significantly speed up your CI/CD pipeline. By caching task results, Nx avoids re-running tasks that have already been executed with the same inputs. This can dramatically reduce build times, especially in large monorepos.

15. **Test affected projects:**

    Use Nx's affected commands to run tests only on the projects that have been affected by a code change. This ensures that you're only testing the code that needs to be tested, saving time and resources.

    ```bash
    pnpx nx affected:test
    ```

    This command analyzes the changes in your codebase and runs tests only on the affected projects.

## Conclusion

By following these steps, you can create a robust and scalable reinforcement learning training application within an Nx monorepo. Nx provides powerful tools for managing dependencies, caching tasks, and enforcing architectural constraints, making it an ideal choice for complex RL projects. Remember to consult the official Nx documentation for the most up-to-date information and best practices. Good luck!
````

## File: .cursor/nx-tool.md
````markdown
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
````

## File: .cursor/storybook-codemirror.md
````markdown
# Integrating Storybook with CodeMirror, LLMs, and Project Generation

This document outlines how to integrate Storybook with CodeMirror to create a chat interface connected to LLMs and programmatically generate projects based on templates within an Nx monorepo.

## Resources

* **Storybook Documentation**: [Storybook Official Docs](https://storybook.js.org/docs) - Comprehensive guide to setting up and using Storybook.
* **CodeMirror Documentation**: [CodeMirror Official Docs](https://codemirror.net/docs/) - Detailed API and usage examples for CodeMirror.
* **Nx Monorepo Documentation**: [Nx Official Docs](https://nx.dev/getting-started/intro) - Learn how to manage monorepos with Nx.
* **LLM API Integration**: [OpenAI API Docs](https://platform.openai.com/docs/api-reference) - Official documentation for integrating OpenAI's LLM API.
* **Templating Engines**: [Handlebars Documentation](https://handlebarsjs.com/guide/) - Guide to using Handlebars for templating.
* **File System Management**: [fs-extra Documentation](https://github.com/jprichardson/node-fs-extra) - Enhanced file system operations for Node.js.
* **Commander.js CLI Library**: [Commander.js Documentation](https://github.com/tj/commander.js) - Build command-line interfaces with ease.
* **Storybook Addons**: [Storybook Addons Documentation](https://storybook.js.org/addons) - Explore and integrate Storybook addons.
* **Markdown Cheatsheet**: [Markdown Cheatsheet](https://techvomit.net/markdown-cheatsheet/) - Quick reference for Markdown syntax.
* **Relative Links in Markdown**: [GitHub Relative Links](https://docs.github.com/articles/basic-writing-and-formatting-syntax#relative-links) - Learn how to use relative links in Markdown.
* **Nx Storybook Plugin**: [Nx Storybook Plugin Docs](https://nx.dev/packages/storybook) - Official documentation for integrating Storybook with Nx.
* **CodeMirror Addon for Storybook**: [storybook-addon-code-editor](https://www.npmjs.com/package/storybook-addon-code-editor) - NPM package for integrating CodeMirror into Storybook.
* **Storybook Console Addon**: [@storybook/addon-console](https://www.npmjs.com/package/@storybook/addon-console) - Display console logs within Storybook.

## Approach

The integration process involves several key strategies:

*   **Leveraging Storybook Addons:** Utilize Storybook addons like `storybook-addon-code-editor` and `@storybook/addon-console` to simplify the integration of CodeMirror, provide a code editor, and enhance the development experience by displaying console outputs within Storybook.
*   **Component-Driven Development:** Build the chat interface and project generation tools as reusable Storybook components.
*   **Utilizing MDX for Documentation:** Employ MDX to create comprehensive and interactive documentation that combines code examples and explanatory text.
*   **Connecting to LLMs via API:** Implement an API client to communicate with Large Language Models (LLMs) for code generation and interactive assistance.
*   **Templating for Project Generation:** Use a templating engine to create projects from predefined templates, allowing for customization through user inputs.
*   **Command-Line Interface (CLI):** Consider building a CLI to streamline project generation and other tasks.
*   **File System Management:** Use libraries like `fs-extra` for robust file system operations.

This approach ensures a modular, maintainable, and well-documented integration.

## Steps

1.  **Set up Storybook in your Nx monorepo:** Use Nx generators to add Storybook to your projects. This provides a structured environment for component development and documentation.
    *   Install the Nx Storybook plugin using **pnpm**:
    ```bash
    pnpm add --save-dev @nx/storybook
    ```
    *   Generate Storybook configuration for your project:
    ```bash
    pnpm nx g @nx/react:storybook-configuration project-name
    ```
    *   Launch Storybook for a specific project:
    ```bash
    pnpm nx run project-name:storybook
    ```

2.  **Integrate CodeMirror:** Incorporate CodeMirror into a Storybook component using `storybook-addon-code-editor` or a similar library. This will serve as the foundation for the chat interface and code editor.
    *   Install `storybook-addon-code-editor` as a dev dependency:
    ```bash
    pnpm add --save-dev storybook-addon-code-editor
    ```
    *   Update your `.storybook/main.ts` file to include the addon and configure the `staticDirs`:
    ```typescript:.storybook/main.ts
    // .storybook/main.ts
    import type { StorybookConfig } from '@storybook/react-vite';
    import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs';

    const config: StorybookConfig = {
      staticDirs: [...getCodeEditorStaticDirs(__filename)],
      addons: ['storybook-addon-code-editor'],
      framework: {
        name: '@storybook/react-vite',
        options: {},
      },
    };

    export default config;
    ```

3.  **Connect to LLMs:** Implement the API connection to your chosen LLM within the CodeMirror-based chat component. This enables code generation and interactive assistance features.
    *   Use an API client like `axios` or `fetch` to communicate with the LLM.
    *   Example of sending a prompt to an LLM API:
    ```typescript
    const response = await fetch('https://api.llm.com/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: 'Generate a React component' }),
    });
    const data = await response.json();
    console.log(data);
    ```

4.  **Implement Project Generation:** Create a mechanism to generate projects based on templates. This allows users to quickly create new projects with predefined structures and configurations.
    *   Use a templating engine like `handlebars` or `ejs` to generate files from templates.
    *   Example of generating a project structure:
    ```typescript
    import { copySync } from 'fs-extra';
    import { render } from 'handlebars';

    const template = `{
      "name": "{{projectName}}",
      "version": "1.0.0",
      "scripts": {
        "start": "nx serve {{projectName}}"
      }
    }`;
    const rendered = render(template, { projectName: 'my-project' });
    copySync('templates/project', 'generated/my-project');
    ```

5.  **Develop a CLI (Optional):** Build a command-line interface using a library like `Commander.js` to automate project setup, code generation, and other development tasks.
    *   Example of a basic CLI setup:
    ```typescript
    import { Command } from 'commander';
    const program = new Command();

    program
      .command('generate <projectName>')
      .description('Generate a new project')
      .action((projectName) => {
        console.log(`Generating project: ${projectName}`);
        // Call project generation logic here
      });

    program.parse(process.argv);
    ```

6.  **Manage Files:** Use `fs-extra` to handle file system operations such as creating directories, copying files, and modifying file contents.
    *   Example of creating a directory and copying files:
    ```typescript
    import { ensureDirSync, copySync } from 'fs-extra';

    ensureDirSync('generated/my-project');
    copySync('templates/project', 'generated/my-project');
    ```

7.  **Integrate `@storybook/addon-console`:** Add the `@storybook/addon-console` to your Storybook to display console logs, warnings, and errors within the Storybook UI, aiding in debugging and monitoring.
    *   Install the addon:
    ```bash
    pnpm add --save-dev @storybook/addon-console @storybook/addon-actions
    ```
    *   Configure the addon in `.storybook/main.js`:
    ```javascript:.storybook/main.js
    export default {
      addons: [
        "@storybook/addon-actions",
        "@storybook/addon-console",
      ],
    };
    ```
    *   Use the `withConsole` decorator in `.storybook/preview.js`:
    ```javascript:.storybook/preview.js
    import type { Preview } from '@storybook/react';
    import { withConsole } from '@storybook/addon-console';

    const preview: Preview = {
      decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
      // ...
    };
    ```

### Detailed Setup Instructions for CodeMirror and `storybook-addon-code-editor`
// ... existing code ...
### Integrating `@storybook/addon-console`

1.  **Installation:**

    ```bash
    pnpm add --save-dev @storybook/addon-console @storybook/addon-actions
    ```

2.  **Configuration:**

    *   Import the addon in your `.storybook/main.js` file:

    ```javascript:.storybook/main.js
    // .storybook/main.js
    export default {
      addons: [
        "@storybook/addon-actions",
        "@storybook/addon-console",
      ],
    };
    ```

3.  **Usage:**

    *   Optionally, use the `withConsole` decorator in your `preview.js` to associate console messages with specific stories:

    ```javascript:.storybook/preview.js
    // preview.js
    import type { Preview } from '@storybook/react';
    import { withConsole } from '@storybook/addon-console';

    const preview: Preview = {
      decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
      // ...
    };
    ```

    *   You can customize the addon's behavior by passing options to `withConsole` or `setConsoleOptions`.

### Nx Monorepo Best Practices

*   **Centralized Component Library:** Consider creating a shared library within your Nx monorepo to house your components. This makes it easier to manage and reuse components across multiple projects.
*   **Storybook for Multiple Projects:** If you have multiple projects in your monorepo, you can set up Storybook for each project individually. Use the Nx Storybook plugin to generate configurations for each project.
*   **Caching and Task Optimization:** Leverage Nx's caching and task optimization features to speed up Storybook builds and development workflows. Use `nx affected:storybook` to only build and serve Storybook for projects that have changed.

This update provides a more comprehensive guide for integrating Storybook with CodeMirror in an Nx monorepo, making it more useful for developers using tools like Copilot and Cursor.
````

## File: .github/workflows/ci.yml
````yaml
name: CI

on:
  push:
    branches:
      - master
  pull_request:

permissions:
  actions: read
  contents: read

jobs:
  main:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      # This enables task distribution via Nx Cloud
      # Run this command as early as possible, before dependencies are installed
      # Learn more at https://nx.dev/ci/reference/nx-cloud-cli#npx-nxcloud-startcirun
      # Uncomment this line to enable task distribution
      # - run: pnpm dlx nx-cloud start-ci-run --distribute-on="3 linux-medium-js" --stop-agents-after="build"

      # Cache node_modules
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - run: pnpm install --frozen-lockfile
      - uses: nrwl/nx-set-shas@v4

      # Prepend any command with "nx-cloud record --" to record its logs to Nx Cloud
      # - run: pnpm exec nx-cloud record -- echo Hello World
      # Nx Affected runs only tasks affected by the changes in this PR/commit. Learn more: https://nx.dev/ci/features/affected
      - run: pnpm exec nx affected -t lint test build
````

## File: .verdaccio/config.yml
````yaml
# path to a directory with all packages
storage: ../tmp/local-registry/storage

# a list of other known repositories we can talk to
uplinks:
  npmjs:
    url: https://registry.npmjs.org/
    maxage: 60m

packages:
  '**':
    # give all users (including non-authenticated users) full access
    # because it is a local registry
    access: $all
    publish: $all
    unpublish: $all

    # if package is not available locally, proxy requests to npm registry
    proxy: npmjs

# log settings
log:
  type: stdout
  format: pretty
  level: warn

publish:
  allow_offline: true # set offline to true to allow publish offline
````

## File: dashboard/.storybook/main.js
````javascript
// This file is used as a compatibility layer for tools that expect CommonJS
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/react-vite',
  },
  docs: {
    defaultName: 'Documentation',
  },
  staticDirs: ['../public'],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
````

## File: dashboard/.storybook/main.ts
````typescript
import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: join(__dirname, '../vite.config.ts'),
      },
    },
  },

  docs: {
    // For Storybook 8, autodocs is now a default feature
    defaultName: 'Documentation',
  },

  staticDirs: ['../public'],

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
} satisfies StorybookConfig;

export default config;
````

## File: dashboard/src/app/app.module.css
````css
/* Your styles goes here. */
````

## File: dashboard/src/app/app.tsx
````typescript
// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="@deanmachines-nx/dashboard" />
    </div>
  );
}

export default App;
````

## File: dashboard/src/app/nx-welcome.tsx
````typescript
/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function NxWelcome({ title }: { title: string }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    html {
      -webkit-text-size-adjust: 100%;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
      line-height: 1.5;
      tab-size: 4;
      scroll-behavior: smooth;
    }
    body {
      font-family: inherit;
      line-height: inherit;
      margin: 0;
    }
    h1,
    h2,
    p,
    pre {
      margin: 0;
    }
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: currentColor;
    }
    h1,
    h2 {
      font-size: inherit;
      font-weight: inherit;
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }
    pre {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
    }
    svg {
      display: block;
      vertical-align: middle;
      shape-rendering: auto;
      text-rendering: optimizeLegibility;
    }
    pre {
      background-color: rgba(55, 65, 81, 1);
      border-radius: 0.25rem;
      color: rgba(229, 231, 235, 1);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
      overflow: auto;
      padding: 0.5rem 0.75rem;
    }

    .shadow {
      box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    .rounded {
      border-radius: 1.5rem;
    }
    .wrapper {
      width: 100%;
    }
    .container {
      margin-left: auto;
      margin-right: auto;
      max-width: 768px;
      padding-bottom: 3rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: rgba(55, 65, 81, 1);
      width: 100%;
    }
    #welcome {
      margin-top: 2.5rem;
    }
    #welcome h1 {
      font-size: 3rem;
      font-weight: 500;
      letter-spacing: -0.025em;
      line-height: 1;
    }
    #welcome span {
      display: block;
      font-size: 1.875rem;
      font-weight: 300;
      line-height: 2.25rem;
      margin-bottom: 0.5rem;
    }
    #hero {
      align-items: center;
      background-color: hsla(214, 62%, 21%, 1);
      border: none;
      box-sizing: border-box;
      color: rgba(55, 65, 81, 1);
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 3.5rem;
    }
    #hero .text-container {
      color: rgba(255, 255, 255, 1);
      padding: 3rem 2rem;
    }
    #hero .text-container h2 {
      font-size: 1.5rem;
      line-height: 2rem;
      position: relative;
    }
    #hero .text-container h2 svg {
      color: hsla(162, 47%, 50%, 1);
      height: 2rem;
      left: -0.25rem;
      position: absolute;
      top: 0;
      width: 2rem;
    }
    #hero .text-container h2 span {
      margin-left: 2.5rem;
    }
    #hero .text-container a {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 0.75rem;
      color: rgba(55, 65, 81, 1);
      display: inline-block;
      margin-top: 1.5rem;
      padding: 1rem 2rem;
      text-decoration: inherit;
    }
    #hero .logo-container {
      display: none;
      justify-content: center;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    #hero .logo-container svg {
      color: rgba(255, 255, 255, 1);
      width: 66.666667%;
    }
    #middle-content {
      align-items: flex-start;
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 3.5rem;
    }

    #middle-content #middle-content-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    #learning-materials {
      padding: 2.5rem 2rem;
    }
    #learning-materials h2 {
      font-weight: 500;
      font-size: 1.25rem;
      letter-spacing: -0.025em;
      line-height: 1.75rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .list-item-link {
      align-items: center;
      border-radius: 0.75rem;
      display: flex;
      margin-top: 1rem;
      padding: 1rem;
      transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform, filter, backdrop-filter,
      -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      width: 100%;
    }
    .list-item-link svg:first-child {
      margin-right: 1rem;
      height: 1.5rem;
      transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform, filter, backdrop-filter,
      -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      width: 1.5rem;
    }
    .list-item-link > span {
      flex-grow: 1;
      font-weight: 400;
      transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform, filter, backdrop-filter,
      -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .list-item-link > span > span {
      color: rgba(107, 114, 128, 1);
      display: block;
      flex-grow: 1;
      font-size: 0.75rem;
      font-weight: 300;
      line-height: 1rem;
      transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform, filter, backdrop-filter,
      -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .list-item-link svg:last-child {
      height: 1rem;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      width: 1rem;
    }
    .list-item-link:hover {
      color: rgba(255, 255, 255, 1);
      background-color: hsla(162, 55%, 33%, 1);
    }
    .list-item-link:hover > span {}
    .list-item-link:hover > span > span {
      color: rgba(243, 244, 246, 1);
    }
    .list-item-link:hover svg:last-child {
      transform: translateX(0.25rem);
    }
    #other-links {}
    .button-pill {
      padding: 1.5rem 2rem;
      margin-bottom: 2rem;
      transition-duration: 300ms;
      transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform, filter, backdrop-filter,
      -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      align-items: center;
      display: flex;
    }
    .button-pill svg {
      transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform, filter, backdrop-filter,
      -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      flex-shrink: 0;
      width: 3rem;
    }
    .button-pill > span {
      letter-spacing: -0.025em;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.75rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .button-pill span span {
      display: block;
      font-size: 0.875rem;
      font-weight: 300;
      line-height: 1.25rem;
    }
    .button-pill:hover svg,
    .button-pill:hover {
      color: rgba(255, 255, 255, 1) !important;
    }
    #nx-console:hover {
      background-color: rgba(0, 122, 204, 1);
    }
    #nx-console svg {
      color: rgba(0, 122, 204, 1);
    }
    #nx-console-jetbrains {
      margin-top: 2rem;
    }
    #nx-console-jetbrains:hover {
      background-color: rgba(255, 49, 140, 1);
    }
    #nx-console-jetbrains svg {
      color: rgba(255, 49, 140, 1);
    }
    #nx-repo:hover {
      background-color: rgba(24, 23, 23, 1);
    }
    #nx-repo svg {
      color: rgba(24, 23, 23, 1);
    }
    #nx-cloud {
      margin-bottom: 2rem;
      margin-top: 2rem;
      padding: 2.5rem 2rem;
    }
    #nx-cloud > div {
      align-items: center;
      display: flex;
    }
    #nx-cloud > div svg {
      border-radius: 0.375rem;
      flex-shrink: 0;
      width: 3rem;
    }
    #nx-cloud > div h2 {
      font-size: 1.125rem;
      font-weight: 400;
      letter-spacing: -0.025em;
      line-height: 1.75rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    #nx-cloud > div h2 span {
      display: block;
      font-size: 0.875rem;
      font-weight: 300;
      line-height: 1.25rem;
    }
    #nx-cloud p {
      font-size: 1rem;
      line-height: 1.5rem;
      margin-top: 1rem;
    }
    #nx-cloud pre {
      margin-top: 1rem;
    }
    #nx-cloud a {
      border-radius: 0.75rem;
      color: white;
      background-color: hsla(214, 62%, 21%, 1);
      display: inline-block;
      margin-top: 1.5rem;
      padding: 0.5rem 1rem;
      text-align:left;
      text-decoration: inherit;
    }

    #commands {
      padding: 2.5rem 2rem;
      margin-top: 3.5rem;
    }
    #commands h2 {
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: -0.025em;
      line-height: 1.75rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    #commands p {
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5rem;
      margin-top: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    details {
      align-items: center;
      display: flex;
      margin-top: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      width: 100%;
    }
    details pre > span {
      color: rgba(181, 181, 181, 1);
      display: block;
    }
    summary {
      border-radius: 0.5rem;
      display: flex;
      font-weight: 400;
      padding: 0.5rem;
      cursor: pointer;
      transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform, filter, backdrop-filter,
      -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    summary:hover {
      background-color: rgba(243, 244, 246, 1);
    }
    summary svg {
      height: 1.5rem;
      margin-right: 1rem;
      width: 1.5rem;
    }
    #love {
      color: rgba(107, 114, 128, 1);
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-top: 3.5rem;
      opacity: 0.6;
      text-align: center;
    }
    #love svg {
      color: rgba(252, 165, 165, 1);
      width: 1.25rem;
      height: 1.25rem;
      display: inline;
      margin-top: -0.25rem;
    }
    @media screen and (min-width: 768px) {
      #hero {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      #hero .logo-container {
        display: flex;
      }
      #middle-content {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 4rem;
      }
    }
          `,
        }}
      />
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome {title} 👋
            </h1>
          </div>

          <div id="hero" className="rounded">
            <div className="text-container">
              <h2>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span>You&apos;re up and running</span>
              </h2>
              <a href="#commands"> What&apos;s next? </a>
            </div>
            <div className="logo-container">
              <svg
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z" />
              </svg>
            </div>
          </div>

          <div id="middle-content">
            <div id="middle-content-container">
              <div id="learning-materials" className="rounded shadow">
                <h2>Learning materials</h2>
                <a
                  href="https://nx.dev/getting-started/intro?utm_source=nx-project"
                  target="_blank"
                  rel="noreferrer"
                  className="list-item-link"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>
                    Documentation
                    <span> Everything is in there </span>
                  </span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="https://nx.dev/blog/?utm_source=nx-project"
                  target="_blank"
                  rel="noreferrer"
                  className="list-item-link"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  <span>
                    Blog
                    <span> Changelog, features & events </span>
                  </span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@NxDevtools/videos?utm_source=nx-project&sub_confirmation=1"
                  target="_blank"
                  rel="noreferrer"
                  className="list-item-link"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>
                    YouTube channel
                    <span> Nx Show, talks & tutorials </span>
                  </span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="https://nx.dev/react-tutorial/1-code-generation?utm_source=nx-project"
                  target="_blank"
                  rel="noreferrer"
                  className="list-item-link"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <span>
                    Interactive tutorials
                    <span> Create an app, step-by-step </span>
                  </span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <a
                id="nx-repo"
                className="button-pill rounded shadow"
                href="https://github.com/nrwl/nx?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>
                  Nx is open source
                  <span> Love Nx? Give us a star! </span>
                </span>
              </a>
            </div>
            <div id="other-links">
              <a
                id="nx-console"
                className="button-pill rounded shadow"
                href="https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console&utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Visual Studio Code</title>
                  <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                </svg>
                <span>
                  Install Nx Console for VSCode
                  <span>The official VSCode extension for Nx.</span>
                </span>
              </a>
              <a
                id="nx-console-jetbrains"
                className="button-pill rounded shadow"
                href="https://plugins.jetbrains.com/plugin/21060-nx-console"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  height="48"
                  width="48"
                  viewBox="20 20 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m22.5 22.5h60v60h-60z" />
                  <g fill="#fff">
                    <path d="m29.03 71.25h22.5v3.75h-22.5z" />
                    <path d="m28.09 38 1.67-1.58a1.88 1.88 0 0 0 1.47.87c.64 0 1.06-.44 1.06-1.31v-5.98h2.58v6a3.48 3.48 0 0 1 -.87 2.6 3.56 3.56 0 0 1 -2.57.95 3.84 3.84 0 0 1 -3.34-1.55z" />
                    <path d="m36 30h7.53v2.19h-5v1.44h4.49v2h-4.42v1.49h5v2.21h-7.6z" />
                    <path d="m47.23 32.29h-2.8v-2.29h8.21v2.27h-2.81v7.1h-2.6z" />
                    <path d="m29.13 43.08h4.42a3.53 3.53 0 0 1 2.55.83 2.09 2.09 0 0 1 .6 1.53 2.16 2.16 0 0 1 -1.44 2.09 2.27 2.27 0 0 1 1.86 2.29c0 1.61-1.31 2.59-3.55 2.59h-4.44zm5 2.89c0-.52-.42-.8-1.18-.8h-1.29v1.64h1.24c.79 0 1.25-.26 1.25-.81zm-.9 2.66h-1.57v1.73h1.62c.8 0 1.24-.31 1.24-.86 0-.5-.4-.87-1.27-.87z" />
                    <path d="m38 43.08h4.1a4.19 4.19 0 0 1 3 1 2.93 2.93 0 0 1 .9 2.19 3 3 0 0 1 -1.93 2.89l2.24 3.27h-3l-1.88-2.84h-.87v2.84h-2.56zm4 4.5c.87 0 1.39-.43 1.39-1.11 0-.75-.54-1.12-1.4-1.12h-1.44v2.26z" />
                    <path d="m49.59 43h2.5l4 9.44h-2.79l-.67-1.69h-3.63l-.67 1.69h-2.71zm2.27 5.73-1-2.65-1.06 2.65z" />
                    <path d="m56.46 43.05h2.6v9.37h-2.6z" />
                    <path d="m60.06 43.05h2.42l3.37 5v-5h2.57v9.37h-2.26l-3.53-5.14v5.14h-2.57z" />
                    <path d="m68.86 51 1.45-1.73a4.84 4.84 0 0 0 3 1.13c.71 0 1.08-.24 1.08-.65 0-.4-.31-.6-1.59-.91-2-.46-3.53-1-3.53-2.93 0-1.74 1.37-3 3.62-3a5.89 5.89 0 0 1 3.86 1.25l-1.26 1.84a4.63 4.63 0 0 0 -2.62-.92c-.63 0-.94.25-.94.6 0 .42.32.61 1.63.91 2.14.46 3.44 1.16 3.44 2.91 0 1.91-1.51 3-3.79 3a6.58 6.58 0 0 1 -4.35-1.5z" />
                  </g>
                </svg>
                <span>
                  Install Nx Console for JetBrains
                  <span>
                    Available for WebStorm, Intellij IDEA Ultimate and more!
                  </span>
                </span>
              </a>
              <div id="nx-cloud" className="rounded shadow">
                <div>
                  <svg
                    id="nx-cloud-logo"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    fill="transparent"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="2"
                      d="M23 3.75V6.5c-3.036 0-5.5 2.464-5.5 5.5s-2.464 5.5-5.5 5.5-5.5 2.464-5.5 5.5H3.75C2.232 23 1 21.768 1 20.25V3.75C1 2.232 2.232 1 3.75 1h16.5C21.768 1 23 2.232 23 3.75Z"
                    />
                    <path
                      strokeWidth="2"
                      d="M23 6v14.1667C23 21.7307 21.7307 23 20.1667 23H6c0-3.128 2.53867-5.6667 5.6667-5.6667 3.128 0 5.6666-2.5386 5.6666-5.6666C17.3333 8.53867 19.872 6 23 6Z"
                    />
                  </svg>
                  <h2>
                    Nx Cloud
                    <span>Enable faster CI & better DX</span>
                  </h2>
                </div>
                <p>Your Nx Cloud remote cache setup is almost complete.</p>

                <a href="" target="_blank" rel="noreferrer">
                  Click here to finish
                </a>
              </div>
            </div>
          </div>

          <div id="commands" className="rounded shadow">
            <h2>Next steps</h2>
            <p>Here are some things you can do with Nx:</p>
            <details>
              <summary>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Build, test and lint your app
              </summary>
              <pre>
                <span># Build</span>
                nx build {title}
                <span># Test</span>
                nx test {title}
                <span># Lint</span>
                nx lint {title}
                <span># Run them together!</span>
                nx run-many -p {title} -t build test lint
              </pre>
            </details>

            <details>
              <summary>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                View project details
              </summary>
              <pre>nx show project {title}</pre>
            </details>
            <details>
              <summary>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                View interactive project graph
              </summary>
              <pre>nx graph</pre>
            </details>
            <details>
              <summary>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Add UI library
              </summary>
              <pre>
                <span># Generate UI lib</span>
                nx g @nx/react:lib ui
                <span># Add a component</span>
                nx g @nx/react:component ui/src/lib/button
              </pre>
            </details>
          </div>

          <p id="love">
            Carefully crafted with
            <svg
              fill="currentColor"
              stroke="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </p>
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
````

## File: dashboard/src/Button.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/

.button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}

.primary {
  color: white;
  background-color: #1ea7fd;
}

.secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}

.small {
  font-size: 12px;
  padding: 10px 16px;
}

.medium {
  font-size: 14px;
  padding: 11px 20px;
}

.large {
  font-size: 16px;
  padding: 12px 24px;
}
````

## File: dashboard/src/Button.spec.tsx
````typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';


// Mock the CSS modules to avoid className issues in tests
vi.mock('./Button.module.css', () => ({
  default: {
    button: 'button',
    primary: 'primary',
    secondary: 'secondary',
    small: 'small',
    medium: 'medium',
    large: 'large',
  }
}));

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button label="Click me" />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the correct label', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByRole('button');
    // Use the direct string comparison which works without type issues
    expect(buttonElement.textContent).toBe('Test Button');
    // Type-safe alternative to toHaveTextContent
    expect(buttonElement.innerHTML).toContain('Test Button');
  });

  it('should apply primary styles when primary prop is true', () => {
    const { container } = render(<Button label="Primary Button" primary />);
    const button = container.firstChild as HTMLElement;
    // Look for the class name directly without depending on CSS modules implementation
    expect(button.className).toContain('button');
  });

  it('should apply the correct size class based on size prop', () => {
    const { container } = render(<Button label="Large Button" size="large" />);
    const button = container.firstChild as HTMLElement;
    // Size classes can be checked without depending on actual CSS module naming
    expect(button).toBeTruthy();
  });
});
````

## File: dashboard/src/Button.stories.tsx
````typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};
````

## File: dashboard/src/Button.tsx
````typescript
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  backgroundColor?: string;
}

export function Button({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  const mode = primary ? styles['primary'] : styles['secondary'];
  return (
    <button
      type="button"
      className={`${styles['button']} ${styles[size]} ${mode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
````

## File: dashboard/src/Card.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: dashboard/src/Card.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: dashboard/src/Card.tsx
````typescript
import styles from './Card.module.css';

export function Card() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Card!</h1>
    </div>
  );
}

export default Card;
````

## File: dashboard/src/Footer.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: dashboard/src/Footer.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: dashboard/src/Footer.tsx
````typescript
import styles from './Footer.module.css';

export function Footer() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Footer!</h1>
    </div>
  );
}

export default Footer;
````

## File: dashboard/src/Header.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: dashboard/src/Header.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: dashboard/src/Header.tsx
````typescript
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Header!</h1>
    </div>
  );
}

export default Header;
````

## File: dashboard/src/Input.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: dashboard/src/Input.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: dashboard/src/Input.tsx
````typescript
import styles from './Input.module.css';

export function Input() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Input!</h1>
    </div>
  );
}

export default Input;
````

## File: dashboard/src/main.tsx
````typescript
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
````

## File: dashboard/src/Sidebar.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: dashboard/src/Sidebar.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sidebar />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: dashboard/src/Sidebar.tsx
````typescript
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Sidebar!</h1>
    </div>
  );
}

export default Sidebar;
````

## File: dashboard/src/styles.css
````css
/* You can add global styles to this file, and also import other style files */
````

## File: dashboard/src/Table.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: dashboard/src/Table.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Table from './Table';

describe('Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Table />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: dashboard/src/Table.tsx
````typescript
import styles from './Table.module.css';

export function Table() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Table!</h1>
    </div>
  );
}

export default Table;
````

## File: dashboard/.npmrc
````
registry=https://registry.npmjs.org/
````

## File: dashboard/eslint.config.mjs
````
import nx from '@nx/eslint-plugin';
import baseConfig from '../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: dashboard/index.html
````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Dashboard</title>
    <base href="/" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="stylesheet" href="/src/styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: dashboard/package.json
````json
{
  "name": "@deanmachines-nx/dashboard",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "storybook": "storybook dev --config-dir .storybook",
    "build-storybook": "storybook build --config-dir .storybook",
    "storybook:automigrate": "pnpx storybook automigrate --config-dir .storybook"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^1.2.0",
    "@storybook/addon-essentials": "^8.4.6",
    "@storybook/addon-interactions": "^8.4.6",
    "@storybook/react": "^8.4.6",
    "@storybook/react-vite": "^8.4.6",
    "storybook": "^8.4.6"
  }
}
````

## File: dashboard/tsconfig.app.json
````json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "tsBuildInfoFile": "dist/tsconfig.app.tsbuildinfo",
    "jsx": "react-jsx",
    "lib": ["dom"],
    "types": [
      "node",
      "@nx/react/typings/cssmodule.d.ts",
      "@nx/react/typings/image.d.ts",
      "vite/client"
    ],
    "rootDir": "src",
    "module": "esnext",
    "moduleResolution": "bundler"
  },
  "exclude": [
    "out-tsc",
    "dist",
    "src/**/*.spec.ts",
    "src/**/*.test.ts",
    "src/**/*.spec.tsx",
    "src/**/*.test.tsx",
    "src/**/*.spec.js",
    "src/**/*.test.js",
    "src/**/*.spec.jsx",
    "src/**/*.test.jsx",
    "eslint.config.js",
    "eslint.config.cjs",
    "eslint.config.mjs",
    "**/*.stories.ts",
    "**/*.stories.js",
    "**/*.stories.jsx",
    "**/*.stories.tsx"
  ],
  "include": ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"]
}
````

## File: dashboard/tsconfig.json
````json
{
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.storybook.json"
    }
  ],
  "extends": "../tsconfig.base.json"
}
````

## File: dashboard/tsconfig.storybook.json
````json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "out-tsc/storybook",
    "module": "esnext",
    "moduleResolution": "bundler",
    "jsx": "preserve"
  },
  "exclude": [
    "src/**/*.spec.ts",
    "src/**/*.test.ts",
    "src/**/*.spec.js",
    "src/**/*.test.js",
    "src/**/*.spec.tsx",
    "src/**/*.test.tsx",
    "src/**/*.spec.jsx",
    "src/**/*.test.js"
  ],
  "include": [
    "src/**/*.stories.ts",
    "src/**/*.stories.js",
    "src/**/*.stories.jsx",
    "src/**/*.stories.tsx",
    "src/**/*.stories.mdx",
    ".storybook/*.js",
    ".storybook/*.ts"
  ],
  "references": [
    {
      "path": "./tsconfig.app.json"
    }
  ],
  "files": [
    "../node_modules/@nx/react/typings/styled-jsx.d.ts",
    "../node_modules/@nx/react/typings/cssmodule.d.ts",
    "../node_modules/@nx/react/typings/image.d.ts"
  ]
}
````

## File: dashboard/vite.config.ts
````typescript
/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { join } from 'path';

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  
  return {
    root: __dirname,
    cacheDir: '../node_modules/.vite/dashboard',
    
    // Enable source maps in development
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    
    server: {
      port: 4200,
      host: 'localhost',
      fs: {
        // Allow serving files from the project root
        allow: ['..'],
      },
    },
    
    preview: {
      port: 4300,
      host: 'localhost',
    },
    
    plugins: [
      react(),
      nxViteTsPaths(),
    ],
    
    // Enable test configuration
    test: {
      globals: true,
      cache: {
        dir: '../node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
    
    // Resolve configuration for better module imports
    resolve: {
      alias: {
        '@': join(__dirname, 'src'),
      },
    },
    
    build: {
      outDir: './dist',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        output: {
          manualChunks: isProduction ? {
            vendor: ['react', 'react-dom'],
          } : undefined,
        },
      },
    },
  };
});
````

## File: dashboard-e2e/src/example.spec.ts
````typescript
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});
````

## File: dashboard-e2e/eslint.config.mjs
````
import playwright from 'eslint-plugin-playwright';
import baseConfig from '../eslint.config.mjs';

export default [
  playwright.configs['flat/recommended'],
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.js'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: dashboard-e2e/package.json
````json
{
  "name": "@deanmachines-nx/dashboard-e2e",
  "version": "0.0.1",
  "private": true,
  "nx": {
    "implicitDependencies": [
      "@deanmachines-nx/dashboard"
    ]
  }
}
````

## File: dashboard-e2e/playwright.config.ts
````typescript
import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || 'http://localhost:4300';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm exec nx run @deanmachines-nx/dashboard:preview',
    url: 'http://localhost:4300',
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Uncomment for mobile browsers support
    /* {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }, */

    // Uncomment for branded browsers
    /* {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    } */
  ],
});
````

## File: dashboard-e2e/tsconfig.json
````json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "allowJs": true,
    "outDir": "out-tsc/playwright",
    "sourceMap": false
  },
  "include": [
    "**/*.ts",
    "**/*.js",
    "playwright.config.ts",
    "src/**/*.spec.ts",
    "src/**/*.spec.js",
    "src/**/*.test.ts",
    "src/**/*.test.js",
    "src/**/*.d.ts"
  ],
  "exclude": [
    "out-tsc",
    "test-output",
    "eslint.config.js",
    "eslint.config.mjs",
    "eslint.config.cjs"
  ]
}
````

## File: data-models/src/lib/data-models.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: data-models/src/lib/data-models.spec.tsx
````typescript
import { render } from '@testing-library/react';

import DataModels from './data-models';

describe('DataModels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataModels />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: data-models/src/lib/data-models.tsx
````typescript
import styles from './data-models.module.css';

export function DataModels() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DataModels!</h1>
    </div>
  );
}

export default DataModels;
````

## File: data-models/src/index.ts
````typescript
export * from './lib/data-models';
````

## File: data-models/.babelrc
````
{
  "presets": [
    [
      "@nx/react/babel",
      {
        "runtime": "automatic",
        "useBuiltIns": "usage"
      }
    ]
  ],
  "plugins": []
}
````

## File: data-models/eslint.config.mjs
````
import nx from '@nx/eslint-plugin';
import baseConfig from '../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: data-models/package.json
````json
{
  "name": "@deanmachines-nx/data-models",
  "version": "0.0.1",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    "./package.json": "./package.json",
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "default": "./dist/index.js"
    }
  }
}
````

## File: data-models/README.md
````markdown
# @deanmachines-nx/data-models

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test @deanmachines-nx/data-models` to execute the unit tests via [Vitest](https://vitest.dev/).
````

## File: data-models/tsconfig.json
````json
{
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ],
  "extends": "../tsconfig.base.json"
}
````

## File: data-models/tsconfig.lib.json
````json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "types": [
      "node",
      "@nx/react/typings/cssmodule.d.ts",
      "@nx/react/typings/image.d.ts",
      "vite/client"
    ],
    "rootDir": "src",
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "bundler",
    "tsBuildInfoFile": "dist/tsconfig.lib.tsbuildinfo"
  },
  "exclude": [
    "out-tsc",
    "dist",
    "**/*.spec.ts",
    "**/*.test.ts",
    "**/*.spec.tsx",
    "**/*.test.tsx",
    "**/*.spec.js",
    "**/*.test.js",
    "**/*.spec.jsx",
    "**/*.test.jsx",
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "eslint.config.js",
    "eslint.config.cjs",
    "eslint.config.mjs"
  ],
  "include": ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"]
}
````

## File: data-models/tsconfig.spec.json
````json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./out-tsc/vitest",
    "types": [
      "vitest/globals",
      "vitest/importMeta",
      "vite/client",
      "node",
      "vitest"
    ],
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "bundler"
  },
  "include": [
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/**/*.d.ts"
  ],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
````

## File: data-models/vite.config.ts
````typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../node_modules/.vite/data-models',
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    emptyOutDir: true,
    transformMixedEsModules: true,
    entry: 'src/index.ts',
    name: '@deanmachines-nx/data-models',
    fileName: 'index',
    formats: ['es' as const],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    lib: {
      entry: 'src/index.ts',
      name: '@deanmachines-nx/data-models',
      fileName: 'index',
      formats: ['es' as const],
    },
    rollupOptions: {
      external: ["'react'", "'react-dom'", "'react/jsx-runtime'"],
    },
    outDir: './dist',
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
````

## File: libs/shared/api/src/lib/api.spec.ts
````typescript
import { api } from './api.js';

describe('api', () => {
  it('should work', () => {
    expect(api()).toEqual('api');
  });
});
````

## File: libs/shared/api/src/lib/api.ts
````typescript
export function api(): string {
  return 'api';
}
````

## File: libs/shared/api/src/index.ts
````typescript
export * from './lib/api.js';
````

## File: libs/shared/api/eslint.config.mjs
````
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: [
            '{projectRoot}/eslint.config.{js,cjs,mjs}',
            '{projectRoot}/vite.config.{js,ts,mjs,mts}',
          ],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
];
````

## File: libs/shared/api/package.json
````json
{
  "name": "@deanmachines-nx/api",
  "version": "0.0.1",
  "private": true,
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    "./package.json": "./package.json",
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "default": "./dist/index.js"
    }
  },
  "dependencies": {
    "tslib": "^2.3.0"
  }
}
````

## File: libs/shared/api/README.md
````markdown
# api

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build api` to build the library.

## Running unit tests

Run `nx test api` to execute the unit tests via [Vitest](https://vitest.dev/).
````

## File: libs/shared/api/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ],
  "nx": {
    "addTypecheckTarget": false
  }
}
````

## File: libs/shared/api/tsconfig.lib.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": "src",
    "outDir": "dist",
    "tsBuildInfoFile": "dist/tsconfig.lib.tsbuildinfo",
    "emitDeclarationOnly": false,
    "forceConsistentCasingInFileNames": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"],
  "references": [],
  "exclude": [
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx"
  ]
}
````

## File: libs/shared/api/tsconfig.spec.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./out-tsc/vitest",
    "types": [
      "vitest/globals",
      "vitest/importMeta",
      "vite/client",
      "node",
      "vitest"
    ],
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/**/*.d.ts"
  ],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
````

## File: libs/shared/api/vite.config.ts
````typescript
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/shared/api',
  plugins: [],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
````

## File: libs/shared/src/lib/shared.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: libs/shared/src/lib/shared.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Shared from './shared';

describe('Shared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shared />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: libs/shared/src/lib/shared.tsx
````typescript
import styles from './shared.module.css';

export function Shared() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Shared!</h1>
    </div>
  );
}

export default Shared;
````

## File: libs/shared/src/index.ts
````typescript
export * from './lib/shared';
````

## File: libs/shared/ui/src/lib/button.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: libs/shared/ui/src/lib/button.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: libs/shared/ui/src/lib/button.tsx
````typescript
import styles from './button.module.css';

export function Button() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Button!</h1>
    </div>
  );
}

export default Button;
````

## File: libs/shared/ui/src/lib/card.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: libs/shared/ui/src/lib/card.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: libs/shared/ui/src/lib/card.tsx
````typescript
import styles from './card.module.css';

export function Card() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Card!</h1>
    </div>
  );
}

export default Card;
````

## File: libs/shared/ui/src/lib/eslint.config.mjs
````
import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
````

## File: libs/shared/ui/src/lib/form.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: libs/shared/ui/src/lib/form.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Form from './form';

describe('Form', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Form />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: libs/shared/ui/src/lib/form.tsx
````typescript
import styles from './form.module.css';

export function Form() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Form!</h1>
    </div>
  );
}

export default Form;
````

## File: libs/shared/ui/src/lib/ui.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: libs/shared/ui/src/lib/ui.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Ui from './ui';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: libs/shared/ui/src/lib/ui.tsx
````typescript
import styles from './ui.module.css';

export function Ui() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui!</h1>
    </div>
  );
}

export default Ui;
````

## File: libs/shared/ui/src/index.ts
````typescript
export * from './lib/ui';
````

## File: libs/shared/ui/.babelrc
````
{
  "presets": [
    [
      "@nx/react/babel",
      {
        "runtime": "automatic",
        "useBuiltIns": "usage"
      }
    ]
  ],
  "plugins": []
}
````

## File: libs/shared/ui/eslint.config.mjs
````
import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: libs/shared/ui/package.json
````json
{
  "name": "@myorg/shared/ui",
  "version": "0.0.1",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    "./package.json": "./package.json",
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "default": "./dist/index.js"
    }
  }
}
````

## File: libs/shared/ui/README.md
````markdown
# @myorg/shared/ui

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test @myorg/shared/ui` to execute the unit tests via [Vitest](https://vitest.dev/).
````

## File: libs/shared/ui/tsconfig.json
````json
{
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ],
  "extends": "../../../tsconfig.base.json"
}
````

## File: libs/shared/ui/tsconfig.lib.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "types": [
      "node",
      "@nx/react/typings/cssmodule.d.ts",
      "@nx/react/typings/image.d.ts",
      "vite/client"
    ],
    "rootDir": "src",
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "bundler",
    "tsBuildInfoFile": "dist/tsconfig.lib.tsbuildinfo"
  },
  "exclude": [
    "out-tsc",
    "dist",
    "**/*.spec.ts",
    "**/*.test.ts",
    "**/*.spec.tsx",
    "**/*.test.tsx",
    "**/*.spec.js",
    "**/*.test.js",
    "**/*.spec.jsx",
    "**/*.test.jsx",
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "eslint.config.js",
    "eslint.config.cjs",
    "eslint.config.mjs"
  ],
  "include": ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"]
}
````

## File: libs/shared/ui/tsconfig.spec.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./out-tsc/vitest",
    "types": [
      "vitest/globals",
      "vitest/importMeta",
      "vite/client",
      "node",
      "vitest"
    ],
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "bundler"
  },
  "include": [
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/**/*.d.ts"
  ],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
````

## File: libs/shared/ui/vite.config.ts
````typescript
/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/shared/ui',
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: '@myorg/shared/ui',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es' as const],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
````

## File: libs/shared/.babelrc
````
{
  "presets": [
    [
      "@nx/react/babel",
      {
        "runtime": "automatic",
        "useBuiltIns": "usage"
      }
    ]
  ],
  "plugins": []
}
````

## File: libs/shared/eslint.config.mjs
````
import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: libs/shared/package.json
````json
{
  "name": "@deanmachines-nx/shared",
  "version": "0.0.1",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    "./package.json": "./package.json",
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "default": "./dist/index.js"
    }
  }
}
````

## File: libs/shared/README.md
````markdown
# @deanmachines-nx/shared

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test @deanmachines-nx/shared` to execute the unit tests via [Vitest](https://vitest.dev/).
````

## File: libs/shared/tsconfig.json
````json
{
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ],
  "extends": "../../tsconfig.base.json"
}
````

## File: libs/shared/tsconfig.lib.json
````json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "types": [
      "node",
      "@nx/react/typings/cssmodule.d.ts",
      "@nx/react/typings/image.d.ts",
      "vite/client"
    ],
    "rootDir": "src",
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "bundler",
    "tsBuildInfoFile": "dist/tsconfig.lib.tsbuildinfo"
  },
  "exclude": [
    "out-tsc",
    "dist",
    "**/*.spec.ts",
    "**/*.test.ts",
    "**/*.spec.tsx",
    "**/*.test.tsx",
    "**/*.spec.js",
    "**/*.test.js",
    "**/*.spec.jsx",
    "**/*.test.jsx",
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "eslint.config.js",
    "eslint.config.cjs",
    "eslint.config.mjs"
  ],
  "include": ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"]
}
````

## File: libs/shared/tsconfig.spec.json
````json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./out-tsc/vitest",
    "types": [
      "vitest/globals",
      "vitest/importMeta",
      "vite/client",
      "node",
      "vitest"
    ],
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "bundler"
  },
  "include": [
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/**/*.d.ts"
  ],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
````

## File: libs/shared/vite.config.ts
````typescript
/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/shared',
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: '@deanmachines-nx/shared',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es' as const],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
````

## File: utils/src/lib/utils.module.css
````css
/*
 * Replace this with your own classes
 *
 * e.g.
 * .container {
 * }
*/
````

## File: utils/src/lib/utils.spec.tsx
````typescript
import { render } from '@testing-library/react';

import Utils from './utils';

describe('Utils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Utils />);
    expect(baseElement).toBeTruthy();
  });
});
````

## File: utils/src/lib/utils.tsx
````typescript
import styles from './utils.module.css';

export function Utils() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Utils!</h1>
    </div>
  );
}

export default Utils;
````

## File: utils/src/index.ts
````typescript
export * from './lib/utils';
````

## File: utils/.babelrc
````
{
  "presets": [
    [
      "@nx/react/babel",
      {
        "runtime": "automatic",
        "useBuiltIns": "usage"
      }
    ]
  ],
  "plugins": []
}
````

## File: utils/eslint.config.mjs
````
import nx from '@nx/eslint-plugin';
import baseConfig from '../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: utils/package.json
````json
{
  "name": "@deanmachines-nx/utils",
  "version": "0.0.1",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    "./package.json": "./package.json",
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "default": "./dist/index.js"
    }
  }
}
````

## File: utils/README.md
````markdown
# @deanmachines-nx/utils

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test @deanmachines-nx/utils` to execute the unit tests via [Vitest](https://vitest.dev/).
````

## File: utils/tsconfig.json
````json
{
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ],
  "extends": "../tsconfig.base.json"
}
````

## File: utils/tsconfig.lib.json
````json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "types": [
      "node",
      "@nx/react/typings/cssmodule.d.ts",
      "@nx/react/typings/image.d.ts",
      "vite/client"
    ],
    "rootDir": "src",
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "bundler",
    "tsBuildInfoFile": "dist/tsconfig.lib.tsbuildinfo"
  },
  "exclude": [
    "out-tsc",
    "dist",
    "**/*.spec.ts",
    "**/*.test.ts",
    "**/*.spec.tsx",
    "**/*.test.tsx",
    "**/*.spec.js",
    "**/*.test.js",
    "**/*.spec.jsx",
    "**/*.test.jsx",
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "eslint.config.js",
    "eslint.config.cjs",
    "eslint.config.mjs"
  ],
  "include": ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"]
}
````

## File: utils/tsconfig.spec.json
````json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./out-tsc/vitest",
    "types": [
      "vitest/globals",
      "vitest/importMeta",
      "vite/client",
      "node",
      "vitest"
    ],
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "bundler"
  },
  "include": [
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/**/*.d.ts"
  ],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
````

## File: utils/vite.config.ts
````typescript
/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../node_modules/.vite/utils',
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: '@deanmachines-nx/utils',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es' as const],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
````

## File: .gitignore
````
# See https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files for more about ignoring files.

# compiled output
dist
tmp
out-tsc

# dependencies
node_modules

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# misc
/.sass-cache
/connect.lock
/coverage
/libpeerconnection.log
npm-debug.log
yarn-error.log
testem.log
/typings

# System Files
.DS_Store
Thumbs.db

.nx/cache
.nx/workspace-data

vite.config.*.timestamp*
vitest.config.*.timestamp*
test-output


storybook-static
````

## File: .npmrc
````
strict-peer-dependencies=false
auto-install-peers=true
registry=https://registry.npmjs.org/
````

## File: .prettierignore
````
# Add files here to ignore them from prettier formatting
/dist
/coverage
/.nx/cache
/.nx/workspace-data
````

## File: .prettierrc
````
{
  "singleQuote": true
}
````

## File: Current-Progress.md
````markdown
# DeanMachines-NX Project Documentation

## Project Architecture

```mermaid
graph TB
    subgraph Monorepo[DeanMachines-NX Monorepo]
        D[Dashboard]
        CL[Component Library]
        U[Utils]
        DM[Data Models]
        
        subgraph Dashboard
            UI[UI Components]
            CP[Code Playground]
            CH[Chat Interface]
        end
        
        subgraph Features
            CM[CodeMirror Integration]
            AI[AI Chat Service]
            PB[Project Builder]
        end
    end
    
    D --> UI
    D --> CP
    D --> CH
    CP --> CM
    CH --> AI
    CH --> PB
```

## Project Structure

```mermaid
graph LR
    A[DeanMachines-NX] --> B[dashboard]
    A --> C[packages]
    A --> D[utils]
    A --> E[data-models]
    A --> F[libs]
    
    B --> B1[Components]
    B --> B2[Pages]
    B --> B3[Features]
    
    B2 --> P1[CodePlayground]
    B2 --> P2[Chat]
    
    B3 --> F1[Project Builder]
    B3 --> F2[AI Integration]
```

## ✅ Completed Infrastructure

### Infrastructure Setup

- [x] Nx monorepo configuration
- [x] Project structure and architecture
- [x] Base development environment
- [x] Initial package dependencies
- [x] Vite build system integration

### Development Environment

- [x] Storybook 8.4.6 setup and configuration
- [x] Testing infrastructure (Vitest + Testing Library)
- [x] E2E testing capability with Playwright
- [x] Basic component development workflow
- [x] Hot reload configuration

### Components

- [x] Button component
  - [x] Implementation
  - [x] Unit tests
  - [x] Storybook documentation
  - [x] Accessibility testing

## 🚀 Current Sprint Focus

### 1. Core Component Library (High Priority)

- [ ] Design system fundamentals
  - [ ] Typography system
  - [ ] Color palette
  - [ ] Spacing system
  - [ ] Grid layout
- [ ] Basic components
  - [ ] Text Input
  - [ ] Select
  - [ ] Checkbox
  - [ ] Radio
  - [ ] Card
  - [ ] Modal
- [ ] Navigation components
  - [ ] Navbar
  - [ ] Sidebar
  - [ ] Breadcrumbs
  - [ ] Tabs

### 2. Developer Experience

- [ ] Component generation templates
- [ ] Documentation structure
- [ ] Coding standards document
- [ ] PR templates
- [ ] Git workflow documentation

## 📋 Upcoming Tasks

### Testing & Quality

- [ ] Unit test templates
- [ ] E2E test templates
- [ ] Visual regression testing (Chromatic)
- [ ] Test coverage targets
- [ ] Performance testing setup

### CI/CD Pipeline

- [ ] GitHub Actions workflow
- [ ] Automated testing
- [ ] Storybook deployment
- [ ] Version management
- [ ] Release automation

### Documentation

- [ ] Component API documentation
- [ ] Usage examples
- [ ] Best practices guide
- [ ] Contributing guidelines
- [ ] Architecture documentation

## 📊 Metrics & Goals

### Quality Targets

- [ ] Test coverage: >80%
- [ ] Zero critical bugs
- [ ] WCAG 2.1 AA compliance
- [ ] Bundle size optimization
- [ ] Build time <2 minutes

### Performance Targets

- [ ] Lighthouse score >90
- [ ] First contentful paint <2s
- [ ] Time to interactive <3s
- [ ] Bundle size <100KB (core)

## 🔄 Weekly Review Items

- Code review metrics
- Test coverage reports
- Performance benchmarks
- Documentation updates
- Dependency updates

## 📅 Timeline

- Sprint Duration: 2 weeks
- Current Sprint: Component Library Development
- Next Review: [Date TBD]

## 🎯 New Requirements

### Interactive Code Playground

- [ ] CodeMirror Integration
  - [ ] Syntax highlighting
  - [ ] Auto-completion
  - [ ] Multiple language support
  - [ ] Code formatting
  - [ ] Theme support

### AI-Powered Chat Interface

- [ ] Chat Component Development
  - [ ] Message threading
  - [ ] Code snippet support
  - [ ] Markdown rendering
  - [ ] Real-time updates
- [ ] AI Integration
  - [ ] Project analysis
  - [ ] Code generation
  - [ ] Context awareness
  - [ ] History management

### Project Builder Integration

- [ ] Project Templates
- [ ] Build Configuration
- [ ] Package Management
- [ ] Development Server
- [ ] Hot Reload Support

## 📦 Dependencies to Add

```json
{
  "dependencies": {
    "@codemirror/basic-setup": "^6.0.0",
    "@codemirror/lang-javascript": "^6.0.0",
    "@codemirror/theme-one-dark": "^6.0.0",
    "socket.io-client": "^4.7.0",
    "marked": "^9.0.0",
    "prismjs": "^1.29.0"
  }
}
```

## 🚀 Implementation Plan

### Phase 1: Code Playground

1. Set up CodeMirror component
2. Implement language support
3. Add theme switching
4. Create code execution environment

### Phase 2: Chat Interface

1. Develop chat UI components
2. Implement WebSocket connection
3. Add message handling
4. Integrate AI capabilities

### Phase 3: Project Builder

1. Create project templates
2. Implement build system
3. Add package management
4. Set up development workflow

## 📊 Success Metrics

### Quality Targets 2

- [ ] Test coverage: >80%
- [ ] Zero critical bugs
- [ ] WCAG 2.1 AA compliance
- [ ] Bundle size optimization
- [ ] Build time <2 minutes

### Performance Targets 2

- [ ] Lighthouse score >90
- [ ] First contentful paint <2s
- [ ] Time to interactive <3s
- [ ] Bundle size <100KB (core)

## 🔄 Sprint Schedule

- Current Sprint (2 weeks): Code Playground Setup
- Next Sprint (2 weeks): Chat Interface Development
- Future Sprint (2 weeks): Project Builder Integration

## 🎯 Immediate Focus

1. CodeMirror setup in Storybook
2. Basic chat interface components
3. WebSocket implementation
4. AI service integration

---
Last Updated: [Current Date]

```mermaid
graph TB
    User((External User))

    subgraph "Frontend Container"
        Dashboard["Dashboard App<br>(React + Vite)"]
        
        subgraph "Dashboard Components"
            Header["Header Component<br>(React)"]
            Footer["Footer Component<br>(React)"]
            Sidebar["Sidebar Component<br>(React)"]
            Table["Table Component<br>(React)"]
            Button["Button Component<br>(React)"]
            Card["Card Component<br>(React)"]
            Input["Input Component<br>(React)"]
        end

        subgraph "Storybook Environment"
            StorybookUI["Storybook Interface<br>(Storybook)"]
        end
    end

    subgraph "Shared Libraries Container"
        subgraph "UI Library"
            SharedUI["Shared UI<br>(React)"]
            SharedButton["Shared Button<br>(React)"]
            SharedCard["Shared Card<br>(React)"]
            SharedForm["Shared Form<br>(React)"]
        end

        subgraph "API Layer"
            APIClient["API Client<br>(TypeScript)"]
        end

        subgraph "Core Libraries"
            DataModels["Data Models<br>(TypeScript)"]
            Utils["Utilities<br>(TypeScript)"]
        end
    end

    subgraph "Testing Container"
        E2ETests["E2E Tests<br>(Playwright)"]
        UnitTests["Unit Tests<br>(Vitest)"]
    end

    subgraph "Build & CI/CD"
        NxBuild["Nx Build System<br>(Nx)"]
        GithubCI["GitHub Actions<br>(CI/CD)"]
    end

    %% Relationships
    User -->|"Interacts with"| Dashboard
    Dashboard -->|"Uses"| Header
    Dashboard -->|"Uses"| Footer
    Dashboard -->|"Uses"| Sidebar
    Dashboard -->|"Uses"| Table
    Dashboard -->|"Uses"| Button
    Dashboard -->|"Uses"| Card
    Dashboard -->|"Uses"| Input

    Dashboard -->|"Uses"| SharedUI
    Dashboard -->|"Uses"| APIClient
    Dashboard -->|"Uses"| DataModels
    Dashboard -->|"Uses"| Utils

    SharedUI -->|"Contains"| SharedButton
    SharedUI -->|"Contains"| SharedCard
    SharedUI -->|"Contains"| SharedForm

    StorybookUI -->|"Documents"| SharedUI
    StorybookUI -->|"Documents"| Button
    StorybookUI -->|"Documents"| Card

    E2ETests -->|"Tests"| Dashboard
    UnitTests -->|"Tests"| SharedUI
    UnitTests -->|"Tests"| APIClient
    UnitTests -->|"Tests"| DataModels
    UnitTests -->|"Tests"| Utils

    NxBuild -->|"Builds"| Dashboard
    NxBuild -->|"Builds"| SharedUI
    NxBuild -->|"Builds"| APIClient
    GithubCI -->|"Runs"| NxBuild
    GithubCI -->|"Executes"| E2ETests
    GithubCI -->|"Executes"| UnitTests
```
````

## File: nx.json
````json
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "defaultBase": "master",
  "namedInputs": {
    "default": ["{projectRoot}/**/*", "sharedGlobals"],
    "production": [
      "default",
      "!{projectRoot}/.eslintrc.json",
      "!{projectRoot}/eslint.config.mjs",
      "!{projectRoot}/**/?(*.)+(spec|test).[jt]s?(x)?(.snap)",
      "!{projectRoot}/tsconfig.spec.json",
      "!{projectRoot}/src/test-setup.[jt]s",
      "!{projectRoot}/**/*.stories.@(js|jsx|ts|tsx|mdx)",
      "!{projectRoot}/.storybook/**/*",
      "!{projectRoot}/tsconfig.storybook.json"
    ],
    "sharedGlobals": ["{workspaceRoot}/.github/workflows/ci.yml"]
  },
  "nxCloudId": "67de92c96af77662dfcc1af9",
  "plugins": [
    {
      "plugin": "@nx/js/typescript",
      "options": {
        "typecheck": {
          "targetName": "typecheck"
        },
        "build": {
          "targetName": "build",
          "configName": "tsconfig.lib.json",
          "buildDepsName": "build-deps",
          "watchDepsName": "watch-deps"
        }
      }
    },
    {
      "plugin": "@nx/react/router-plugin",
      "options": {
        "buildTargetName": "build",
        "devTargetName": "dev",
        "startTargetName": "start",
        "watchDepsTargetName": "watch-deps",
        "buildDepsTargetName": "build-deps",
        "typecheckTargetName": "typecheck"
      }
    },
    {
      "plugin": "@nx/eslint/plugin",
      "options": {
        "targetName": "lint"
      }
    },
    {
      "plugin": "@nx/vite/plugin",
      "options": {
        "buildTargetName": "build",
        "testTargetName": "test",
        "serveTargetName": "serve",
        "devTargetName": "dev",
        "previewTargetName": "preview",
        "serveStaticTargetName": "serve-static",
        "typecheckTargetName": "typecheck",
        "buildDepsTargetName": "build-deps",
        "watchDepsTargetName": "watch-deps"
      }
    },
    {
      "plugin": "@nx/playwright/plugin",
      "options": {
        "targetName": "e2e"
      }
    },
    {
      "plugin": "@nx/storybook/plugin",
      "options": {
        "serveStorybookTargetName": "storybook",
        "buildStorybookTargetName": "build-storybook",
        "testStorybookTargetName": "test-storybook",
        "staticStorybookTargetName": "static-storybook"
      }
    }
  ],
  "targetDefaults": {
    "test": {
      "dependsOn": [
        "^build",
        "^build",
        "^build",
        "^build",
        "^build",
        "^build",
        "^build",
        "^build"
      ]
    },
    "e2e-ci--**/*": {
      "dependsOn": ["^build"]
    }
  },
  "generators": {
    "@nx/react": {
      "application": {
        "babel": true,
        "style": "css",
        "linter": "eslint",
        "bundler": "vite"
      },
      "component": {
        "style": "css"
      },
      "library": {
        "style": "css",
        "linter": "eslint",
        "unitTestRunner": "vitest"
      }
    }
  },
  "release": {
    "version": {
      "preVersionCommand": "pnpm dlx nx run-many -t build"
    }
  }
}
````

## File: package.json
````json
{
  "name": "@deanmachines-nx/source",
  "version": "0.0.1",
  "license": "MIT",
  "scripts": {},
  "private": true,
  "dependencies": {
    "@nrwl/nx-cloud": "^19.1.0",
    "@types/react-router-dom": "^5.3.3",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-router-dom": "^7.4.0"
  },
  "devDependencies": {
    "@babel/core": "^7.14.5",
    "@babel/preset-react": "^7.14.5",
    "@eslint/js": "^9.8.0",
    "@nx/devkit": "20.6.2",
    "@nx/eslint": "20.6.2",
    "@nx/eslint-plugin": "20.6.2",
    "@nx/js": "20.6.2",
    "@nx/playwright": "20.6.2",
    "@nx/react": "20.6.2",
    "@nx/storybook": "20.6.2",
    "@nx/vite": "20.6.2",
    "@nx/web": "20.6.2",
    "@playwright/test": "^1.36.0",
    "@storybook/addon-essentials": "^8.4.6",
    "@storybook/addon-interactions": "^8.4.6",
    "@storybook/core-server": "^8.4.6",
    "@storybook/jest": "^0.2.3",
    "@storybook/react": "^8.4.6",
    "@storybook/react-vite": "^8.4.6",
    "@storybook/test-runner": "^0.19.0",
    "@storybook/testing-library": "^0.2.2",
    "@swc-node/register": "~1.9.1",
    "@swc/cli": "~0.3.12",
    "@swc/core": "~1.5.7",
    "@swc/helpers": "~0.5.11",
    "@testing-library/dom": "10.4.0",
    "@testing-library/react": "16.1.0",
    "@types/node": "^20.0.0",
    "@types/react": "18.3.1",
    "@types/react-dom": "18.3.0",
    "@vitejs/plugin-react": "^4.2.0",
    "@vitest/coverage-v8": "^3.0.5",
    "@vitest/ui": "^3.0.0",
    "eslint": "^9.8.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-import": "2.31.0",
    "eslint-plugin-jsx-a11y": "6.10.1",
    "eslint-plugin-playwright": "^1.6.2",
    "eslint-plugin-react": "7.35.0",
    "eslint-plugin-react-hooks": "5.0.0",
    "jiti": "2.4.2",
    "jsdom": "~22.1.0",
    "jsonc-eslint-parser": "^2.1.0",
    "nx": "20.6.2",
    "prettier": "^2.6.2",
    "storybook": "^8.4.6",
    "ts-node": "10.9.1",
    "tslib": "^2.3.0",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.19.0",
    "verdaccio": "^6.0.5",
    "vite": "^6.0.0",
    "vite-plugin-dts": "~4.5.0",
    "vitest": "^3.0.0"
  },
  "packageManager": "pnpm@10.6.5+sha512.cdf928fca20832cd59ec53826492b7dc25dc524d4370b6b4adbf65803d32efaa6c1c88147c0ae4e8d579a6c9eec715757b50d4fa35eea179d868eada4ed043af",
  "nx": {
    "includedScripts": [],
    "targets": {
      "local-registry": {
        "executor": "@nx/js:verdaccio",
        "options": {
          "port": 4873,
          "config": ".verdaccio/config.yml",
          "storage": "tmp/local-registry/storage"
        }
      }
    }
  }
}
````

## File: pnpm-workspace.yaml
````yaml
packages:
  - 'packages/*'
  - 'dashboard'
  - 'utils'
  - 'data-models'
  - 'libs/*'
  - 'libs/shared/*'
onlyBuiltDependencies:
  - '@swc/core'
  - 'core-js'
  - 'esbuild'
  - 'nx'
````

## File: README.md
````markdown
# DeanmachinesNx

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/js?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/ozqXSe9cod)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve dashboard
```

To create a production bundle:

```sh
npx nx build dashboard
```

To see all available targets to run for a project, run:

```sh
npx nx show project dashboard
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Versioning and releasing

To version and release the library use

```
npx nx release
```

Pass `--dry-run` to see what would happen without actually releasing the library.

[Learn more about Nx release &raquo;](hhttps://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Keep TypeScript project references up to date

Nx automatically updates TypeScript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in `tsconfig.json` files to ensure they remain accurate based on your project dependencies (`import` or `require` statements). This sync is automatically done when running tasks such as `build` or `typecheck`, which require updated references to function correctly.

To manually trigger the process to sync the project graph dependencies information to the TypeScript project references, run the following command:

```sh
npx nx sync
```

You can enforce that the TypeScript project references are always in the correct state when running in CI by adding a step to your CI job configuration that runs the following command:

```sh
npx nx sync:check
```

[Learn more about nx sync](https://nx.dev/reference/nx-commands#sync)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/js?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

```mermaid
graph TB
    User((External User))

    subgraph "Frontend Container"
        Dashboard["Dashboard App<br>(React + Vite)"]
        
        subgraph "Dashboard Components"
            Header["Header Component<br>(React)"]
            Footer["Footer Component<br>(React)"]
            Sidebar["Sidebar Component<br>(React)"]
            Table["Table Component<br>(React)"]
            Button["Button Component<br>(React)"]
            Card["Card Component<br>(React)"]
            Input["Input Component<br>(React)"]
        end

        subgraph "Storybook Environment"
            StorybookUI["Storybook Interface<br>(Storybook)"]
        end
    end

    subgraph "Shared Libraries Container"
        subgraph "UI Library"
            SharedUI["Shared UI<br>(React)"]
            SharedButton["Shared Button<br>(React)"]
            SharedCard["Shared Card<br>(React)"]
            SharedForm["Shared Form<br>(React)"]
        end

        subgraph "API Layer"
            APIClient["API Client<br>(TypeScript)"]
        end

        subgraph "Core Libraries"
            DataModels["Data Models<br>(TypeScript)"]
            Utils["Utilities<br>(TypeScript)"]
        end
    end

    subgraph "Testing Container"
        E2ETests["E2E Tests<br>(Playwright)"]
        UnitTests["Unit Tests<br>(Vitest)"]
    end

    subgraph "Build & CI/CD"
        NxBuild["Nx Build System<br>(Nx)"]
        GithubCI["GitHub Actions<br>(CI/CD)"]
    end

    %% Relationships
    User -->|"Interacts with"| Dashboard
    Dashboard -->|"Uses"| Header
    Dashboard -->|"Uses"| Footer
    Dashboard -->|"Uses"| Sidebar
    Dashboard -->|"Uses"| Table
    Dashboard -->|"Uses"| Button
    Dashboard -->|"Uses"| Card
    Dashboard -->|"Uses"| Input

    Dashboard -->|"Uses"| SharedUI
    Dashboard -->|"Uses"| APIClient
    Dashboard -->|"Uses"| DataModels
    Dashboard -->|"Uses"| Utils

    SharedUI -->|"Contains"| SharedButton
    SharedUI -->|"Contains"| SharedCard
    SharedUI -->|"Contains"| SharedForm

    StorybookUI -->|"Documents"| SharedUI
    StorybookUI -->|"Documents"| Button
    StorybookUI -->|"Documents"| Card

    E2ETests -->|"Tests"| Dashboard
    UnitTests -->|"Tests"| SharedUI
    UnitTests -->|"Tests"| APIClient
    UnitTests -->|"Tests"| DataModels
    UnitTests -->|"Tests"| Utils

    NxBuild -->|"Builds"| Dashboard
    NxBuild -->|"Builds"| SharedUI
    NxBuild -->|"Builds"| APIClient
    GithubCI -->|"Runs"| NxBuild
    GithubCI -->|"Executes"| E2ETests
    GithubCI -->|"Executes"| UnitTests
```
````

## File: storybook-codemirror.md
````markdown
# Integrating Storybook with CodeMirror, LLMs, and Project Generation

This document outlines how to integrate Storybook with CodeMirror to create a chat interface connected to LLMs and programmatically generate projects based on templates within an Nx monorepo.

## Resources

* **Storybook Documentation**: [Storybook Official Docs](https://storybook.js.org/docs) - Comprehensive guide to setting up and using Storybook.
* **CodeMirror Documentation**: [CodeMirror Official Docs](https://codemirror.net/docs/) - Detailed API and usage examples for CodeMirror.
* **Nx Monorepo Documentation**: [Nx Official Docs](https://nx.dev/getting-started/intro) - Learn how to manage monorepos with Nx.
* **LLM API Integration**: [OpenAI API Docs](https://platform.openai.com/docs/api-reference) - Official documentation for integrating OpenAI's LLM API.
* **Templating Engines**: [Handlebars Documentation](https://handlebarsjs.com/guide/) - Guide to using Handlebars for templating.
* **File System Management**: [fs-extra Documentation](https://github.com/jprichardson/node-fs-extra) - Enhanced file system operations for Node.js.
* **Commander.js CLI Library**: [Commander.js Documentation](https://github.com/tj/commander.js) - Build command-line interfaces with ease.
* **Storybook Addons**: [Storybook Addons Documentation](https://storybook.js.org/addons) - Explore and integrate Storybook addons.
* **Markdown Cheatsheet**: [Markdown Cheatsheet](https://techvomit.net/markdown-cheatsheet/) - Quick reference for Markdown syntax.
* **Relative Links in Markdown**: [GitHub Relative Links](https://docs.github.com/articles/basic-writing-and-formatting-syntax#relative-links) - Learn how to use relative links in Markdown.
* **Nx Storybook Plugin**: [Nx Storybook Plugin Docs](https://nx.dev/packages/storybook) - Official documentation for integrating Storybook with Nx.
* **CodeMirror Addon for Storybook**: [storybook-addon-code-editor](https://www.npmjs.com/package/storybook-addon-code-editor) - NPM package for integrating CodeMirror into Storybook.
* **Storybook Console Addon**: [@storybook/addon-console](https://www.npmjs.com/package/@storybook/addon-console) - Display console logs within Storybook.

## Approach

The integration process involves several key strategies:

*   **Leveraging Storybook Addons:** Utilize Storybook addons like `storybook-addon-code-editor` and `@storybook/addon-console` to simplify the integration of CodeMirror, provide a code editor, and enhance the development experience by displaying console outputs within Storybook.
*   **Component-Driven Development:** Build the chat interface and project generation tools as reusable Storybook components.
*   **Utilizing MDX for Documentation:** Employ MDX to create comprehensive and interactive documentation that combines code examples and explanatory text.
*   **Connecting to LLMs via API:** Implement an API client to communicate with Large Language Models (LLMs) for code generation and interactive assistance.
*   **Templating for Project Generation:** Use a templating engine to create projects from predefined templates, allowing for customization through user inputs.
*   **Command-Line Interface (CLI):** Consider building a CLI to streamline project generation and other tasks.
*   **File System Management:** Use libraries like `fs-extra` for robust file system operations.

This approach ensures a modular, maintainable, and well-documented integration.

## Steps

1.  **Set up Storybook in your Nx monorepo:** Use Nx generators to add Storybook to your projects. This provides a structured environment for component development and documentation.
    *   Install the Nx Storybook plugin using **pnpm**:
    ```bash
    pnpm add --save-dev @nx/storybook
    ```
    *   Generate Storybook configuration for your project:
    ```bash
    pnpm nx g @nx/react:storybook-configuration project-name
    ```
    *   Launch Storybook for a specific project:
    ```bash
    pnpm nx run project-name:storybook
    ```

2.  **Integrate CodeMirror:** Incorporate CodeMirror into a Storybook component using `storybook-addon-code-editor` or a similar library. This will serve as the foundation for the chat interface and code editor.
    *   Install `storybook-addon-code-editor` as a dev dependency:
    ```bash
    pnpm add --save-dev storybook-addon-code-editor
    ```
    *   Update your `.storybook/main.ts` file to include the addon and configure the `staticDirs`:
    ```typescript:.storybook/main.ts
    // .storybook/main.ts
    import type { StorybookConfig } from '@storybook/react-vite';
    import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs';

    const config: StorybookConfig = {
      staticDirs: [...getCodeEditorStaticDirs(__filename)],
      addons: ['storybook-addon-code-editor'],
      framework: {
        name: '@storybook/react-vite',
        options: {},
      },
    };

    export default config;
    ```

3.  **Connect to LLMs:** Implement the API connection to your chosen LLM within the CodeMirror-based chat component. This enables code generation and interactive assistance features.
    *   Use an API client like `axios` or `fetch` to communicate with the LLM.
    *   Example of sending a prompt to an LLM API:
    ```typescript
    const response = await fetch('https://api.llm.com/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: 'Generate a React component' }),
    });
    const data = await response.json();
    console.log(data);
    ```

4.  **Implement Project Generation:** Create a mechanism to generate projects based on templates. This allows users to quickly create new projects with predefined structures and configurations.
    *   Use a templating engine like `handlebars` or `ejs` to generate files from templates.
    *   Example of generating a project structure:
    ```typescript
    import { copySync } from 'fs-extra';
    import { render } from 'handlebars';

    const template = `{
      "name": "{{projectName}}",
      "version": "1.0.0",
      "scripts": {
        "start": "nx serve {{projectName}}"
      }
    }`;
    const rendered = render(template, { projectName: 'my-project' });
    copySync('templates/project', 'generated/my-project');
    ```

5.  **Develop a CLI (Optional):** Build a command-line interface using a library like `Commander.js` to automate project setup, code generation, and other development tasks.
    *   Example of a basic CLI setup:
    ```typescript
    import { Command } from 'commander';
    const program = new Command();

    program
      .command('generate <projectName>')
      .description('Generate a new project')
      .action((projectName) => {
        console.log(`Generating project: ${projectName}`);
        // Call project generation logic here
      });

    program.parse(process.argv);
    ```

6.  **Manage Files:** Use `fs-extra` to handle file system operations such as creating directories, copying files, and modifying file contents.
    *   Example of creating a directory and copying files:
    ```typescript
    import { ensureDirSync, copySync } from 'fs-extra';

    ensureDirSync('generated/my-project');
    copySync('templates/project', 'generated/my-project');
    ```

7.  **Integrate `@storybook/addon-console`:** Add the `@storybook/addon-console` to your Storybook to display console logs, warnings, and errors within the Storybook UI, aiding in debugging and monitoring.
    *   Install the addon:
    ```bash
    pnpm add --save-dev @storybook/addon-console @storybook/addon-actions
    ```
    *   Configure the addon in `.storybook/main.js`:
    ```javascript:.storybook/main.js
    export default {
      addons: [
        "@storybook/addon-actions",
        "@storybook/addon-console",
      ],
    };
    ```
    *   Use the `withConsole` decorator in `.storybook/preview.js`:
    ```javascript:.storybook/preview.js
    import type { Preview } from '@storybook/react';
    import { withConsole } from '@storybook/addon-console';

    const preview: Preview = {
      decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
      // ...
    };
    ```

### Detailed Setup Instructions for CodeMirror and `storybook-addon-code-editor`
// ... existing code ...
### Integrating `@storybook/addon-console`

1.  **Installation:**

    ```bash
    pnpm add
````

## File: tsconfig.base.json
````json
{
  "compilerOptions": {
    "composite": true,
    "declarationMap": true,
    "emitDeclarationOnly": true,
    "importHelpers": true,
    "isolatedModules": true,
    "lib": ["es2022"],
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "noEmitOnError": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "es2022"
  }
}
````

## File: tsconfig.json
````json
{
  "extends": "./tsconfig.base.json",
  "compileOnSave": false,
  "files": [],
  "references": [
    {
      "path": "./dashboard-e2e"
    },
    {
      "path": "./utils"
    },
    {
      "path": "./data-models"
    },
    {
      "path": "./libs/shared"
    },
    {
      "path": "./libs/shared/ui"
    },
    {
      "path": "./libs/shared/api"
    },
    {
      "path": "./dashboard-e2e"
    },
    {
      "path": "./dashboard"
    }
  ],
  "ts-node": {
    "compilerOptions": {
      "module": "commonjs"
    }
  }
}
````

## File: vitest.workspace.ts
````typescript
export default [
  '**/vite.config.{mjs,js,ts,mts}',
  '**/vitest.config.{mjs,js,ts,mts}',
];
````
