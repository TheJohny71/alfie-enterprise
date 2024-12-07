// Removed `import React from 'react';` since it's not needed if we never refer to React directly.
// With the modern JSX transform, this is no longer required for JSX files.

import WelcomePage from '@/components/ui/WelcomePage';

function App() {
  return <WelcomePage />;
}

export default App;
