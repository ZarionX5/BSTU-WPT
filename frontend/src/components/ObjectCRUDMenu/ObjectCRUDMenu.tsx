import { useEffect, useState } from "react"
import { TrackingObjectCreate, TrackingObjectPublic, IconsObject, TrackingObjectUpdate } from "@/client"
import { monitoringApi } from "@/app/services/monitoring";

export interface ObjectCRUDMenuProps {
  state: 'create' | 'update' | 'delate' | null
  objectParams?: TrackingObjectPublic
}

const ALL_ICONS: IconsObject[] = [
  '/src/object',
  '/src/person',
  '/src/bike',
  '/src/scooter',
  '/src/bus',
  '/src/car',
  '/src/tractor',
  '/src/harvester',
  '/src/airplane'
];

function ObjectCRUDMenu({
  state,
  objectParams
}: ObjectCRUDMenuProps) {
  const [createFormData, setCreateFormData] = useState<TrackingObjectCreate>({
    name: '',
    description: '',
    icon_object: '/src/object'
  })

  const [updateFormData, setUpdateFormData] = useState<TrackingObjectUpdate>({
      name: objectParams ? objectParams.name : '',
      description: objectParams ? objectParams.description : '',
      icon_object: objectParams ? objectParams.icon_object : '/src/object'
    })

  const [create] = monitoringApi.useCreateMutation()
  const [update] = monitoringApi.useUpdateMutation()
  const [delate] = monitoringApi.useDeleteMutation()

  useEffect(()=>{
    if (objectParams) {
      setUpdateFormData({
        name: objectParams.name,
        description: objectParams.description,
        icon_object: objectParams.icon_object,
      })
    }
  }, [objectParams])



  if (state === null) {
    return null
  } else if (state === "create") {
    return (
      <div>
        <div>
          Создание объекта:
        </div>

        <div>
        Название:
        <input type="text" value={createFormData.name} onChange={(e)=>{ setCreateFormData({
          ...createFormData,
          name: e.target.value
        }) }}/>
        </div>

        <div>
        Описание:
        <input type="text" value={createFormData.description} onChange={(e)=>{ setCreateFormData({
          ...createFormData,
          description: e.target.value
        }) }}/>
        </div>

        <div>
        Иконка:
        <select
          value={createFormData.icon_object}
          onChange={(e) => setCreateFormData({...createFormData, icon_object: e.target.value as IconsObject})}
        >
          {ALL_ICONS.map(icon => (
            <option key={icon} value={icon}>
              {icon}
            </option>
          ))}
        </select>
        </div>
        <button onClick={
          async () => {
            create(createFormData)
            .then((data) => {
              console.log('Результат запроса(create): ' + `${data.data}`)
            })
            .catch((err) => {
              console.log('Ошибка запроса(create): ' + `${err.error}`)
            })
          }}>
          Создать
        </button>
      </div>
    )
  } else if (state === "update" && objectParams) {
    return (
      <div>
        <div>
          Редактирование объекта
        </div>

        <div>
        Название:
        <input type="text" value={updateFormData.name} onChange={(e)=>{ setUpdateFormData({
            ...updateFormData,
            name: e.target.value,
        }) }}/>
        </div>

        <div>
        Описание:
        <input type="text" value={updateFormData.description} onChange={(e)=>{ setUpdateFormData({
          ...updateFormData,
          description: e.target.value
        }) }}/>
        </div>

        <div>
        Иконка:
        <select
          value={updateFormData.icon_object}
          onChange={(e) => setUpdateFormData({...updateFormData, icon_object: e.target.value as IconsObject})}
        >
          {ALL_ICONS.map(icon => (
            <option key={icon} value={icon}>
              {icon}
            </option>
          ))}
        </select>
        </div>
        <button onClick={async ()=> {

          const res = await update({id: objectParams.id, body: updateFormData})
          if (res.error) {
            console.log('Ошибка запроса(update): ' + `${res.error}`)
          } else {
            console.log('Результат запроса(update): ' + `${res.data}`)
          }
        }}>
          Редактировать
        </button>
      </div>
    )
  } else if (state === "delate" && objectParams) {
    return (
      <div>
        <div>
          Удаление объекта:
        </div>

        <div>
          Удалить объект {objectParams.name}?
        </div>

        <button onClick={async () => {
          try {
            const res = await delate({id: objectParams.id}).unwrap()
            console.log('Результат запроса(delate): ' + `${res}`)
          } catch (err) {
            console.log('Ошибка запроса(delate): ' + `${err}`)
          }
        }}>
          Удалить
        </button>
      </div>
    )
  }

}

export default ObjectCRUDMenu
