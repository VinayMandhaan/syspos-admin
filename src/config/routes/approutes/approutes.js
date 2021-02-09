import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import PrivateRoute from '../protectedRoute'

//Importing Screens

// User is not Authenticated
import Login from '../../../screens/auth/login/login'

// User is Authenticated 
import Dashboard from '../../../screens/authed/dashboard/index'
import Pos from '../../../screens/authed/pos/index'
import Dine from '../../../screens/authed/dine/index'
import Kds from '../../../screens/authed/kds/index'
// Sales
import Invoices from '../../../screens/authed/sales/invoices/index'
import Orders from '../../../screens/authed/sales/orders/index'
import OrderDetails from '../../../screens/authed/sales/orders/order-details'
import InvoiceDetails from '../../../screens/authed/sales/invoices/invoice-details'
// =====
// Reporting
import ReportingSales from '../../../screens/authed/reporting/sales/index'
import ReportingProducts from '../../../screens/authed/reporting/products/index'
import ReportingMaterials from '../../../screens/authed/reporting/materials/index'
import ReportingOrders from '../../../screens/authed/reporting/orders/index'
import ReportingCharts from '../../../screens/authed/reporting/charts/index'
// =====
import ReportingKpi from '../../../screens/authed/reporting-kpi/index'

// Products
import Products from '../../../screens/authed/products/products/index'
import AddOn from '../../../screens/authed/products/add-on/index'
import Categories from '../../../screens/authed/products/categories/index'
import Materials from '../../../screens/authed/products/materials/index'
// =====
import Inventry from '../../../screens/authed/inventry/index'
import InventryDetails from '../../../screens/authed/inventry/inventry-details/index'

import Suppliers from '../../../screens/authed/suppliers/index'
import Users from '../../../screens/authed/users/index'
import Config from '../../../screens/authed/config/index'
import Auth from '../../../screens/authed/auth/index'


function AppRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/pos" component={Pos} />
            <PrivateRoute exact path="/dine" component={Dine} />
            <PrivateRoute exact path="/kds" component={Kds} />
            {/* Sales */}
            <PrivateRoute exact path="/sales/invoices" component={Invoices} />
            <PrivateRoute exact path="/sales/orders" component={Orders} />
            <PrivateRoute exact path="/sales/orders/:id" component={OrderDetails} />
            <PrivateRoute exact path="/sales/invoices/:id" component={InvoiceDetails} />
            {/* ==== */}
            {/* Reporting */}
            <PrivateRoute exact path="/reporting/sales" component={ReportingSales} />
            <PrivateRoute exact path="/reporting/products" component={ReportingProducts} />
            <PrivateRoute exact path="/reporting/materials" component={ReportingMaterials} />
            <PrivateRoute exact path="/reporting/orders" component={ReportingOrders} />
            <PrivateRoute exact path="/reporting/charts" component={ReportingCharts} />
            {/* ==== */}
            <PrivateRoute exact path="/reporting-kpi" component={ReportingKpi} />
            {/* Products */}
            <PrivateRoute exact path="/products/products" component={Products} />
            <PrivateRoute exact path="/products/add-on" component={AddOn} />
            <PrivateRoute exact path="/products/categories" component={Categories} />
            <PrivateRoute exact path="/products/materials" component={Materials} />
            {/* ==== */}
            <PrivateRoute exact path="/inventory" component={Inventry} />
            <PrivateRoute exact path="/inventory/:name" component={InventryDetails} />
            <PrivateRoute exact path="/suppliers" component={Suppliers} />
            <PrivateRoute exact path="/users" component={Users} />
            <PrivateRoute exact path="/config" component={Config} />
            <PrivateRoute exact path="/auth" component={Auth} />
        </Switch>
    )
}

export default AppRoutes 