import Row from './Row'

const TableContents = ({ items }) => {
    return (
        <table>
            <tbody>
                {items.map(item => (
                    <Row key={item.id} item={item} />
                ))}
            </tbody>
        </table>
    )
}

export default TableContents