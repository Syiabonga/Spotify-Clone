import React from 'react';
import HomeScreen from  './screens/home';
import DiscoveryScreen from  './screens/discovery';
import SearchScreen from  './screens/search';
import AlbumScreen from  './screens/album';
import FavoritesScreen from  './screens/favorites';
import { Switch, Route} from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route exact patch='/' component={HomeScreen}/>
        <Route exact patch='/discovery' component={DiscoveryScreen}/>
        <Route exact patch='/search' component={SearchScreen}/>
        <Route exact patch='/album/:id' component={AlbumScreen}/>
        <Route exact patch='/favorites' component={FavoritesScreen}/>
    </Switch>
)

export default Routes;