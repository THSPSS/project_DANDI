/*global kakao*/ 
import React, { useState, useEffect } from 'react';
import {showMap} from "../script/course.js"


export const Course = () => {

  const courses = [
    { no: 1,
      name: "이월드",
      code: "EWORLD",
      latitude: 35.87555082502176,
      longitude: 128.6816374505427,
      visited: "N",
    },
    {
      no: 2,
      name: "수성못",
      code: "SUSUNG",
      latitude: 35.87583123506328,
      longitude: 128.6817532073904,
      visited: "N",
    },
    {
      no: 3,
      name: "동성로 스파크",
      code: "SPARK",
      latitude: 35.87664030121222,
      longitude: 128.68155341448463,
      visited: "N",
    },
    {
      no: 4,
      name: "강정보",
      code: "GANGJEONGBO",
      latitude: 35.87623769570281,
      longitude: 128.68104555230227,
      visited: "N",
    },
    {
      no: 5,
      name: "라이온즈파크",
      code: "LIONSPARK",
      latitude: 35.87593769570281,
      longitude: 128.68104555230227,
      visited: "N",
    },
  ]
  const [currentLatLon, setCurrentLatLon] = useState({ lat: 37.4812845080678, lon: 126.952713197762 });
  const [message, setMessage] = useState('현재 위치를 알 수 없어 기본 위치로 이동합니다.');

  const showMap = (lat, lon) => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
  
    var markerPosition = new kakao.maps.LatLng(lat, lon);
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }
  

  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;


  
        showMap(lat, lon);
    })
    } else {
        showMap(35.875433, 128.681619);
    }
    }, [])


  return (
    <div className='course'>
      <ul className="courses">
        {courses.map(course=>(
          <li className="course" 
            key={course.no}
            data-name={course.name}
            data-latitude={course.latitude}
            data-longitude={course.longitude}
            data-visited={course.visited}
          >
            {course.visited ==="Y" ? (
              <p>you visited here!</p>
            ):<p></p>}

            <p>{course.name}</p>
          </li>
        ))}
        <li className="course on" data-code="USER">현재 위치</li>
      </ul>

      <div id="map" style={{width:"500px", height:"400px"}}></div>
    </div>
  )
}

export default Course;
