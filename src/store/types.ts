import NumFactoryStateTypes from './modules/NumFactory/types'

export default interface RootStateTypes {
  text: string
  count: number
  collapse: boolean
  token: string
}

export interface AllStateTypes extends RootStateTypes {
  numFactoryModule: NumFactoryStateTypes
}
