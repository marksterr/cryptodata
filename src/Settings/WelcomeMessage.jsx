import {AppContext} from '../App/AppProvider';

export default function ({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit}) =>
        firstVisit ? <div>
          Welcome to CoinView, please select your favorite coins to begin.{' '}
        </div> : null
      }
    </AppContext.Consumer>
  )
}