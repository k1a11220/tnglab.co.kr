import React, { useState, useEffect } from "react"
import styled from "styled-components"

const MapContainer = styled.div``

const MapWrapper = styled.div`
  margin: 0 auto;
  width: var(--width);
  height: 800px;
`

const APP_KEY = "c8ca36fd7c4de7d09c6506859f45833b"

const TNGMap = () => {
  const [map, setMap] = useState(null)

  const createMap = () => {
    const script = document.createElement("script")
    script.async = true
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`
    document.head.appendChild(script)
    script.onload = () => {
      const { kakao } = window
      kakao.maps.load(() => {
        let markerPosition = new kakao.maps.LatLng(37.300568546931416, 127.03830501012999)
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        })
        let container = document.getElementById("Mymap")
        let options = {
          center: new kakao.maps.LatLng(37.300568546931416, 127.03830501012999),
          level: 3,
        }
        const createdMap = new kakao.maps.Map(container, options)
        marker.setMap(createdMap)
      })
    }
  }

  useEffect(() => {
    createMap()
  }, [])

  // marker 생성 + 표시

  return (
    <MapContainer className="App">
      <MapWrapper id="Mymap"></MapWrapper>
    </MapContainer>
  )
}

export default TNGMap
