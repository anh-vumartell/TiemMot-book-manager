import { CustomizeNoArgFunctionReturnVoidType } from '../index'
export interface NavBarPropsType {
  onSignOut: CustomizeNoArgFunctionReturnVoidType
}

export interface SideNavProps {
  onCloseDrawer: CustomizeNoArgFunctionReturnVoidType,
  isOpen: boolean,
}