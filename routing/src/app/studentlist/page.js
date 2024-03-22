import Link from 'next/link';
export default function StudentList() {
    const studentNames = ['Ram', 'Sita', 'Lakshman', 'Hanuma'];
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {studentNames.map((name) => (
                    <li key={name}>
                        <Link href={`/studentlist/${name}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
