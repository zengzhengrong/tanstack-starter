const handleErrorWithNull = async <DataType>(callback: () => Promise<DataType>) => {
  try {
    const value = await callback()

    return value
  } catch {
    return null
  }
}

const handleErrorWithArray = async <DataType>(callback: () => Promise<DataType[]>) => {
  try {
    const value = await callback()

    return value
  } catch {
    return [] as DataType[]
  }
}

export { handleErrorWithArray, handleErrorWithNull }
