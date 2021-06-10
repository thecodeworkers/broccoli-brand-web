import React, { memo } from 'react'
import { useState } from 'react'
import styles from './styles.module.scss'
import { ArrowLeft, ArrowRight } from '../../../public/images/icons'

const Pagination = ({ items, perPage, changePage, currentPage, color = '#707070', activeColor = '#262833' }) => {
  const [firstPage, setFirstPage] = useState(1)

  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / perPage)

  const [lastPage, setLastPage] = useState(totalPages > 5 ? 5 : totalPages)

  const pageNumbers = []
  for (let i = firstPage; i <= lastPage; i++) pageNumbers.push(i)

  const determinatePages = (page) => {
    if(page == lastPage && page != totalPages) changeNumberPages(1)
    if(page == firstPage && page != 1) changeNumberPages(-1)

    changePage(page)
  }

  const changeNumberPages = operator => {
    setFirstPage(firstPage + operator)
    setLastPage(lastPage + operator)
  }

  const firstOrLastPage = (page: number) => {
    if(page == 1) {
      setFirstPage(page)
      setLastPage(totalPages > 5 ? 5 : totalPages)
      return changePage(page)
    }

    setFirstPage(totalPages > 5 ? (totalPages - 4) : 1)
    setLastPage(page)
    changePage(page)
  }

  return (
    <div className={styles._container}>
      <div className={styles._arrowContainer} onClick={() => firstOrLastPage(1)}>
        <ArrowLeft />
      </div>
      {
        pageNumbers.map((pageNumber, index) => (
          <div key={index} className={styles._numberContainer} onClick={() => determinatePages(pageNumber)}>
            <span
              className={styles._number}
              style={{ color: pageNumber == currentPage ? activeColor : color }}
            >
              {pageNumber}
            </span>
          </div>
        ))
      }
      <div className={styles._arrowContainer} onClick={() => firstOrLastPage(totalPages)}>
        <ArrowRight />
      </div>
    </div>
  )
}

export default memo(Pagination)
