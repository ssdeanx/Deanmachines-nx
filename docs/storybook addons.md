
# Storybook Addons Analysis

This document provides an overview of the Storybook addons that are planned for installation in the project. It's designed to be used with GitHub Copilot, providing context for code completion and generation.

## Planned Addons

The following addons are slated for installation:

	pnpm install -D @storybook/addon-themes
	pnpm install -D @storybook/addon-storysource
	pnpm install -D storybook-dark-mode
	pnpm install -D @storybook/addon-a11y
	pnpm install -D @storybook/addon-console
	pnpm install -D storybook-addon-swc
	pnpm install -D storybook-css-modules
	pnpm install -D @jls-digital/storybook-addon-code
	pnpm install -D @storybook/addon-designs
	pnpm install -D @storybook/addon-actions
	pnpm install -D @storybook/addon-docs
	pnpm install -D @storybook/addon-controls
	pnpm install -D storybook-react-context
	pnpm install -D @dreamworld/addon-redux
	pnpm install -D storybook-addon-playroom
	pnpm install -D @storybook/addon-viewport
	pnpm install -D @storybook/addon-links
	pnpm install -D @storybook/addon-toolbars
	pnpm install -D chromatic

Here's a breakdown of each addon and its purpose:

1.  **`@storybook/addon-themes`**: Allows switching between different themes in the Storybook UI.

2.  **`@storybook/addon-storysource`**: Displays the source code of your stories within the Storybook interface.

3.  **`storybook-dark-mode`**: Provides a toggle to switch between light and dark modes for the Storybook UI itself.

4.  **`@storybook/addon-a11y`**: Helps you test the accessibility of your components.

5.  **`@storybook/addon-console`**: Captures and displays `console.log`, `console.warn`, and `console.error` calls within the Storybook UI.

    *   **Relevant Documentation:** [@storybook/addon-console](https://www.npmjs.com/package/@storybook/addon-console)
```

```

 
    // .storybook/main.js
    export default {
      addons: [
        "@storybook/addon-actions",
        "@storybook/addon-console",
      ],
    };

    // preview.js
    import type { Preview } from '@storybook/react';
    import { withConsole } from '@storybook/addon-console';

    const preview: Preview = {
      decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
    // ...
    };
    
6.  **`storybook-addon-swc`**: Integrates the SWC (Speedy Web Compiler) bundler with Storybook.

7.  **`storybook-css-modules`**: Enables the use of CSS Modules with Storybook.

8.  **`@jls-digital/storybook-addon-code`**: Shows code and documentation side-by-side.

9.  **`@storybook/addon-designs`**: Allows you to embed Figma designs directly into your Storybook.

10. **`@storybook/addon-actions`**: Automatically logs actions triggered by your components.

11. **`@storybook/addon-docs`**: Provides tools for creating rich documentation for your components using MDX.

12. **`@storybook/addon-controls`**: Allows you to interact with component props dynamically in the Storybook UI.

13. **`storybook-react-context`**: Facilitates the use of React Context within your Storybook stories.

14. **`@dreamworld/addon-redux`**: Integrates Redux with Storybook.

15. **`storybook-addon-playroom`**: Allows to create multiple component states and show it in the storybook UI.

16. **`@storybook/addon-viewport`**: Lets you test your components at different screen sizes and orientations.

17. **`@storybook/addon-links`**: Enables navigation between stories.

18. **`@storybook/addon-toolbars`**: Provides a way to create custom toolbars in the Storybook UI.

19. **`chromatic`**: Chromatic is a visual testing and review platform built by the Storybook team.
```
