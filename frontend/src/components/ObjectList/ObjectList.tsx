interface ObjectListProps<T> {
  objects: T[]
  onObjectPrint: (object: T, index: number) => React.ReactNode
  placeholder?: string
  className?: string
}

function ObjectList<T>({
  objects,
  placeholder = '...',
  onObjectPrint,
  className
}: ObjectListProps<T>) {

  if (!objects.length) {
    return (
      <div className={className}>
        {placeholder}
      </div>
    )
  }

  return (
    <div className={className}>
      {objects.map((object, index) => (
          onObjectPrint(object, index)
      ))}
    </div>
  )
}

export default ObjectList
