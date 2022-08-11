import highchartsConfig from './HighchartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function(){
  return (
    <AppContext.Consumer>
      {({}) =>
        <Tile>
          <HighchartsReact highcharts={Highcharts} options={highchartsConfig()}/>
        </Tile>
      }
    </AppContext.Consumer>
  )
}