import { useEffect, useState } from "react"

import { monitoringApi } from "@/app/services/monitoring"
import { TrackingObjectPublic} from "@/client"

import ObjectList from "../ObjectList/ObjectList"
import Search from "../Search/Search"
import Map from '../../components/Map/Map'
import {ObjectInfo} from '../../components/Map/Map'


import LocationLogo from '/src/assets/other/location.svg?react'
import SignalLogo from '/src/assets/other/signal.svg?react'


import ObjectIcon from "../ObjectIcon/ObjectIcon"
import './MonitoringTab.css'


function MonitoringTab() {
  const { isLoading, data } = monitoringApi.useReadAllQuery({}, {pollingInterval: 5000})
  const [searched, setSearched] = useState<TrackingObjectPublic[]>(data ? data.data : [])
  const [selected, setSelected] = useState<number[]>([])

  useEffect(() => {
    setSelected([])
  }, [searched])

  if (isLoading || !data) {
    return null
  }

  return (
    <>
      <div className="monitoring-tab">
        <div className="objects-list">
          <div className="other-control-bar">
            <Search<TrackingObjectPublic> data={data.data} searchFields={['name']} onSearchResults={setSearched} />
          </div>
          <div className="title-object-bar line-item">
            <span>
              <input
              className="select-all"
              type="checkbox"
              name="select-all"
              checked={selected.length === searched.length && searched.length !== 0}
              onChange={() => {
                if (selected.length === searched.length) {
                  setSelected([])
                } else {
                  setSelected([...Array(searched.length).keys()])
                }
              }}
              />
            </span>
            <span>

            </span>
            <span>
              <LocationLogo />
            </span>
            <span>
              <SignalLogo/>
            </span>
            <span>
              lat, lon
            </span>
          </div>

          <ObjectList<TrackingObjectPublic> objects={searched} onObjectPrint={(o, i) => {
            return <div className="list-object-item line-item" key={i}>
              <span>
                <input
                className="select-item"
                type="checkbox"
                name="select-item"
                checked={selected.findIndex((e) => e === i) > -1}
                onChange={() => {
                  if (selected.findIndex((e) => e === i) > -1) {
                    setSelected(selected.filter((e) => e !== i))
                  } else {
                    setSelected([...selected, i])
                  }
                }}
                />
              </span>
              <span>
                <ObjectIcon objIco={o.icon_object} />
              </span>
              <span className="object-name">
                {o.name}
              </span>
              <span className={"object-state " + (o.signal === 0 ? 'bad' : 'good')}>
                {o.signal === 0 ? 'off' : 'on'}
              </span>
              <span>
                {o.signal}%
              </span>
              <span>
                {o.position_lat}, {o.position_lon}
              </span>
            </div>
          }} />
        </div>

        <div className="viewer-panel">
          <Map objects={[...selected.map((e, i) => {
            const o = searched[e]
            let obj: ObjectInfo = {
              name: i.toString(),
              iconPath: o.icon_object ? o.icon_object : '',
              lat: o.position_lat as number,
              lon: o.position_lon as number,
            }
            return obj
          })]} />
        </div>
      </div>
    </>
  )
}

export default MonitoringTab
