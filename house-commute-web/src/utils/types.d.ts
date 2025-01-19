type UtilType = {
  importScript: (url: string, id: string) => Promise<Boolean>
}

type Constant = {
  GaoDe_Key: string,
  GaoDe_Script: string,
  isDev: boolean,
}

declare interface UtilsType {
  util: UtilType,
  constant: Constant,
  [key: string]: any,
}
