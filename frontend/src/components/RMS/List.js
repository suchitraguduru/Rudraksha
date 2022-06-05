import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
// To use routing functionalities
import { Link } from 'react-router-dom';
//  import '../index.css';
import EmployeeService from './Services';
import "./List.css"


var divStyle = {
    margin: '0 4%',
};
var rlstyle={
    backgroundColor:"black",
    color:"white",
    padding:"20"
 };

class ListEmployee extends Component {

    constructor(props) {
        super(props);
        //  this.employeeService = new EmployeeService();
        this.state = {
            employees: []
        }
        //  this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount = () => {
        this.getEmployeeList();
    }

    // To get all the employees
    getEmployeeList() {
        axios.get('http://localhost:5000/record')
            .then((response) => {
                console.log(response);
                this.setState({
                    employees: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //  // To delete any employee
    //  deleteEmployee(empid) {
    //  this.employeeService.deleteEmployee(empid);
    //  this.getEmployeeList();
    //  }

    render() {
        const { employees } = this.state;
        return (
            <>
                <div className='RmsReportMainHeading'>
                    <img src={require('../../Images/RWFLOGO.png')} />
                    <h2>Rudrakshaa Welfare</h2>
                    <h3>A Section 8 Company (Non Profit Organization)</h3>
                    <h3>Under Companies Act 2013, Ministry of Corporate Affairs, Govt. of INDIA</h3>
                </div>
                <hr/>

                <div className='RmsReportHeading'>
                    <h3> Guest-Employee Reception Report</h3>

                </div>

                <div style={divStyle}>
                    <Table  responsive>
                        <thead  style={rlstyle} className='RmsReportTableHead'>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Contact No.</th>
                                <th>No. of visitors</th>
                                <th>Objective</th>
                                <th>Date</th>
                                <th>Visit Time</th>
                                <th>Employee ID</th>
                                <th>Personal Items</th>
                                <th>Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees && employees.map((result, i) => {
                                    return (
                                        <tr >
                                            <td>{i + 1}</td>
                                            <td>{result.RMSUserName}</td>
                                            <td>{result.RMSUserGender}</td>
                                            <td>{result.RMSUserContact}</td>
                                            <td>{result.RMSUserGuest}</td>
                                            <td>{result.RMSUserObjective}</td>
                                            <td>{result.RMSUserDate}</td>
                                            <td>{result.RMSUserTime}</td>
                                            <td>{result.RMSUserEmployee}</td>
                                            <td>{result.RMSUserPI}</td>
                                            <td>{result.RMSUserremark}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </>
        );
    }
}

export default ListEmployee;

