import { render } from '@testing-library/react';

import DataModels from './data-models';

describe('DataModels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataModels />);
    expect(baseElement).toBeTruthy();
  });
});
