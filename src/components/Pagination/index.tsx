import React, { memo, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { ArrowLeft, ArrowRight } from '../../../public/images/icons'

const PAG_NUMBERS = 4

const OwnPagination = ({ items, perPage, changePage, currentPage, color = '#707070', activeColor = '#000000' }) => {

  const [firstPage, setFirstPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const totalItems = items.length

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / perPage)
    setTotalPages(totalPages)
    setLastPage(totalPages > PAG_NUMBERS ? PAG_NUMBERS : totalPages)

  }, [totalItems])

  const pageNumbers = []
  for (let i = firstPage; i <= lastPage; i++) pageNumbers.push(i)

  const determinatePages = (page) => {
    if (page == lastPage && page != totalPages) changeNumberPages(1)
    if (page == firstPage && page != 1) changeNumberPages(-1)

    changePage(page)
  }

  const changeNumberPages = operator => {
    setFirstPage(firstPage + operator)
    setLastPage(lastPage + operator)
  }

  const firstOrLastPage = (page: number) => {
    if (page == 1) {
      setFirstPage(page)
      setLastPage(totalPages > PAG_NUMBERS ? PAG_NUMBERS : totalPages)
      return changePage(page)
    }

    setFirstPage(totalPages > PAG_NUMBERS ? (totalPages - (PAG_NUMBERS - 1)) : 1)
    setLastPage(page)
    changePage(page)
  }

  return (
    <>
      <div className={styles._container}>
        {/* <div className={styles._arrowContainer} onClick={() => firstOrLastPage(1)}>
          <ArrowLeft />
        </div> */}
        <div
          className={styles._arrowContainer}
          style={{
            visibility: (currentPage == PAG_NUMBERS || lastPage > PAG_NUMBERS) ? 'visible' : 'hidden'
          }}
          onClick={() => firstOrLastPage(1)}
        >
          <div className={`${styles._arrow} _left`}>
            <ArrowLeft />
          </div>
        </div>
        {
          pageNumbers.map((pageNumber, index) => (
            <div key={index} 
              className={styles._numberContainer}
              onClick={() => determinatePages(pageNumber)}
            >
              <span
                className={styles._number}
              >
                {pageNumber}
              </span>
              <style jsx>{`
                .${styles._numberContainer} {
                  font-weight: ${pageNumber == currentPage ? 900 : 500};
                  color: ${pageNumber == currentPage ? '#000000' : '#808080'};
                }
              `}</style>
            </div>
          ))
        }
        {/* <div className={styles._arrowContainer} onClick={() => firstOrLastPage(totalPages)}>
          <ArrowRight />
        </div> */}
        <div
          className={styles._arrowContainer}
          style={{ visibility: (totalPages == lastPage) ? 'hidden' : 'visible' }}
          onClick={() => firstOrLastPage(totalPages)}
        >
          <div className={`${styles._arrow} _right`}>
            <ArrowRight />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(OwnPagination)
