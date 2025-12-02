import { useState } from "react"

import { monitoringApi } from "@/app/services/monitoring"
import { TrackingObjectPublic} from "@/client"

import ObjectList from "../ObjectList/ObjectList"
import Search from "../Search/Search"
import ObjectCRUDMenu from "../ObjectCRUDMenu/ObjectCRUDMenu"
import {ObjectCRUDMenuProps} from "../ObjectCRUDMenu/ObjectCRUDMenu"

import SettingsLogo from '/src/assets/other/settings.svg?react'
import DeleteLogo from '/src/assets/other/delete.svg?react'
import CloseLogo from '/src/assets/other/close.svg?react'

import ObjectIcon from "../ObjectIcon/ObjectIcon"
import './ObjectsTab.css'


function ObjectsTab() {
  const { isLoading, data: users } = monitoringApi.useReadAllQuery({})
  const [searchedUsers, setSearchedUsers] = useState<TrackingObjectPublic[]>(users ? users.data : [])
  const [objectCRUD, setObjectCRUD] = useState<ObjectCRUDMenuProps>({state: null})

  if (isLoading || !users) {
    return null
  }

  return (
    <>
      <div className="objects-tab">
        <div className="objects-list">
          <div className="other-control-bar">
            <button onClick={() => setObjectCRUD({...objectCRUD, state: "create"})}>Создать</button>
            <Search<TrackingObjectPublic> data={users.data} searchFields={['name']} onSearchResults={setSearchedUsers} />
          </div>
          <div className="title-object-bar line-item">
            <span>

            </span>
            <span>
              <SettingsLogo/>
            </span>
            <span>
              <DeleteLogo/>
            </span>
          </div>

          <ObjectList<TrackingObjectPublic> objects={searchedUsers} onObjectPrint={(o, i) => {
            return <div className="list-object-item line-item" key={i}>
              <span>
                <ObjectIcon objIco={o.icon_object} />
              </span>
              <span className="object-name">
                {o.name}
              </span>
              <span>
                <SettingsLogo onClick={()=>{setObjectCRUD({state: "update", objectParams: o})}}/>
              </span>
              <span>
                <CloseLogo onClick={()=>{setObjectCRUD({state: "delate", objectParams: o})}}/>
              </span>
            </div>
          }} />
        </div>

        <div className="object-control">
          <div>
            <ObjectCRUDMenu state={objectCRUD.state} objectParams={objectCRUD.objectParams} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ObjectsTab
