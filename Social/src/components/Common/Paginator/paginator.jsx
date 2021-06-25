import React, {useState} from "react";
import styles from "./Paginator.module.css";

let Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber *  portionSize;

    return (
        <div className={styles.wrapperSpan}>
            { portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)} }>PREV</button> }

            {
                pages.filter(page => page >= leftPortionNumber && page <= rightPortionNumber)
                    .map(page => {
                    return <span key = {page} onClick={() => {
                        onPageChanged(page);
                    }} className={currentPage === page ? styles.selectedPage : styles.page}>{page}</span>
                })
            }
            { portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)} }>NEXT</button> }
        </div>
    )
}

export default Paginator;