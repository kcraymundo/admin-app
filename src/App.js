import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
// import { Routes, Route } from 'react-router-dom';

import { Topbar, Sidebar } from './view/global';
// import Dashboard from './view/dashboard';
// import Team from './view/team';
// import Invoices from './view/invoices';
// import Contacts from './view/contacts';
// import Bar from './view/bar';
// import Line from './view/line';
// import Pie from './view/pie';
// import FAQ from './view/faq';  
// import Geography from './view/geography';
// import Calendar from './view/calendar';

function App() {
  const [colorMode, theme] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <main className='content'>
              <Topbar />
              {/* <Sidebar />
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/invoices" element={<Invoices/>}/>
                <Route path="/faq" element={<FAQ/>}/>
                <Route path="/bar" element={<Bar/>}/>
                <Route path="/line" element={<Line/>}/>
                <Route path="/pie" element={<Pie/>}/>
                <Route path="/geography" element={<Geography/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
              </Routes> */}
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;