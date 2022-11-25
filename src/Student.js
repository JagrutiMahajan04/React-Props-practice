import "./Student.css";

function Student({studentName,fruit}){
    return (
        <div className ="student-container">
            <h1>Hello Student{studentName}</h1>
            <h1>You Like {fruit}</h1>
        </div>

    )
}
 export default Student;