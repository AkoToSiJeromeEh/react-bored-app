import { useState , useEffect } from 'react'
import Axios from 'axios'
import Card from  '../../components/Card'
import Author from '../../components/Author'
import './common/main.css'
export const Main = () => {

  const [isDark , setToggleDark] = useState(false);
  const [boredData , setBoredData] = useState({})
  const onToggleDark = () => setToggleDark(preval => !preval);

  const onFetchBoredData = () => {

    Axios.get('http://www.boredapi.com/api/activity/')
    .then((response) => {
      setBoredData(response.data)
    })
  }
  useEffect(() => {

    onFetchBoredData()
    
  },[]);
  const darkModeOn = {
     
    backgroundColor : isDark ? '#101048' : ''
  }
  return (

    <main style={darkModeOn} className='main-container'>
        <Card
        isDark={isDark}
        onToggleDark={onToggleDark}
        boredActivites={boredData}
        onClickBored={onFetchBoredData}
        />
        <Author
         isDark={isDark}
        />
    </main>
  )
}
export default Main
