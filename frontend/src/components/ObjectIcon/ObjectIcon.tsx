import { IconsObject } from "@/client"

import PedalBikeLogo from '/src/assets/other/pedal-bike.svg?react'
import PersonLogo from '/src/assets/other/person.svg?react'
import CarLogo from '/src/assets/other/car.svg?react'
import BusLogo from '/src/assets/other/bus.svg?react'
import AirplaneLogo from '/src/assets/other/airplane.svg?react'
import HarvesterLogo from '/src/assets/other/harvester.svg?react'
import TractorLogo from '/src/assets/other/tractor.svg?react'
import ScooterLogo from '/src/assets/other/scooter.svg?react'
import MonitoringLogo from '/src/assets/other/monitoring.svg?react'

interface ObjectIconProps {
  objIco: IconsObject | undefined
}

function ObjectIcon({objIco}: ObjectIconProps) {
  switch (objIco) {
    case "/src/bike":
      return <PedalBikeLogo/>
    case "/src/person":
      return <PersonLogo/>
    case "/src/scooter":
      return <ScooterLogo/>
    case "/src/car":
      return <CarLogo/>
    case "/src/airplane":
      return <AirplaneLogo/>
    case "/src/bus":
      return <BusLogo/>
    case "/src/harvester":
      return <HarvesterLogo/>
    case "/src/tractor":
      return <TractorLogo/>
    default:
      return <MonitoringLogo/>
  }
}

export default ObjectIcon;
