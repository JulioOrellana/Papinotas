import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import App from './src/App';
import store from './src/lib/store';

export default function Main() {
    return (
        <StoreProvider store={store}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </StoreProvider>

    );
}

AppRegistry.registerComponent('Tarea', () => App);
