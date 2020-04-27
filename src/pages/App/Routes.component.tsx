import React, { FC, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Lazy from 'components/Lazy/Lazy.component';
import NotFound from 'pages/NotFoundPage/NotFoundPage.component';

const AskPage = lazy(() => import('pages/Ask/Ask.component'));

const Routes: FC<{}> = () => (
    <Lazy>
        <Switch>
            <Route path='/' component={AskPage} />
            <Route component={NotFound} />
        </Switch>
    </Lazy>
);

export default Routes;
