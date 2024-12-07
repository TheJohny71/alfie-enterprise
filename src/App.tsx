// No need to import React if never directly referenced, thanks to new JSX transform.
// If you have React 17+ and are using react-jsx runtime, omit `import React from 'react';`

import WelcomePage from '@/components/ui/WelcomePage';

function App() {
  return <WelcomePage />;
}

export default App;
