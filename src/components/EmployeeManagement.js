import { useState } from "react"

const EmployeeForm = ({onSubmit = () => {}, disabled = true }) => (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name" required/>
        <input type="text" name="surname" placeholder="Surname" required />
        <button type="submit" disabled={disabled}>Submit</button>
    </form>
)

const EmployeeList = ({employees = [], removeEmployee}) => (
    <table>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Remove</th>
        </tr>
       {console.log(employees, removeEmployee)}
        {employees.map(({id, name, surname}) => (
            <tr key={id}>
                <td >{name}</td>
                <td>{surname}</td>
                <td><button onClick={() => removeEmployee(id)}>Usuń</button></td>
            </tr>
        ))}
    </table>
)

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState([]) 
    const addEmployee = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const newEmployee = {
            id: Date.now(),
            name: formData.get("name"),
            surname: formData.get("surname")
        }
        setEmployees([...employees, newEmployee])
    }

    const removeEmployee = (id) => setEmployees(employees.filter(employee => employee.id !== id))

    return (
        <div className="App-employees">
            <EmployeeForm onSubmit={addEmployee} disabled={employees.length > 5} />
            <EmployeeList employees={employees} removeEmployee={removeEmployee} />
        </div>
    )
}

export default EmployeeManagement
