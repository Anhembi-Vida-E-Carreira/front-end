import { useRecoilState } from 'recoil'
import * as S from './styled'
import { PostStationAtom } from '../../../context/newPost'
import { useEffect, useState } from 'react'
import getStations from '../../../../infra/gateways/getStations'

export default function InputStation(){
    const [selectedStation, setSelectedStation] = useRecoilState(PostStationAtom)
    const [stations, setStations] = useState<string[]>([])

    const get = async () => {
      const newStations = await getStations()
      setStations(newStations)
    }

    useEffect(() => {
      get()
    }, [])
    
    return (
    <S.Container>
        <S.StandartSelect 
        placeholder='Estação em que ocorreu...'  
        value={selectedStation} 
        onChange={(e) => setSelectedStation(e.target.value)}>
            {stations.map((station, index) => {
                return (
                    <S.SelectOptions key={index} value={station}>{station}</S.SelectOptions>
                )
            })}
        </S.StandartSelect>
    </S.Container>
   
            
    )
}