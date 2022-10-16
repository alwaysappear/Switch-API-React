import Row from './Row'

const TableContents = ({ items }) => {
    return (
        <div className='table-container'>
            <table>
                <tbody>
                    {items.map(item => (
                        <Row key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableContents