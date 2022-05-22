import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Sidebar from './components/Sidebar';
import RightBar from './components/RightBar';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          bgcolor={'background.default'}
          color={'text.primary'}
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
