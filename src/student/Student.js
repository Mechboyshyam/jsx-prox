import './Student.css'
function Student(pros) {
    return (
        <div className="student">
            <h1>Hello {pros.studentName}</h1>
            <h3>You can contact me, on just one click - on my number - {pros.mobile}</h3>
        </div>
    )
}

export default Student;