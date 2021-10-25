import EmployeesManagement from './EmployeeManagement'

const Container = () => (<section className="App-container flexed"><Aside></Aside></section>)

const Aside = () => (<aside className="aside flexed">E</aside>)

export default function Main() {
    return (
        <main className="App-main">
            <Container />
            <EmployeesManagement />
        </main>
    )
}