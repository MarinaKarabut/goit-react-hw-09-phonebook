import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navbar from './client/Navbar/components/Navbar';

import { getCurrentUser } from './redux/auth/auth-operations';
import PrivetRoute from './client/components/PrivetRoute';
import PublicRoute from './client/components/PublicRoute';

import Loader from './client/components/Loader';

const HomePage = lazy(() => import('./client/HomePage'));
const ContactsPage = lazy(() => import('./client/Contacts/pages/ContactsPage'));
const RegisterPage = lazy(() => import('./client/auth/pages/RegisterPage'));
const LoginPage = lazy(() => import('./client/auth/pages/LoginPage'));
const NotFoundPage = lazy(() => import('./client/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();

  dispatch(getCurrentUser());

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PublicRoute
            exact
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterPage}
          />
          <PublicRoute
            exact
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginPage}
          />
          <PrivetRoute
            exact
            path="/contacts"
            component={ContactsPage}
            redirectTo="/login"
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
