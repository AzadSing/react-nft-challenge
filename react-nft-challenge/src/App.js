import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import CollectionCard from './components/CollectionCard'

import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

    const [punkListData, setPunkListData] = useState([])

    useEffect(() => {
        const getMyNfts = async () => {
            const openseaData = await axios.get('https://testnets-api.opensea.io/assets?assets-contract_address=0x391cc98a534eac45cC5E23F16c8d4e97340f9B43')

            console.log(openseaData.data.assets);
        }

        return getMyNfts()
    }
    , [] )

  return (
      <div className = 'app' >
          <Header />
          <CollectionCard id={0} name={' Himanchali sherlocky'} traits={[{ 'value': 43 }]} image={'https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg'} />
          </div>
  );
}

export default App;
