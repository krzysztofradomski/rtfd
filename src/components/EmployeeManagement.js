import { useState } from "react"

const EmployeeForm = ({onSubmit = () => {}, disabled = true }) => (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Imię" required/>
        <input type="text" name="surname" placeholder="Nazwisko" required />
        <button type="submit" disabled={disabled}>Dodaj</button>
    </form>
)

const EmployeeList = ({employees = [], removeEmployee  = () => {}}) => (
    <table>
        <thead>
            <tr><td colSpan="3">Pracownicy</td></tr>
        </thead>
        <tbody>
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Usuń</th>
            </tr>
            {employees.map(({id, name, surname}) => (
                <tr key={id}>
                    <td >{name}</td>
                    <td>{surname}</td>
                    <td><button onClick={() => removeEmployee(id)}>Usuń</button></td>
                </tr>
            ))}
        </tbody>
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
        event.target.reset()
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
