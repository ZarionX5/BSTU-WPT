import { useState, useMemo, useEffect } from "react"

interface SearchProps<T> {
  data: T[]
  searchFields: (keyof T)[]
  placeholder?: string
  onSearchResults?: (results: T[]) => void
  caseSensitive?: boolean
}

function Search<T>({
  data,
  searchFields,
  placeholder = "Search...",
  onSearchResults,
  caseSensitive = false
}: SearchProps<T>) {
  const [searchText, setSearchText] = useState<string>('')

  const filteredData = useMemo(() => {
    if (!searchText.trim()) return data

    const searchTerm = caseSensitive ? searchText : searchText.toLowerCase()

    return data.filter(item =>
      searchFields.some(field => {
        const fieldValue = item[field]
        if (typeof fieldValue === 'string') {
          const value = caseSensitive ? fieldValue : fieldValue.toLowerCase()
          return value.includes(searchTerm)
        }
        return false
      })
    )
  }, [data, searchText, searchFields, caseSensitive])

  useEffect(() => {
    onSearchResults?.(filteredData)
  }, [searchText, data])

  return (
    <input
      className="search"
      type="text"
      value={searchText}
      placeholder={placeholder}
      onChange={(e) => setSearchText(e.target.value)}
    />
  )
}

export default Search
