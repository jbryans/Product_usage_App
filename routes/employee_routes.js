const express = require('express')
const EMPLOYEESController = require('../controllers/employees')
const router = express.Router()

router.get('/EMPLOYEES', EMPLOYEESController.getAllEmployees)
router.get('/EMPLOYEES/:id', EMPLOYEESController.createEmployee)
router.post('/EMPLOYEES', EMPLOYEESController.createEmployee)
router.put('/EMPLOYEES/:id', EMPLOYEESController.updateEmployeeByID)
router.delete('/EMPLOYEES/:first_name', EMPLOYEESController.deleteEmployeeByID)

module.exports = router

// getAllEmployees,
// createEmployee,
// createEmployee,
// updateEmployeeByID,
// deleteEmployeeByID
