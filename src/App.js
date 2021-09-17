import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/Store'

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ReviewMessage from './pages/ReviewMessage';
import News from './pages/News';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/contact-us" exact component={ContactUs}/>
            <Route path="/review-message" exact component={ReviewMessage}/>
            <Route path="/news" exact component={News}/>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    
    // <ReviewMessage/>
  );
}


export default App;
