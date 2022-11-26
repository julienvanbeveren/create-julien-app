import { createFile } from "../../files/file"

export function createContext(location: string) {

  const context = `import React, { useContext } from 'react'

const NewContext = React.createContext<useNewContextProps>({})

export function useNewContext() {
  return useContext(NewContext)
}

interface useNewContextProps {}

export function NewProvider({ children }: { children: React.ReactNode }) {
  
  const value: useNewContextProps = {}

  return <NewContext.Provider value={value}>{children}</NewContext.Provider>
}`

  createFile(location, "NewContext.tsx", context)

}