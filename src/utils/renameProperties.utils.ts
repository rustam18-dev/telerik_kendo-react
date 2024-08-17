import { IDeposit } from "../types/deposit.types.ts"

export const renameProperties = (obj: IDeposit) => {
  const { type_deposit = "", id = 0, selected = false, ...rest } = obj

  const updatedRest: { [key: string]: any } = {}

  for (const key in rest) {
    if (Object.prototype.hasOwnProperty.call(rest, key)) {
      const newKey = `${key}_${type_deposit}`
      updatedRest[newKey] = rest[key]
    }
  }

  return { ...updatedRest }
}
