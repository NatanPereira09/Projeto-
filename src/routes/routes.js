import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../views/Home';
import Produtos from '../views/Produtos';
import Usuario from '../views/Usuario';
import Login from '../views/Login';

const Routes = () => (
    <BrowserRouter>
        <Route path= "/dashboard" component={Home} />
        <Route path= "/produtos" component={Produtos} />
        <Route path= "/usuario" component={Usuario } />
        <Route path= "/" component={Login} exact />
    </BrowserRouter>
)

export default Routes;