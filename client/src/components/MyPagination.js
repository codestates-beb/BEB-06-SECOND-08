// import Pagination from 'react-bootstrap/Pagination';

// export default function MyPagination({total, current, onChangePage}) {

//     let items = []
//     if(current > 1) {
//         items.push(<Pagination.Prev key="prev" onclick={() => onChangePage(current - 1)} />)
//     }
//     for (let page = 1; page <= total; page++) {
//         items.push(
//             <Pagination.Item key={page} data-page={page} active={page === current} onclick={() => onChangePage(page)}>
//                 {page}
//             </Pagination.Item>
//         )
//     }

//     if (current < total) {
//         items.push(<Pagination.Next key="next" onclick={() => onChangePage(current + 1)}/>)
//     }

//     return (
//         <Pagination>{items}</Pagination>
//     )
// }