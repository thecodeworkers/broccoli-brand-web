import React, { useState } from 'react'
import { ColorPicker } from '@components'
import styles from './styles.module.scss'

const Sidebar = () => {

  const [unfold, setUnfold] = useState([false, false, false, false])

  const assignShow = (num, val) => {
    if(num == 0) setUnfold([val, unfold[1], unfold[2], unfold[3]])
    if(num == 1) setUnfold([unfold[0], val, unfold[2], unfold[3]])
    if(num == 2) setUnfold([unfold[0], unfold[1], val, unfold[3]])
    if(num == 3) setUnfold([unfold[0], unfold[1], unfold[2], val])
  }

  return (
    <>
      <aside className={styles._sidebarContainer}>
        <div className={styles._genderContainer}>
          <div className={styles._customSelect} onClick={() => {unfold[0] ? assignShow(0, false) : assignShow(0, true)}}>
            <p className={styles._customSelectText}>GENDER</p>
          </div>
          <div className={[styles._genderFilter, unfold[0] ? styles._show : styles._hide].join(" ")}>
            <label className={styles._labelFilter}>
              <input type='checkbox' className={styles._checkbox} id='choice1-1' name='choice1' />
              <span className={styles._filterText}>FEMALE</span>
            </label>
            <label className={styles._labelFilter}>
              <input type='checkbox' className={styles._checkbox} id='choice1-2' name='choice2' />
              <span className={styles._filterText}>MALE</span>
            </label>
            <label className={styles._labelFilter}>
              <input type='checkbox' className={styles._checkbox} id='choice1-3' name='choice3' />
              <span className={styles._filterText}>UNISEX</span>
            </label>
          </div>
        </div>
        <div className={styles._colorsContainer}>
          <div className={styles._customSelect} onClick={() => {unfold[1] ? assignShow(1, false) : assignShow(1, true)}}>
            <p className={styles._customSelectText}>COLORS</p>
          </div>
          <div className={[styles._colorFilter, unfold[1] ? styles._show : styles._hide].join(" ")}>
            <ColorPicker color='black' />
            <ColorPicker color='yellow' />
            <ColorPicker color='white' />
            <ColorPicker color='purple' />
            <ColorPicker color='blue' />
          </div>
        </div>
        <div className={styles._sizesContainer}>
          <div className={styles._customSelect} onClick={() => {unfold[2] ? assignShow(2, false) : assignShow(2, true)}}>
            <p className={styles._customSelectText}>SIZES</p>
          </div>
          <div className={[styles._sizesFilter, unfold[2] ? styles._show : styles._hide].join(" ")}>
            <label className={styles._labelFilter}>
              <input type='checkbox' className={styles._checkbox} id='choice1-1' name='choice1' />
              <span className={styles._filterText}>S</span>
            </label>
            <label className={styles._labelFilter}>
              <input type='checkbox' className={styles._checkbox} id='choice1-1' name='choice1' />
              <span className={styles._filterText}>M</span>
            </label>
            <label className={styles._labelFilter}>
              <input type='checkbox' className={styles._checkbox} id='choice1-1' name='choice1' />
              <span className={styles._filterText}>L</span>
            </label>
          </div>
        </div>
        <div className={styles._sizesContainer}>
          <div className={styles._customSelect} onClick={() => {unfold[3] ? assignShow(3, false) : assignShow(3, true)}}>
            <p className={styles._customSelectText}>CATEGORIES</p>
          </div>
          <div className={[styles._categoriesFilter, unfold[3] ? styles._show : styles._hide].join(" ")}>
            <label className={styles._labelFilter}>
              <input type='checkbox' className={styles._checkbox} id='choice1-1' name='choice1' />
              <span className={styles._filterText}>SHIRTS</span>
            </label>
            <label className={styles._labelFilter}>
              <input type='checkbox' className={styles._checkbox} id='choice1-1' name='choice1' />
              <span className={styles._filterText}>SWEATERS</span>
            </label>
            <label className={styles._labelFilter}>
              <input type='checkbox' className={styles._checkbox} id='choice1-1' name='choice1' />
              <span className={styles._filterText}>JACKETS</span>
            </label>
            <label className={styles._labelFilter}>
              <input type='checkbox' className={styles._checkbox} id='choice1-1' name='choice1' />
              <span className={styles._filterText}>PANTS</span>
            </label>
            <label className={styles._labelFilter}>
              <input type='checkbox' className={styles._checkbox} id='choice1-1' name='choice1' />
              <span className={styles._filterText}>ACCESORIES</span>
            </label>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
