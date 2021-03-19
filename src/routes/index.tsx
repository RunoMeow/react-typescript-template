import { Redirect, Route, withRouter, Switch } from 'react-router';

import PageTest from '@/pages/PageTest';

const Routes = withRouter(({}) => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/home" />
    </Route>
    <Route path="/home" component={PageTest} />
    <Route path="/test" component={PageTest} />
  </Switch>
));

export default Routes;
