import babyNameController from '../controllers/babyname.controller.js';
import express from 'express';

const routes = app => {
    app.post("/find", babyNameController.find);
    // app.post('/findChaldean', babyNameController.findChaldean);
};

export default routes;