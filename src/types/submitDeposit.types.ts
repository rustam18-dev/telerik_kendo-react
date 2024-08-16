type Address = {
  country: string
  region: string
  village: string
  street: string
  quarter: string
  house: string
  apartment: string
}

type Area = {
  all_square: string
  living_area: string
  land: string
  documents: string
  additionally: string
}

type Parameters = {
  brand: string
  model: string
  color: string
  number_engine: string
  year_of_issue: string
  state_passport: string
  technical_passport: string
  number_body: string
  register_place: string
  owner: string
  type_body: string
  additionally: string
}

type Information = {
  collateral: string
  market: string
  description: string
  pledger: string
  owner: string
}

export type BodyType = {
  type_deposit: "05" | "04" | "03" | "02" | "01" | "00" | string
  area?: Area
  parameters?: Parameters
  information?: Information
  registration_address?: Address
}
