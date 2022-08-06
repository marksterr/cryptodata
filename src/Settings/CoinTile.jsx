import {AppContext} from '../App/AppProvider'
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile'
import CoinHeaderGrid from './CoinHeaderGrid'
import CoinImage from '../Shared/CoinImage'

export default function({coinKey, topSection}){

  const TileClass = SelectableTile;

  return <AppContext.Consumer>
    {({coinList}) => {
      let coin = coinList[coinKey];

      let TileClass = SelectableTile;
      if(topSection){
        TileClass = DeletableTile;
      }

      return <TileClass>
        <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol}/>
        <CoinImage coin={coin}/>
      </TileClass>
    }}
  </AppContext.Consumer>
}