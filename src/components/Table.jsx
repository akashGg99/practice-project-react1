


export default function Table({data}) {
console.log(data)
    return (
        <div>
            <p>FirstName - {data[0]}</p>
            <p>LastName - {data[1]}</p>
            <p>Mobile No. - {data[2]}</p>
            <p>Address - {data[3]}</p>
        </div>
    )
}

