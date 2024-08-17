import {
  Address,
  Area,
  Information,
  Parameters,
} from "./submitDeposit.types.ts"

export interface IDeposit {
  id: number | string
  type_deposit: string
  selected?: boolean
  area?: Area
  registration_address?: Address
  parameters?: Parameters
  information?: Information
}
