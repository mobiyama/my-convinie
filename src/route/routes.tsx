import { Route, Routes as Switch } from 'react-router-dom';
import { Home } from '../components/pages/home';
import { Path } from './path';
import { Login } from '../components/pages/login';
import { Setting } from '../components/pages/setting';
export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path={Path.login} element={<Login />} />
        <Route path={Path.setting} element={<Setting />} />
        <Route path={Path.home} element={<Home />} />
      </Switch>
    </div>
  );
};
