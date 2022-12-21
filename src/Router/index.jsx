import React from 'react'
import MyDocuments from '../Components/MyDocuments/MyDocuments'
import Profile from '../Components/Profile/Profile'
import Subscription from '../Components/Subscription/Subscription'
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Signin from "../Components/Auth/Signin/Signin";
import Signup from "../Components/Auth/Signup/Signup";
import Dashboard from "../Components/Dashboard/Dashboard";
import Invoice from "../Components/Pages/Invoice/Create/Invoice";
import Bill from "../Components/Pages/Bills/Create/Bill";
import Qoute from "../Components/Pages/Qoute/Create/Qoute";
import PurchaseOrder from "../Components/Pages/PurchaseOrder/Create/PurchaseOrder";
import Sidebar from "../Components/Sidebar/Sidebar";
import AccessBar from "../Components/AccessBar/AccessBar";
import ViewInvoice from '../Components/Pages/Invoice/View/Invoice'
import ViewBill from "../Components/Pages/Bills/View/Bill";
import ViewQoute from "../Components/Pages/Qoute/View/Qoute";
import ViewPurchase from "../Components/Pages/PurchaseOrder/View/Purchase"
import MyReports from "../Components/Report/MyReport"
import Help from "../Components/Help";

function index() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/auth/register" element={<Signup />} />
            <Route
                path="/dashboard"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <Dashboard />
                    </>
                }
            />
            <Route
                path="/pages/myInvoice"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <Invoice />
                    </>
                }
            />
            <Route
                path="/pages/myBill"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <Bill />
                    </>
                }
            />
            <Route
                path="/pages/myQoute"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <Qoute />
                    </>
                }
            />
            <Route
                path="/pages/myPurchaseOrder"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <PurchaseOrder />
                    </>
                }
            />
            <Route
                path="/pages/myInvoices"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <MyDocuments />
                    </>
                }
            />
            <Route
                path="/pages/myInvoices/viewInvoice/:id"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <ViewInvoice />
                    </>
                }
            />
            <Route
                path="/pages/myBills/viewBill/:id"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <ViewBill />
                    </>
                }
            />
            <Route
                path="/pages/myQoutes/viewQoute/:id"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <ViewQoute />
                    </>
                }
            />
            <Route
                path="/pages/myPurchases/viewPurchase/:id"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <ViewPurchase />
                    </>
                }
            />
            <Route
                path="/pages/profile"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <Profile />
                    </>
                }
            />
            <Route
                path="/pages/subscriptions"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <Subscription />
                    </>
                }
            />
            <Route
                path="/pages/help"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <Help />
                    </>
                }
            />
            <Route
                path="/pages/myReports"
                element={
                    <>
                        <Sidebar />
                        <AccessBar />
                        <MyReports />
                    </>
                }
            />
        </Routes>
    )
}

export default index