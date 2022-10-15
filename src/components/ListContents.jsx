const ListContents = ({ request }) => {
    return (
        <ul className="flex flex-col p-2 gap-2">
            {request.map(req => (
                <li className="flex gap-5" key={req.id}>
                    <span className="font-bold text-2xl">*</span>
                    <p>{JSON.stringify(req)}</p>
                </li>
            ))}
        </ul>
    )
}

export default ListContents