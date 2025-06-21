import { useSDK } from '@contentful/app-sdk';
import { useAutoResizer } from '@contentful/app-sdk';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import LayoutBuilder from './components/LayoutBuilder';

export default function App() {
  const sdk = useSDK();
  useAutoResizer();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LayoutBuilder sdk={sdk} />
      </PersistGate>
    </Provider>
  );
}