import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Bitcoin from '../pages/Bitcoin';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/bitcoin" exact component={Bitcoin} />
    </Switch>
);

export default Routes;