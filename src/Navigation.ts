import {createStaticNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Dashboard} from './pages/Dashboard';
import {Accounts} from './pages/Accounts';

export enum PATHS {
  DASHBOARD = 'Dashboard',
  ACCOUNTS = 'Accounts',
}

const RootStack = createNativeStackNavigator({
  initialRouteName: PATHS.DASHBOARD,
  screens: {
    [PATHS.DASHBOARD]: Dashboard,
    [PATHS.ACCOUNTS]: Accounts,
  },
});

export type Routes = NativeStackNavigationProp<{
  [PATHS.DASHBOARD]: undefined;
  [PATHS.ACCOUNTS]: undefined;
}>;

export const Navigation = createStaticNavigation(RootStack);
