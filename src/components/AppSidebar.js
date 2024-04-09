import React ,{useContext,useState}from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logo } from 'src/assets/brand/logo'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { cilAccountLogout, cilTransfer } from '@coreui/icons'
import { Link, NavLink } from 'react-router-dom'
import useAxios from 'src/utils/useAxios'
import AuthContext from 'src/context/AuthContext'
import baseURl from 'src/utils/baseurl'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  let api = useAxios()
  let baseurl = baseURl()
  let [notes, setNotes] = useState()
  let [notes1, setNotes1] = useState()
  const { user, authTokens, logoutUser } = useContext(AuthContext)
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>

      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <div style={{ padding: '10px 14px' }} onClick={logoutUser}>
        <NavLink to="/login" style={{ color: 'white', textDecoration: 'none' }}>
          <CIcon
            icon={cilAccountLogout}
            style={{ color: 'white', marginLeft: '8px', fontWeight: '600' }}
            size="lg"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="div" style={{ fontSize: '18px', fontWeight: '600' }}>
            Logout
          </span>
        </NavLink>
      </div>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
