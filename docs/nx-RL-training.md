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